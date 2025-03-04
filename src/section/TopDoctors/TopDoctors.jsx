import React from 'react'
import Doctor from './Doctor'
import Slider from 'react-slick';
import useApi from '@/Hooks/useApi';
import { urlDoctors, urlTopDoctors } from '@/api/api';
import { useTranslation } from 'react-i18next';
import CardSkeleton from '@/Components/skeletons/CardSkeleton';
import allDocs from "../../assets/images/docs.pdf";
export default function TopDoctors() {
  const {t} = useTranslation("global")
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
                breakpoint: 1448, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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

    const {isLoading , isError , data} = useApi({url : urlTopDoctors , queryKey : "topDoctors"} )
    if(isLoading) return <CardSkeleton/>
    if(isError) return <p>Error</p>
  return (
    <section className='py-14 bg-sec' >
      <a className='bg-slate-500 text-white p-4 rounded-lg' download={true} href={allDocs}> Alnasr Doctors PDF </a>
        <h3 className='text-5xl font-bold text-center text-sec my-4'>{t("TopDoctors.title")}</h3>
          <div className="slider-container custom-dots">
      <Slider {...settings}>

        {data.data.map((data) => <Doctor key={data.id} data={data} />)} 

      </Slider>
    </div>
    </section>
  )
}
