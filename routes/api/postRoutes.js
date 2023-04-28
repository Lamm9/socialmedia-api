const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  addReaction,
} = require('../../controllers/postController');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:id
router.route('/:id').get(getPostById);

// /api/posts/reactions
router.route('/:id/reactions').put(addReaction);

module.exports = router;