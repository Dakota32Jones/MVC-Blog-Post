const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is amazing!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Wow, amazing work!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Awesome! Yay!",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "We just lost",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "This is great a great game!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "This might be the greatest feature.",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "How did you do this!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Let's hope this works!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
