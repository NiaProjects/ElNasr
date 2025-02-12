import React from 'react'
import Slider from 'react-slick';

import "./offer.css"
import useApi from '@/Hooks/useApi';
import CardSkeleton from '@/Components/skeletons/CardSkeleton';
import { baseURL, imageBase } from '@/api/api';
import { Link } from 'react-router-dom';
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

      const {data , isLoading , isError } = useApi({url : `/offers` , queryKey : "offers"} )
      if(isLoading) return <CardSkeleton/>
      if(isError) return <p>Error</p>
      console.log(data);
      
      return (
<section className='py-14 bg-[#E8F1FF78]'>


<div className="slider-container custom-dots-offers border-0 ">
          <Slider {...settings}>

            {data?.data?.map((offer , index) => <div className=' p-
            2 px-20' key={index}><Link to={`/doctor/${offer.id}`}>  <img className='w-full' src={ imageBase + offer.img} alt=""  /></Link></div>)}
          </Slider>
        </div>
</section>
      );
    }

