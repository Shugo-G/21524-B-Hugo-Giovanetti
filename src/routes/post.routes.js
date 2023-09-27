const { Router } = require('express')
const { createPost, listPosts, updatePost, deletePost } = require('../controllers/post.controllers')

const router = Router()

router.get("/", listPosts);
router.post("/", createPost);
router.post("/:id", updatePost);
router.post("/eliminar/:id", deletePost)

module.exports = router