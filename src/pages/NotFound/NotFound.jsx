import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/images/not found.png"
import { FaArrowLeft } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
export default function NotFound() {
    const {t} = useTranslation("global")
  return <> 
  
  
  <section className=' py-16 px-10'>
<div className="container  ">
<div className='relative w-9/12 mx-auto'>

<div className='start-0 static text-center xl:text-start  xl:absolute '>
            <p className='text-main font-bold text-3xl'>{t("notFound.error")}</p>
            <h1 className='font-bold text-sec text-7xl'>{t("notFound.title")}</h1>
                <p className='my-8 lg:max-w-72 text-xl'>
                {t("notFound.description")}
                </p>
                <Link  className='text-white bg-main px-4 flex items-center w-fit py-2 gap-2 rounded-lg mx-auto my-4 lg:m-0' to="/">  <FaArrowLeft  /> {t("notFound.button")}              </Link>
        </div>
        <img src={img} className=' ms-auto' alt="not found" />


</div>
</div>

  </section>
  
  
  </>
}
