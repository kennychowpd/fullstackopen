const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// blogsRouter.get('/', (request, response) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  console.log('get blog', blogs)
  response.json(blogs)
})

// blogsRouter.post('/', (request, response) => {
//   const blog = new Blog(request.body)

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result)
//     })
// })
blogsRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)
  if (!body.url || !body.title) {
    response.status(400).json(body)
  } else {
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    })

    const savedBlog = await blog.save()
    console.log('post blog', savedBlog)
    response.status(201).json(savedBlog)
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  console.log(body.id)
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(202).json(updatedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})


module.exports = blogsRouter