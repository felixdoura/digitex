import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'
// import { icons } from 'react-icons/lib';

const Footer = () => {
  return (

    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='/images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Todas Las Novedades</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Ingrese su E-Mail"
                  aria-label="Ingrese su E-Mail"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Suscribase
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contacto</h4>
              <div>
                <address className='text-white fs-6'>
                  Calle Falsa 123, <br />
                  Springfield, EEUU <br />
                  CP: 1901
                </address>
                <a href='tel: 0800-912-2018' className='mt-3 d-block mb-1 text-white'>
                  0800-912-2018
                </a>
                <a href='mailto: felixdoura@gmail.com' className='mt-2 d-block mb-0 text-white'>
                  felixdoura@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href="https://www.linkedin.com/in/felixdoura/">
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsYoutube className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsInstagram className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Informacion</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacidad</Link>
                <Link className="text-white py-2 mb-1">Devoluciones</Link>
                <Link className="text-white py-2 mb-1">Envios</Link>
                <Link className="text-white py-2 mb-1">Terminos y Condiciones</Link>
                <Link className="text-white py-2 mb-1">Foro de Preguntas</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Cuenta</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Sobre Nosotros</Link>
                <Link className="text-white py-2 mb-1">Busqueda</Link>
                <Link className="text-white py-2 mb-1">Preguntas Frecuentes</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Celulares</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Auriculares</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Traido a Ustedes por Felix Doura </p>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer