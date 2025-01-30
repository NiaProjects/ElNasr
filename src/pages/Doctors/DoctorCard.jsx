import React from 'react'

export default function DoctorCard({data}) {
  return <>
  
  <div className='p-4 px-6 bg-gradient-to-b border-4  from-[#FFFFFFB5] to-[#D0E4FF] rounded-3xl'>
                <div className='border rounded-full overflow-hidden w-48 h-48 mx-auto border-main'>
                <img src={data.img} className='rounded-full w-full   ' alt="docname" />
                </div>
                    <h3 className='text-4xl mt-4 text-center mb-8  text-sec'>{data.name_en}</h3>
                    <p className='text-2xl my-4'>{data.desc_en}</p>
                    <a className='text-lg' href="tel:+201012345678">phone : {data.phone}</a>
            </div>
  
  </>
}
