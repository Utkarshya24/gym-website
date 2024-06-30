import img1 from '../assets/main-image1-JGVa53bJ.png';
import img2 from '../assets/Home1-Zzlw3oLi.jpg';
import img3 from '../assets/main-image3-dqYwcZsu.png';
import icon1 from '../assets/OIP.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import {  Autoplay, Scrollbar } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
        scrollbar={{
          hide: true,
        }}>
          <SwiperSlide><div className="container-fluid Hero">
          <div className="container gx-0">
            <div className="row gx-0">
              <div className=" col-md-6">
                <div className="Hero_col1">
                  <h1>Get <span>Healthy</span> Body With The <span>Perfect</span> Exercise</h1>
                  <p>Get the best workout plan for your body type and fitness goals. We will help
                  you to achieve your fitness goals.</p>
                  <div className='hero_btns'>
                    <button className="btn1 btn0">Get Started</button>
                    <button className="play_btn"><img src={icon1} alt=''  /> watch videos</button>
                  </div>
                </div>
              </div>
              <div className=" col-md-6">
                <div className="Hero_col2">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div></SwiperSlide>
          <SwiperSlide><div className="container-fluid Hero">
          <div className="container gx-0">
            <div className="row gx-0">
              <div className=" col-md-6">
                <div className="Hero_col1">
                  <h1>Get <span>Healthy</span> Body With The <span>Perfect</span> Exercise</h1>
                  <p>Get the best workout plan for your body type and fitness goals. We will help
                  you to achieve your fitness goals.</p>
                  <div className='hero_btns'>
                    <button className="btn1 btn0">Get Started</button>
                    <button className="play_btn"><img src={icon1} alt=''  /> watch videos</button>
                  </div>
                </div>
              </div>
              <div className=" col-md-6">
                <div className="Hero_col2">
                  <img src={img2} alt="" className="img-fluid-img2" />
                </div>
              </div>
            </div>
          </div>
        </div></SwiperSlide>
          <SwiperSlide><div className="container-fluid Hero">
          <div className="container gx-0">
            <div className="row gx-0">
              <div className=" col-md-6">
                <div className="Hero_col1">
                  <h1>Get <span>Healthy</span> Body With The <span>Perfect</span> Exercise</h1>
                  <p>Get the best workout plan for your body type and fitness goals. We will help
                  you to achieve your fitness goals.</p>
                  <div className='hero_btns'>
                    <button className="btn1 btn0">Get Started</button>
                    <button className="play_btn"><img src={icon1} alt=''  /> watch videos</button>
                  </div>
                </div>
              </div>
              <div className=" col-md-6">
                <div className="Hero_col2">
                  <img src={img3} alt="" className="img-fluid-img3" />
                </div>
              </div>
            </div>
          </div>
        </div></SwiperSlide>
      </Swiper>
    </>      
  )
}

export default Hero;