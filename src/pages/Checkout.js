import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Meta title={"Checkout"} />
            <BreadCrumb title="Checkout" />

            <Container class1='checkout-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>Digitex</h3>
                            <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total' to="/cart">Carrito </Link>
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total active" aria-current="page">
                                        Informacion
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total active">Envios</li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total active" aria-current="page">
                                        Medios de Pago
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title total'>Informacion de Contacto</h4>
                            <p className='user-details total'>
                                Ignacio Fernandez (ignaciofernandez@gmail.com)
                            </p>
                            <h4 className='mb-3'>Direccion de Envio</h4>
                            <form
                                action=''
                                className='d-flex gap-15 flex-wrap justify-content-between'
                            >
                                <div className='w-100'>
                                    <select
                                        name=''
                                        className='form-control form-select'
                                        id=''
                                    >
                                        <option value='' selected disabled>
                                            Elegir Pais
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Nombre' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Apellido' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Direccion' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Numero de Departamento' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Ciudad' className='form-control' />
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name=''
                                        className='form-control form-select'
                                        id=''
                                    >
                                        <option value='' select disabled>
                                            Elegir Provincia
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Codigo Postal' className='form-control' />
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to='/cart' className='text-dark'><BiArrowBack className='me-2' />Volver al Carrito</Link>
                                        <Link to='/cart' className='button'>Continuar al Envio</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span
                                            style={{ top: "-10px", right: "2px" }}
                                            className='badge bg-secondary text-white rounded-circle position-absolute p-2'
                                        >
                                            1
                                        </span>
                                        <img src='../images/watch.jpg' className='img-fluid' alt='product' />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>NOMBRE DEL PRODUCTO</h5>
                                        <p className='total-price'>Informacion del Producto</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>SubTotal</p>
                                <p className='total-price'>$ 10000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Envio</p>
                                <p className='mb-0 total-price'>$ 0</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 10000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout