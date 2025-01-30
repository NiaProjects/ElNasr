/* eslint-disable react/prop-types */
import React from 'react'
import doctorImg from '../../assets/images/toppng 1.png'
import { imageBase } from '@/api/api'
import useExtractData from '@/Hooks/useExtractData'
export default function Doctor({data}) {

   useExtractData(data)
  return <>
  

  <div className='p-8'>

<div className='p-12 pb-0 overflow-hidden group rounded-t-full rounded-b-lg border-white border-8 bg-gradient-to-tl from-[#2AA7FF] to-[#E1F3FF]'>
<img src={ imageBase + data.img} className='h-80  group-hover:scale-110 duration-300 mx-auto' alt={data.name} />
</div>
<div className='text-center font-semibold my-4 uppercase'>
    <h2 className='text-2xl my-4 text-sec'>{data.name}</h2>
    <p className='text-main'>{data.specialist}</p>
</div>
  </div>
  
  
  </>
}
