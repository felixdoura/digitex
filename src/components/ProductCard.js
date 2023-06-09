import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div
                className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}
            >
                <Link to=':id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src='/images/wish.svg' alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src='/images/watch.jpg' alt='product img' className='img-fluid' />
                        <img src='/images/watch-1.jpg' alt='product img' className='img-fluid' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Auriculares para niño Buck 10 de colores
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia bibendum, netus potenti dictumst elementum tincidunt curae lectus eros ornare cubilia, cras vestibulum placerat mattis cum hendrerit nulla commodo.
                        </p>
                        <p className='price'>$100</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/add-cart.svg' alt='add cart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}
            >
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='/images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='/images/watch.jpg' alt='product img' className='image-fluid' />
                        <img src='/images/watch-1.jpg' alt='product img' className='img-fluid' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>Auriculares para niño Buck 10 de colores</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia bibendum, netus potenti dictumst elementum tincidunt curae lectus eros ornare cubilia, cras vestibulum placerat mattis cum hendrerit nulla commodo.
                        </p>
                        <p className='price'>$100</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='/images/add-cart.svg' alt='add cart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard