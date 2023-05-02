import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'
const OurStore = () => {
  const [grid,setGrid] = useState(4);

  return (
    <>
      <Meta title={"Tienda"} />
      <BreadCrumb title="Tienda" />
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Comprar por Categoria</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Relojes</li>
                    <li>TV</li>
                    <li>Camaras</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filtrar</h3>
                <div>
                  <h5 className='sub-title'>Productos Disponibles</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">
                        En Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=''
                      />
                      <label className='form-check-label' htmlFor="">
                        Sin Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Precio</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="De:"
                      />
                      <label htmlFor="floatingInput">De:</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="A:"
                      />
                      <label htmlFor="floatingInput1">A:</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colores</h5>
                  <div>
                    <div>
                      <ul className='colors ps-0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className='sub-title'>Tamaño</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id='color-1'
                      />
                      <label className='form-check-label' htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id='color-2'
                      />
                      <label className='form-check-label' htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Etiquetas</h3>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Auriculares</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>TV</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptops</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Celulares</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Parlante</span>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Productos Aleatorios</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>Reloj Sumergible 50 disponible en colores</h5>
                      <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700' />
                      <b>$ 299</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>Reloj Sumergible 50 disponible en colores</h5>
                      <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700' />
                      <b>$ 299</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: "135px" }}>Ordenar Por:</p>
                    <select name="" className='form-control form-select' id="">
                      <option value="manual">Especiales</option>
                      <option value="best-selling" selected="selected">Mas Vendidos</option>
                      <option value="title-ascending">Alfabeticamente, A-Z</option>
                      <option value="title-descending">Alfabeticamente, Z-A</option>
                      <option value="price-ascending">Precio, mas barato a mas caro</option>
                      <option value="price-descending">Precio, mas caro a mas barato</option>
                      <option value="created-ascending">Fecha, mas viejo a mas nuevo</option>
                      <option value="price-descending">Fecha, mas nuevo a mas viejo</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Productos</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={() => {
                        setGrid(3);
                      }} src='/images/gr4.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(4);
                      }} src='/images/gr3.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(6);
                      }} src='/images/gr2.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(12);
                      }} src='/images/gr.svg' className='d-block img-fluid' alt='grid' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore