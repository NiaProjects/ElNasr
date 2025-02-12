import React from 'react'
import useApi from '@/Hooks/useApi'
import { baseURL } from '@/api/api'
import DoctorCard from './DoctorCard'
import Heading from '@/Components/Heading/Heading'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useExtractData from '@/Hooks/useExtractData'
import CardSkeleton from '@/Components/skeletons/CardSkeleton'
import { Fade } from 'react-awesome-reveal'
export default function Doctors() {
    const {specialistId} = useParams()
    const {t} = useTranslation("global")
   
    const {isLoading , isError , data} = useApi({url : `${baseURL}docs/specialist/${specialistId}` , queryKey : ["doctors" , specialistId]} )
    useExtractData(data?.data[0]?.specialist)
    
    if(isLoading) return <CardSkeleton/>
    if(isError) return <p>Error</p>
    if(data.data.length === 0) return <p >No data</p>

    // console.log(data.data[0].specialist.name);
    
  return <>
  

  <section className='bg-gradient-to-b min-h-screen from-[#EFF5FE] to-[#F1F7FF78]'>
    <Heading title={data.data[0].specialist} />
    <div className="container  py-12 ">

      <h3 className='text-2xl font-bold text-sec mb-8'>{  `${data.data.length} ${t("Doctors.title")} ${data.data[0].specialist} `    } </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 bg-gradient-to-b from-[#FFFFFF] via-[#D9EFFF] to-[#2AA7FF] rounded-2xl p-8">
  <Fade cascade damping={0.3} >
    {data.data.map((doctor) => (
      <DoctorCard key={doctor.id} data={doctor} />
    ))}
  </Fade>
</div>

    </div>

  </section>
  
  </>
}
