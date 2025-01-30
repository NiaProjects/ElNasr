import React from 'react'

import Slider from 'react-slick';
import Slide from '../Slide/Slide';
import HowWeAre from './HowWeAre';
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
<div className="slider-container  custom-dots h-[80vh]  ">
            <div className='bg-sec '>
            <Slider {...settings}>
                        <Slide/>
                        <Slide/>
                        <Slide/>
                    </Slider>
            </div>
<HowWeAre/>
        </div>
</div>
</div>



</header>
      );
    }
    