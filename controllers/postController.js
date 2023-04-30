const { Post, User } = require('../models');

const getPosts = (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getPostById = (req, res) => {
  Post.findById(req.params.id)
    .then((post) =>
      !post
      ? res.status(404).json({ msg: "Post not found" })
      : res.json(post))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const createPost = (req, res) => {
  Post.create(req.body)
    .then((post) => res.json(post))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const updatePost = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true },
  )
  .then((post) =>
    !post
    ? res.status(404).json({ msg: "Post not found" })
    : res.json(post))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((post) =>
      !post
      ? res.status(404).json({ msg: "Post not found" })
      : res.json(post))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const addReaction = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    { $push: { reactions: req.body } },
    { new: true, runValidators: true }
  )
    .then((post) =>
      !post
      ? res.status(404).json({ msg: "Post not found" })
      : res.json(post))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  addReaction,
};