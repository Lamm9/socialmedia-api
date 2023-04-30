const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addReaction,
  deleteReaction,
} = require('../../controllers/postController');

// /api/thoughts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:id
router.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

// /api/posts/reactions
router.route('/:id/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;