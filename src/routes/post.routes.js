const { Router } = require('express')
const { createPost, listPosts } = require('../controllers/post.controllers')

const router = Router()

router.get('/', listPosts)
router.post('/', createPost)

module.exports = router