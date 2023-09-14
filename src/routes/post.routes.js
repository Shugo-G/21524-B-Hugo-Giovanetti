const { Router } = require('express')
const { createPost, listPosts, updatePost } = require('../controllers/post.controllers')

const router = Router()

router.get("/", listPosts);
router.post("/", createPost);
router.post("/:id", updatePost);

module.exports = router