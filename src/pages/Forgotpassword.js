import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Olvide La Contraseña"} />
            <BreadCrumb title="Olvide La Contraseña" />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Recuperar La Contraseña</h3>
                                <p className='text-center mt-2 mb-3'>
                                    Ingrese su email y le enviaremos un link para recuperar su contraseña
                                </p>
                                <form action='' className='d-flex flex-column gap-30'>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>

                                    <div>
                                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Enviar</button>
                                            <Link to='/login'>Cancelar</Link>
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

export default Forgotpassword