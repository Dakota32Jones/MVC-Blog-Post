// testing user model
const { User } = require("../models");

const userData = [
  {
    username: "test_one",
    twitter: "test1",
    github: "test1",
    email: "test1@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "test_two",
    twitter: "test2",
    github: "test2",
    email: "test2b@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "test_three",
    twitter: "test3",
    github: "test3",
    email: "test3@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "test_four",
    twitter: "test4",
    github: "test4",
    email: "test4@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "test_five",
    twitter: "test5",
    github: "test5",
    email: "test5@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "test_six",
    twitter: "test6",
    github: "test6",
    email: "test6@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
