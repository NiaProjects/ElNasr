import React from 'react'
import Slider from 'react-slick';
import img1 from "../../assets/images/Group 11.png"
import img2 from "../../assets/images/image 1.png"
import "./offer.css"
export default function OffersSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows: false,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots : true,
        responsive: [
          {
              breakpoint: 992, 
              settings: {
                  slidesToShow: 1,
                  centerPadding: "20px", 
                  slidesToScroll: 1,
              },
          },
      ],
      };

      const offers = [ img1 , img2 , img1 , img2 , img1 , img2]
      return (
<section className='py-14 bg-[#E8F1FF78]'>


<div className="slider-container custom-dots-offers border-0 ">
          <Slider {...settings}>

            {offers.map((offer , index) => <div className=' p-2 px-20' key={index}><img className='w-full' src={offer} alt=""  /></div>)}
          </Slider>
        </div>
</section>
      );
    }

