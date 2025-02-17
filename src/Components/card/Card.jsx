import useExtractData from '@/Hooks/useExtractData'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data , icon}) {
  const langData = useExtractData(data)
  
  return <>
  
<Link to={`/Specialization/${langData.id}`}> 
<div className='bg-white hover:scale-105 duration-300 hover:shadow-2xl transition-all p-8 text-main rounded-lg py-10   shadow-xl text-center '>
      <div className='text-6xl mb-4 w-fit mx-auto'> 
        
          {icon}
        </div>
    <h4 className='text-sec'>{langData.name}</h4>
  </div>
</Link>
  
  </>
}
