import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <Meta title={"Contactenos"} />
      <BreadCrumb title="Contactenos" />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe 
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.4534024668!2d-58.515698767740496!3d-34.615654769927005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1682995464210!5m2!1ses-419!2sar" 
                width="600"
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contactenos</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Nombre' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Telefono' />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comentarios'></textarea>
                    </div>
                    <div className=''>
                      <button className='button border-0'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Encuentrenos</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Av. Pres. Figueroa Alcorta 7597, C1428 CABA</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel: 0800-999-2505'>0800-999-2505</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto: felixdoura@gmail.com'>felixdoura@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle className='fs-5' />
                        <p className='mb-0'>Lunes a Viernes de 9 a 18</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Contact