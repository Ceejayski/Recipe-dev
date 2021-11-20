import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Pagination, Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './style.scss';
import pizza from '../../assets/img/pizza.jpg';
import burger from '../../assets/img/burger.jpg';
import dessert from '../../assets/img/dessert.jpg';
import slide from '../../assets/img/slide1.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  return (
    <Swiper
      pagination
      navigation
      autoplay={{
        delay: 10000,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide} alt="slide1" />
        <div className="position-absolute slide-text">
          <h1>
            RecipeDev
          </h1>
          <p>by a Dev turned Cook</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={burger} alt="slide2" />
        <div className="position-absolute slide-text">
          <h1>
            Fast Food Recipes
          </h1>
          <p className="text-white">like you have never had before</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={dessert} alt="slide3" />
        <div className="position-absolute slide-text">
          <h1>
            Dessert Recipes
          </h1>
          <p className="text-white">Sweettooth?... We have got you </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pizza} alt="slide4" />
        <div className="position-absolute slide-text">
          <h1>
            Pizza Recipes
          </h1>
          <p className="text-white">We Leave in a world were pizza gets home before the police do</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
