const { PostModel } = require('../models/posts')

const createPost = async (req, res) => {
    const {title, content, image} = req.body;

    await PostModel.create({title, content, image})

    res.redirect("/");

}

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const {title, content, image} = req.body;

    const post = await PostModel.findByPk(postId);

    await post.update({title, content, image})

    res.redirect("/");

}

const deletePost = async (req, res) => {
    const postId = req.params.id;
    const {title, content, image} = req.body;

    const post = await PostModel.findByPk(postId);

    await post.destroy({title, content, image})

    res.redirect("/");

}


const listPosts = async (req, res) => {
    const allPosts = await PostModel.findAll()

    res.json(allPosts)
}

module.exports = {createPost, listPosts, updatePost, deletePost}