import React from 'react'
import Doctor from './Doctor'
import Slider from 'react-slick';
import useApi from '@/Hooks/useApi';
import { urlDoctors } from '@/api/api';

export default function TopDoctors() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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

    const {isLoading , isError , data} = useApi({url : urlDoctors , queryKey : "doctors"} )
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error</p>
  return (
    <section className='py-14 bg-sec' >
        <h3 className='text-5xl font-bold text-center text-sec my-4'>Top Doctors</h3>
          <div className="slider-container custom-dots">
      <Slider {...settings}>

        {data.data.map((data) => <Doctor key={data.id} data={data} />)} 

      </Slider>
    </div>
    </section>
  )
}
