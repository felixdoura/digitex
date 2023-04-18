import React from 'react'
import {Link} from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='/images/blog-1.jpg' alt='blog' className='img-fluid' />
            </div>
            <div className='blog-content'>
                <p className='date'>25 mayo 2022</p>
                <h5 className='title'>Un hermoso dia de Renacimiento</h5>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className='button' to='/'>CONOCER MAS</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard