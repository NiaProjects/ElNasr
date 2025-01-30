import useExtractData from '@/Hooks/useExtractData'
import React from 'react'

export default function Card({data , icon}) {
  useExtractData(data)
  
  return <>
  
  <div className='bg-white p-8 text-main rounded-lg py-10   shadow-2xl text-center '>
      <div className='text-6xl mb-4 w-fit mx-auto'> 
        
          {icon}
        </div>
    <h4 className='text-sec'>{data.name}</h4>
  </div>
  
  </>
}
