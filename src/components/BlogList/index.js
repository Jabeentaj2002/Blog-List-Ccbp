// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogListDetails} = props

  return (
    <div className="blog-list-container">
      <ul className="blog-list">
        {blogListDetails.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
