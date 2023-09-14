const { PostModel } = require('../models/posts')

const createPost = async (req, res) => {
    const {title, content, image} = req.body

    await PostModel.create({title, content, image})

    res.send('post created successfuly')

    res.redirect("/");

}

const listPosts = async (req, res) => {
    const allPosts = await PostModel.findAll()

    res.json(allPosts)
}

module.exports = {createPost, listPosts}