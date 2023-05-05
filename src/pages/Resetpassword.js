import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
// import { Link } from 'react-router-dom';

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Recuperar Contraseña"} />
            <BreadCrumb title="Recuperar Contraseña" />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reestablecer Contraseña</h3>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <div className='mt-1'>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Elija Una Nueva Contraseña'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type='password'
                                            name='confpassword'
                                            placeholder='Repita La Nueva Contraseña'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Resetpassword