import React from 'react'

import Slider from 'react-slick';
import Slide from '../Slide/Slide';
import HowWeAre from './HowWeAre';
import Slide2 from '../Slide/Slide2';
import img from "../../assets/images/slide3.jpg"
import Slide3 from '../Slide/Slide3';
export default function HomeSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
      return (
<header className='min-h-screen'>

<div className='bg-sec'>
<div className="container">
<div className="slider-container  custom-dots min-h-[80vh] md:h-[80vh]  ">
            <div className='bg-sec '>
            <Slider {...settings}>
                        <Slide/>
                        <Slide2/>
                        <Slide3/>
                    </Slider>
            </div>
<HowWeAre/>
        </div>
</div>
</div>



</header>
      );
    }
    