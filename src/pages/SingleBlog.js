import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />

            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                    <HiOutlineArrowLeft className='fs-4'/>Volver a Blogs
                                </Link>
                                <h3 className='title'>
                                    Un hermoso dia de Renacimiento
                                </h3>
                                <img 
                                    src='/images/blog-1.jpg'
                                    className='img-fluid w-100 my-4'
                                    alt='blog' 
                                />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit, nam aptent ridiculus risus dui placerat. Posuere at venenatis aptent praesent pellentesque faucibus sodales dictum, platea cubilia fames mollis mus integer per habitasse imperdiet, vestibulum nisl metus tellus dictumst laoreet tristique. Malesuada venenatis curabitur commodo diam mus rhoncus feugiat nam orci ligula sed lobortis, vestibulum imperdiet quis sollicitudin convallis congue mi primis scelerisque dignissim bibendum, suscipit iaculis eleifend vulputate montes porta turpis porttitor nisi fusce lectus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default SingleBlog