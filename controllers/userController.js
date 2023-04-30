const { User, Post } = require("../models");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) =>
      !user
      ? res.status(404).json({ msg: "User not found" })
      : res.json(user))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

const createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const updateUser = (req, res) => {
  User.getUserById(req.params.id)
    .then((user) => 
      !user
      ? res.status(404).json({ msg: "User not found" })
      : User.updateOne({ _id: req.params.id }, req.body))
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const deleteUser = (req, res) => {
  User.getUserById(req.params.id)
    .then((user) =>
      !user
      ? res.status(404).json({ msg: "User not found" })
      : User.deleteOne({ _id: req.params.id }))
    .then((user) => res.json(user)) 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
      

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};