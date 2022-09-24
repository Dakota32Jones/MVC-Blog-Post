// Testing Post model
const { Post } = require("../models");

const postData = [
  {
    title: "Test 1",
    post_content: "Test 1 content",
    user_id: 3,
  },
  {
    title: "Test 2",
    post_content: "Test 2 content",
    user_id: 1,
  },
  {
    title: "Test 3",
    post_content: "Test 3 content",
    user_id: 2,
  },
  {
    title: "Test 4",
    post_content: "Test 4 content",
    user_id: 5,
  },
  {
    title: "Test 5",
    post_content: "Test 5 content",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
