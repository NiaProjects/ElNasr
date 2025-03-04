import React, { useContext } from 'react'
import doctorImg from '../../assets/images/web.png'
import { useTranslation } from 'react-i18next'
import { TranslateContext } from '@/context/TranslateContext'
export default function Slide() {
  const {t} = useTranslation("global")
  const {lang} = useContext(TranslateContext)
  
  return <> 
  
  <div>

        <div className={`flex ${lang == "ar" ? "flex-row-reverse" : ""} `}>

                <div className={` ${lang == "ar" ? "md:text-right" : "md:text-left"}  w-full md:w-1/2 text-center px-0 py-10  title flex  items-center justify-end  `}>
                            <div className='w-full'>
                            <p className='text-sec text-2xl uppercase'>{t("slider1.title")}</p>
                                        <h1 className='text-6xl font-bold mt-2 uppercase'>{t("slider1.description")}</h1>
                                        <p className=' my-2 text-6xl font-bold uppercase   text-main'>{t("slider1.location")}</p>
                                        <button className='bg-main rounded-lg mt-4 text-white px-8 text-xl py-2'>{t("slider1.button")}</button>
                            </div>
                </div>


                <div className=' hidden md:block  image'>
                
                
                <img className='w-full ' src={doctorImg} alt="" />
                </div>
        </div>


  </div>
  
  
  </>
}
