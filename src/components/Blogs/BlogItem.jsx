import React from 'react';
import './BlogItem.css';
import Chip from './Chip';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => (
  <div className='blogItem-wrap'>
    <img src={blog.cover} alt="blog cover image" className='blogItem-cover' />
    <Chip label={blog.category} />
    <h3>{blog.title}</h3>
    <p className='blogItem-desc'>{blog.description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={blog.authorAvatar} alt="avatar" />
        <div>
          <h6>{blog.authorName}</h6>
          <p>{blog.createdAt}</p>
        </div>
      </div>
      <Link className='blogItem-link' to={`/blog/${blog.id}`}>
        <span role="img" aria-label="read-more">➝</span>
      </Link>
    </footer>
  </div>
);

export default BlogItem;
