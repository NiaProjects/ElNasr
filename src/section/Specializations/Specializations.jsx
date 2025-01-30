import {  urlSpecialists } from '@/api/api'
import Card from '@/Components/card/Card'
import useApi from '@/Hooks/useApi'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillMedicineBox } from 'react-icons/ai'
import { FaHeartbeat, FaLaptopMedical, FaRegHospital, FaStethoscope } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { GiMedicinePills, GiMedicines } from 'react-icons/gi'
import { MdMedicalInformation, MdOutlineMedicationLiquid } from 'react-icons/md'
import { RiHospitalFill } from 'react-icons/ri'
import { TbHeartRateMonitor, TbStethoscope } from 'react-icons/tb'

export default function Specializations() {


  const { isError , isLoading , data} = useApi( {url : urlSpecialists , queryKey : "specialists"} )
  
  const {t} = useTranslation("global")
  
  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>
  const icons = [<FaHeartbeat/> , <FaRegHospital/> , <FaStethoscope/> , <RiHospitalFill />,<FaUserDoctor />
    , <TbHeartRateMonitor/> , <GiMedicines /> , <AiFillMedicineBox /> , <GiMedicinePills />  , <TbStethoscope /> , <MdOutlineMedicationLiquid />,
    <FaLaptopMedical /> , <MdMedicalInformation />
  ]

  const copyOfData = JSON.parse ( JSON.stringify(   data.data  )  )
  const topSpecialization = copyOfData.splice(0 , 8)
  
  
  return <>
  
  
<section className='pb-14 pt-32 md:pt-0'>


<div className='container'>

<h2 className='text-5xl font-bold text-center text-sec my-4'>{t("Specialization.title")}</h2>

<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>

    {topSpecialization.map((data , index) =>  <Card key={data.id} data={data} icon={icons[index]} />)}
</div>
<button className='bg-main text-white px-8 py-2 rounded-lg  mx-auto block mt-20 text-2xl'>{t("Specialization.button")}</button>
</div>
</section>
  </>
}
