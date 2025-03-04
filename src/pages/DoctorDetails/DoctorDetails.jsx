import React, { useEffect } from 'react'
import img from "../../assets/images/dr 3.png"
import { FaFacebook, FaFilePdf, FaInstagram, FaStar, FaTiktok, FaYoutube } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
import { FaUserDoctor, FaX } from 'react-icons/fa6'
import { Navigate, useParams } from 'react-router-dom'
import useApi from '@/Hooks/useApi'
import { baseURL, imageBase } from '@/api/api'
import CardSkeleton from '@/Components/skeletons/CardSkeleton'
import useExtractData from '@/Hooks/useExtractData'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import placeHolderDoctor from "../../assets/images/placeholder-doctor.png"
export default function DoctorDetails() {

    const {t} = useTranslation("global")

    const {doctorId} = useParams()
    const {data , isLoading , isError} = useApi({url : `${baseURL}docs/${doctorId}` , queryKey : ["doctor" , doctorId]} )
    




    const translateData = useExtractData(data?.data)
    if(isLoading) return <CardSkeleton/>
    if(isError) return <Navigate to={"/404"}/>
console.log(translateData);

  return <> 
  
  <section className='bg-[#F2F9FF] pb-2'>

    <div className='bg-main p-12'></div>
    <div className="container">
        <div className="flex items-start relative -top-10 gap-10 flex-col md:flex-row">
                <div className='w-full md:w-1/3 '>

                <div className=' md:h-[450px] bg-white pt-10  border-main border-4 overflow-hidden rounded-[100px]'>
                    {translateData.img ?             <img src={imageBase + translateData.img} alt={translateData.name} className=' w-full relative -top-6' /> : <img src={placeHolderDoctor} alt="placeholder" className='w-full mix-blend-darken' />}
        </div>
                    <div className='flex gap-12 justify-center items-center mt-8'>
                        <div className='text-white bg-main px-4 py-2 rounded-md flex items-center gap-2'>
                        <AiFillLike /> 99%
                        </div>
                        <div className='flex gap-2'>
                        <FaStar className='text-main text-xl' />
                        <FaStar className='text-main text-xl' />
                        <FaStar className='text-main text-xl' />
                        <FaStar className='text-main text-xl' />
                        <FaStar className='text-main text-xl' />
                        </div>
      
                    </div>
                    <div className='social w-fit mx-auto mt-6'>
                            <ul className='flex gap-6'>
                                <li>
                                    <a className=' text-3xl text-main bg-white' href={translateData.face} target="_blank">
                                    
                                    <FaFacebook/>
                                    </a>
                                </li>
                                <li>
                                    <a className=' text-3xl text-rose-400 bg-white' href={translateData.insta} target="_blank">
                                    
                                    <FaInstagram/>
                                    </a>
                                </li>
                                <li>
                                    <a className=' text-3xl text-red-600 bg-white' href={translateData.youtube} target="_blank">
                                    
                                    <FaYoutube/>
                                    </a>
                                </li>
                                <li>
                                    <a className=' text-3xl text-black bg-white' href={translateData.tiktook} target="_blank">
                                    
                                    <FaTiktok/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            <div className=' w-full md:w-2/3'>
                <div className='bg-white mb-10 shadow-xl p-12 rounded-2xl'>
                    <h1 className='text-sec text-4xl   mb-4 text-center font-bold'>{translateData.name}</h1>
                    <p className='text-2xl text-center text-gray-600 font-bold'>{translateData.title}</p>
                </div>
                <div className='bg-white relative overflow-hidden shadow-xl p-12 rounded-2xl'>
                    <h2 className='text-3xl text-sec font-bold mb-4'>{t("doctorDetails.About")}</h2>
                    <p className='text-xl text-gray-600'>
                    {translateData.desc}
                     
                           </p>

                           <div className='absolute -bottom-24 end-4 rounded-full text-lg px-6 py-6 w-44 h-40 border-gray-400  font-bold flex items-start justify-center border-2'><a href={ imageBase + translateData.cv} download={true}  className='flex items-center gap-2'  >  {t("doctorDetails.DoctorCV")} <FaFilePdf className='text- text-main' />                           </a></div>
                </div>
            </div>
        </div> 
        <div className='bg-white my-6 p-2 flex justify-around text-main text-xl font-semibold shadow-lg rounded-lg md:w-2/3 mx-auto '>
            <div className='text-sec'>
            {t("doctorDetails.ClinicAppointments")}
            </div>
            <div >
            {translateData.day}
            </div>
       {translateData.time_from && translateData.time_to ?      <div className='text-main'>
        {t("doctorDetails.From")} <span className='text-sec'>{translateData.time_from.slice(0,2)}</span>  {t("doctorDetails.To")} <span className='text-sec'>{translateData.time_to.slice(0,2)}</span> 
            </div> : ""}
        </div>





            <div className="grid md:grid-cols-2 gap-10">


                {!!translateData.certificate.length && 
                <div className='bg-white rounded-xl shadow-xl p-4'>
                    <h4 className='text-2xl font-bold'>{t("doctorDetails.Certificates")}</h4>
                        <div className='p-4'>
                        {translateData.certificate?.map((item , index) =>  <div key={index} className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        {item.name}
                        </p>
                        <p className='text-gray-400'>{item.data}</p>
                    </div>
 )}
              
        

                        </div>

                </div>}



                {!!translateData.exp.length && 
                <div className='bg-white rounded-xl shadow-xl p-4'>
                    <h4 className='text-2xl font-bold'>{t("doctorDetails.Experience")}</h4>
                        <div className='p-4'>
                        {translateData.exp?.map((item , index) =>  <div key={index} className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        {item.name}
                        </p>
                        <p className='text-gray-400'>{item.data}</p>
                    </div>
 )}
              
        

                        </div>

                </div>}



         




            </div>


    </div>
  </section>
  
  </>
}
