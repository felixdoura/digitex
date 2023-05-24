import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const SingleProduct = () => {
    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg"
    };
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    const [orderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Nombre del Producto"} />
            <BreadCrumb title="Nombre del Producto" />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg' alt='' className='img-fluid' />
                            </div>
                            <div>
                                <img src='https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg' alt='' className='img-fluid' />
                            </div>
                            <div>
                                <img src='https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg' alt='' className='img-fluid' />
                            </div>
                            <div>
                                <img src='https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg' alt='' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Auriculares para niño Buck 10 de colores
                                </h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value="3"
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className='mb-0 t-review'>( 2 reseñas )</p>
                                </div>
                                <a className='review-btn' href='#review'>Escriba una reseña</a>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tipo :</h3>
                                    <p className='product-data'>Reloj</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Marca :</h3>
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Categoria :</h3>
                                    <p className='product-data'>Reloj</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Etiquetas :</h3>
                                    <p className='product-data'>Reloj</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Disponibilidad :</h3>
                                    <p className='product-data'>En Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Talle :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Cantidad :</h3>
                                    <div className=''>
                                        <input
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>
                                            Agregar al Carrito
                                        </button>
                                        <button className='button signup'>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='/'>
                                            <TbGitCompare className='fs-5 me-2' />
                                            Comparar Producto
                                        </a>
                                    </div>
                                    <div>
                                        <a href='/'>
                                            <AiOutlineHeart className='fs-5 me-2' />
                                            Agregar a la Lista de Deseados
                                        </a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Envio y Devoluciones</h3>
                                    <p className='product-data'>Envio gratuito y devolucones disponibles en todas las ordenes! <br />{" "} Hacemos envios en todo el pais de <b>5 a 10 dias habiles!</b></p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Envio y Devoluciones</h3>
                                    <Link
                                        href="/"
                                        onClick={() => {
                                            copyToClipboard("https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg");
                                        }}
                                    >Copia del Link del Producto</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
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
            </Container>

            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reseñas</h3>
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
                                        <a className='text-dark text-decoration-underline' href='/'>Escriba una Reseña</a>
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
            </Container>

            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>PRODUCTOS POPULARES</h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct