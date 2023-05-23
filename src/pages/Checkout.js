import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Checkout = () => {
    return (
        <>
            <Meta title={"Checkout"} />
            <BreadCrumb title="Checkout" />

            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Digitex</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark' to="/cart">Carrito </Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Informacion
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active">Envios</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Medios de Pago
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Informacion de Contacto</h4>
                                <p className='user-details'>
                                    Ignacio Fernandez (ignaciofernandez@gmail.com)
                                </p>
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
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='me-2'/>Volver al Carrito</Link>
                                            <Link to='/cart' className='button'>Continuar al Envio</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Checkout