import React from 'react'
import { FaStar, FaUser } from 'react-icons/fa'

export default function Feedback() {
  return <>
  
  <div className='bg-white mb-10 shadow-xl flex items-center p-8 gap-8  '>


  <FaUser className='text-8xl text-sec' />
  <div>
    <h4 className='text-sec text-xl font-semibold'>name</h4>
    <div className='flex my-2 gap-2'>
        <FaStar className='text-yellow-400' />   
        <FaStar className='text-yellow-400' />   
        <FaStar className='text-yellow-400' />   
        <FaStar className='text-yellow-400' />   
        <FaStar className='text-yellow-400' />   
        
         </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, tempora?</p>
  </div>

  </div>
  </>
}
