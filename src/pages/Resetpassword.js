import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
// import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Recuperar Contraseña"} />
            <BreadCrumb title="Recuperar Contraseña" />

            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reestablecer Contraseña</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type='password'
                                    name='password'
                                    placeholder='Elija Una Nueva Contraseña'
                                />
                                <CustomInput
                                    type='password'
                                    name='confpassword'
                                    placeholder='Repita La Nueva Contraseña'
                                />
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Enviar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default Resetpassword