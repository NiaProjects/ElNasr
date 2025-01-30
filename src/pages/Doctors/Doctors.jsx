import React from 'react'
import useApi from '@/Hooks/useApi'
import { urlDoctors } from '@/api/api'
import DoctorCard from './DoctorCard'
export default function Doctors() {

    const {isLoading , isError , data} = useApi({url : urlDoctors , queryKey : "doctors"} )
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error</p>

  return <>
  

  <section>
    <div className="container py-12">

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>


                {data.data.map((data ) =>  <DoctorCard key={data.id} data={data} />)}


        </div>
    </div>

  </section>
  
  </>
}
