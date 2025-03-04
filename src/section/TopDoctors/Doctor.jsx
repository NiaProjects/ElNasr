/* eslint-disable react/prop-types */
import React from 'react'
import doctorImg from '../../assets/images/toppng 1.png'
import { imageBase } from '@/api/api'
import useExtractData from '@/Hooks/useExtractData'
import { Link } from 'react-router-dom'
export default function Doctor({data}) {

   const langData = useExtractData(data)

   
  return <>
  

<Link className='mb-10' to={`/doctor/${langData.id}`}>

<div className='p-8 '>

<div className='p-12 pb-0 overflow-hidden group rounded-t-full rounded-b-lg border-white border-8 bg-gradient-to-tl from-[#2AA7FF] to-[#E1F3FF]'>
<img src={ imageBase + langData.img} className='h-80  group-hover:scale-110 duration-300 mx-auto' alt={langData.name} />
</div>
<div className='text-center font-semibold my-4 uppercase'>
    <h2 className='text-2xl my-4 text-sec'>{langData.name}</h2>
    <p className='text-main'>{langData.specialist.name}</p>
</div>
  </div>
  

</Link>
  
  </>
}
