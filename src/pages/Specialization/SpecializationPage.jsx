import {  urlSpecialists } from '@/api/api'
import Card from '@/Components/card/Card'
import CardSkeleton from '@/Components/skeletons/CardSkeleton'
import useApi from '@/Hooks/useApi'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillMedicineBox } from 'react-icons/ai'
import { FaHeartbeat, FaHospitalAlt, FaHospitalUser, FaLaptopMedical, FaRegHospital, FaStethoscope } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { GiHospitalCross, GiMedicinePills, GiMedicines } from 'react-icons/gi'
import { MdMedicalInformation, MdOutlineMedicationLiquid } from 'react-icons/md'
import { RiHospitalFill } from 'react-icons/ri'
import { TbHeartRateMonitor, TbHospital, TbStethoscope } from 'react-icons/tb'
export default function SpecializationPage() {

    const { isError , isLoading , data} = useApi( {url : urlSpecialists , queryKey : "specialists"} )
  
    const {t} = useTranslation("global")
    
    if(isLoading) return <CardSkeleton/>
    if(isError) return <p>Error</p>
    const icons = [<FaHeartbeat/> , <FaRegHospital/> , <FaStethoscope/> , <RiHospitalFill />,<FaUserDoctor />
      , <TbHeartRateMonitor/> , <GiMedicines /> , <AiFillMedicineBox /> , <GiMedicinePills />  , <TbStethoscope /> , <MdOutlineMedicationLiquid />,
      <FaLaptopMedical /> , <MdMedicalInformation /> , <GiHospitalCross /> , <RiHospitalFill /> , <TbHospital /> , <FaHospitalAlt /> , <FaHospitalUser />

    ]
  
 
    
    
    return <>
    
    
  <section className='pb-14 pt-32 md:pt-0'>
  
  
  <div className='container bg-gradient-to-b from-[#FFFFFFE5] to-[#EDF7FFE5] p-8 rounded-3xl'>
  
  <h2 className='text-5xl font-bold text-center text-sec my-4'>{t("Specialization.title")}</h2>
  
  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
  
      {data.data.map((data , index) =>  <Card key={data.id} data={data} icon={icons[index]} />)}
  </div>
  <button className='bg-main text-white px-8 py-2 rounded-lg  mx-auto block mt-20 text-2xl'>{t("Specialization.button")}</button>
  </div>
  </section>
  </>
}
