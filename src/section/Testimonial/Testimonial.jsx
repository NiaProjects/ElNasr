import React from 'react'
import Slider from 'react-slick'
import Feedback from './Feedback';

export default function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "20px", 
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    centerPadding: "40px", 
                },
            },
        ],
    };
    
  return <>
  
  <section>


    <div className="container py-12">
        <h2 className='text-4xl font-bold my-4 text-sec text-center'> Patients Testimonial</h2>
        <p className='text-gray-400 text-center'>Let’s see what our happy patients says</p>




        <div className="slider-container custom-dots">
      <Slider {...settings}>
        <div className=' p-4'>
          <Feedback/>
        </div>
        <div className=' p-4'>
          <Feedback/>
        </div>
        <div className=' p-4'>
          <Feedback/>
        </div>
        <div className=' p-4'>
          <Feedback/>
        </div>



      </Slider>
    </div>

    </div>
  </section>
  
  
  </>
}
