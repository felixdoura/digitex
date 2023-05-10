import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
// import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <Meta title={"Registrarse"} />
            <BreadCrumb title="Registrarse" />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Crear Una Cuenta</h3>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <div>
                                        <input
                                            type='text'
                                            name='first-name'
                                            placeholder='Nombre'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='text'
                                            name='last-name'
                                            placeholder='Apellido'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Contraseña'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type='password'
                                            name='confpassword'
                                            placeholder='Repetir Contraseña'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Registrarse</button>
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

export default Signup