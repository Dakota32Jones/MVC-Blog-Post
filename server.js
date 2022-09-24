// require correct npm packages/dependencies
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
require("dotenv").config();

const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "blue",
  cookie: {},
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// using middleware for our application
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// get database connection and server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on` + { PORT }));
});
