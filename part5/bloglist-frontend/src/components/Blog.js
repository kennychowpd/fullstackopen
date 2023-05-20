import { useState } from 'react'

const Blog = ({ blog, name, username, handleLikes, handleDeleteBlog }) => {
  const [showDetails, setShowDetails] = useState(false)
  const blogStyle = {
    margin: '5px 0px',
    padding: 10,
    border: '1px black solid',
  }

  console.log(blog)

  return (
    <div style={blogStyle}>
      <div><em>{blog.title}</em>{` by ${blog.author} `}
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'hide' : 'view'}
        </button>
      </div>
      {showDetails && (
        <div>
          <a href={blog.url} style={{ textDecoration: 'none' }}>{blog.url}</a>
          <div>likes {blog.likes} <button onClick={() => { handleLikes(blog) }}>like</button></div>
          <div>{name}</div>
          {blog.user.username === username ? <button onClick={() => { handleDeleteBlog(blog) }}>remove</button>
          : null}
        </div>
      )}
    </div>
  )
}

export default Blog