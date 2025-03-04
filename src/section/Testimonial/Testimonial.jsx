import React from 'react'
import Slider from 'react-slick'
import Feedback from './Feedback';
import { useTranslation } from 'react-i18next';
import useApi from '@/Hooks/useApi';
import CardSkeleton from '@/Components/skeletons/CardSkeleton';

export default function Testimonial() {
const {t} = useTranslation("global")
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
    

    const {data , isLoading , isError } = useApi({url : `/feedback` , queryKey : "feedback"} )

if(isLoading) return <CardSkeleton/>


  return <>
  
  <section>


    <div className="container py-12">
        <h2 className='text-4xl font-bold my-4 text-sec text-center'> {t("Testimonial.heading")}</h2>
        <p className='text-gray-400 text-center'>{t("Testimonial.title")}</p>




        <div className="slider-container custom-dots">
      <Slider  className='' {...settings}>

        {data.data.map((data)=>     <div key={data.id} className=' p-4'>
          <Feedback data={data}/>
        </div> )}
    
  



      </Slider>
    </div>

    </div>
  </section>
  
  
  </>
}
