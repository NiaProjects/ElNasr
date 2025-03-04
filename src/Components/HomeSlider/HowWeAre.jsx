import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HowWeAre() {
  const {t} = useTranslation("global")
  return <>
  
  
  <div id='about' className='bg-gradient-to-l py-12  from-[#74C6FFC4] to-[#1690E6C4] font-semibold p-8 rounded-2xl relative shadow-xl text-center text-white  mx-auto'>

    <h2 className='text-4xl mb-6 font-bold'>      {t("whoWeAre.title")}    </h2>
    <p className='text-xl leading-10'>

      {t("whoWeAre.description")}
    </p>

  </div>

  </>
}
