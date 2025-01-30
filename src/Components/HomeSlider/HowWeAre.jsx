import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HowWeAre() {
  const {t} = useTranslation("global")
  return <>
  
  
  <div className='bg-white font-semibold p-8 rounded-lg relative shadow-xl text-center text-sec  mx-auto'>

    <h2 className='text-4xl mb-6 font-bold'>      {t("whoWeAre.title")}    </h2>
    <p className='text-xl leading-10'>

      {t("whoWeAre.description")}
    </p>

  </div>

  </>
}
