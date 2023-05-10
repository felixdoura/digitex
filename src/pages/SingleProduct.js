import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'


const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Nombre del Producto"} />
            <BreadCrumb title="Nombre del Producto" />

            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'></div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>

            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Descripcion</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, ornare ultricies sem viverra magnis urna felis facilisi tincidunt, taciti libero fringilla sodales dictumst condimentum justo. Dapibus facilisis leo quis iaculis at donec consequat massa, ut nullam id auctor rutrum vel aliquet maecenas orci, cubilia suspendisse ullamcorper senectus lacinia proin nec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='reviews-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Reseñas</h3>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Reseñas de Usuarios:</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor='#ffd700'
                                            />
                                            <p className='mb-0'>Basado en 6 opiniones</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=''>Escriba una Reseña</a>
                                        </div>
                                    )}
                                </div>
                                <div className='review-form py-4'>
                                    <h4 className='mb-2'>Escriba una Reseña</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={true}
                                                activeColor='#ffd700'
                                            />
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comentarios'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Enviar Reseña</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor='#ffd700'
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, ornare ultricies sem viverra magnis urna felis facilisi tincidunt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>PRODUCTOS POPULARES</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct