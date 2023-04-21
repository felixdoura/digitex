import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img
                  src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCARGA PARA PROS</h4>
                  <h5>iPad S13+Pro</h5>
                  <p>Desde $999.00 o $41.62 al mes</p>
                  <Link className='button'>COMPRAR</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>OPORTUNIDADES</h4>
                    <h5>Laptop</h5>
                    <p>Desde $999.00 <br /> o $41.62 al mes</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NUEVAS OFERTAS</h4>
                    <h5>Nuevo iPad Air</h5>
                    <p>Desde $999.00 <br /> o $41.62 al mes</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NUEVAS OFERTAS</h4>
                    <h5>Nuevo iPad Air</h5>
                    <p>Desde $999.00 <br /> o $41.62 al mes</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NUEVAS OFERTAS</h4>
                    <h5>Nuevo iPad Air</h5>
                    <p>Desde $999.00 <br /> o $41.62 al mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl '>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service.png' alt='services' />
                  <div>
                    <h6>Envio Gratis</h6>
                    <p className='mb-0'>Para pedidos mayores a $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-02.png' alt='services' />
                  <div>
                    <h6>Sorpresas Diarias</h6>
                    <p className='mb-0'>Descuentos de hasta el 50%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-03.png' alt='services' />
                  <div>
                    <h6>Asistencia Tecnica</h6>
                    <p className='mb-0'>Consulte a uno de nuestros expertos</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-04.png' alt='services' />
                  <div>
                    <h6>Los Mejores Precios</h6>
                    <p className='mb-0'>Compruebe nuestros precios</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-05.png' alt='services' />
                  <div>
                    <h6>Todos los Medios de Pago</h6>
                    <p className='mb-0'>100% de seguridad en sus pagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>GAMING</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>TV SMART</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/tv.jpg' alt='smart tv' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>CAMARAS</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>AURICULARES</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/headphone.jpg' alt='watch' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>GAMING</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>TV SMART</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/tv.jpg' alt='smart tv' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>CAMARAS</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>AURICULARES</h6>
                    <p>10 productos</p>
                  </div>
                  <img src='/images/headphone.jpg' alt='watch' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>COLECCIONES</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-01.webp' alt='famous' className='img-fluid' />
                <div className='famous-content position-absolute'>
                  <h5>Pantalla Grande</h5>
                  <h6>Smart Watch Serie 7</h6>
                  <p>Desde $399 o $16.62 al mes durante 24 meses</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-02.webp' alt='famous' className='img-fluid' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Laptops</h5>
                  <h6 className='text-dark'>MacBook Pro Air</h6>
                  <p className='text-dark'>Desde $999 o $56.62 al mes durante 24 meses</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-03.webp' alt='famous' className='img-fluid' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>iPhone 13pro</h6>
                  <p className='text-dark'>Ahora en Verde. Desde $799 o $41.62 al mes durante 24 meses</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
                <div className='famous-card position-relative'>
                  <img src='/images/famous-04.webp' alt='famous' className='img-fluid' />
                  <div className='famous-content position-absolute'>
                    <h5 className='text-dark'>Audio</h5>
                    <h6 className='text-dark'>Parlantes bluetooth</h6>
                    <p className='text-dark'>Elegi el color. Desde $199 o $9.62 al mes durante 24 meses</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>PRODUCTOS ESPECIALES</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>ULTIMAS ENTRADAS</h3>
            </div>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </section>





    </>
  );
};

export default Home