import { imageBase } from '@/api/api'
import useExtractData from '@/Hooks/useExtractData'
import React, { useContext } from 'react'
import prime_badge from "../../assets/images/prime_badge.svg"
import { FaArrowUp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { TranslateContext } from '@/context/TranslateContext'
import { Link } from 'react-router-dom'

export default function DoctorCard({data}) {
  useExtractData(data)
  const {t} = useTranslation("global")
  const {lang} = useContext(TranslateContext)    

  return <>
  
<Link to="/doctor/1">
<div className='p-4 px-6 bg-gradient-to-b cursor-pointer border-4 group hover:scale-105 duration-300 transition-all hover:shadow-xl relative from-[#FFFFFFB5] to-[#D0E4FF] rounded-3xl'>
                <div className='border rounded-full  w-48 h-48 mx-auto border-main relative'>
                  <div className='overflow-hidden w-full h-full rounded-full'>
                  <img src={imageBase + data.img} className='rounded-full w-full   ' alt={data.name} />

                  </div>
                  <img src={prime_badge} alt="prime badge " className='absolute top-32 right-0 w-8' />
                </div>
                    <h3 className='text-4xl mt-4 text-center mb-8  text-sec'>{data.name}</h3>
                    <p className='text-2xl my-4'>{data.desc}</p>
                    <a className='text-lg' href="tel:+201012345678">{t("Doctors.phone")} : {data.phone}</a>

                    <div className={`  ${lang == "ar" ? "-left-4" : "-right-4"} absolute -bottom-4   p-2 border-white border-8 bg-[#1B3C74] rounded-full `}>
                    <FaArrowUp className={`  ${lang == "ar" ? "-rotate-45 group-hover:rotate-45" : "rotate-45 group-hover:-rotate-45 "}  text-4xl  duration-300 text-white`} />

                    </div>
            </div>
</Link>
  
  </>
}
