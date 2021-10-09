import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
function Slider(){
    const images = require.context('../../../public/image/slider', true);
    
    return(
        <Swiper className="sb-slick-slider">
          <SwiperSlide>
          <div className="single-slide__img">
                <img className='single-slide__img-item' src={images('./1.jpg').default} alt="Картинка" />
              </div>
            {" "}
            <div className="single-slide bg-image  bg-overlay--dark">
              <div className="container">
                <div className="home-content text-center">
                  <div className="row justify-content-end">
                    <div className="col-lg-6">
                      <h1>Красивый дизайн</h1>
                      <h2>
                        Откройте книгу
                        <br />
                          и прочитайте
                      </h2>
                      <a href="shop-grid.html" className="btn btn--yellow">
                      Приобрести
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="single-slide__img">
                <img className='single-slide__img-item' src="./image/slider/2.jpg" alt="Картинка" />
              </div>
            <div className="single-slide bg-image  bg-overlay--dark">

              <div className="container">
                <div className="home-content pl--30">
                  <div className="row">
                    <div className="col-lg-6">
                      <h1>Это хорошая идея!</h1>
                      <h2>
                        Открыть книгу 
                        <br />
                        и прочитать
                      </h2>
                      <a href="shop-grid.html" className="btn btn--yellow">
                        Приобрести
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    )
}

export default Slider