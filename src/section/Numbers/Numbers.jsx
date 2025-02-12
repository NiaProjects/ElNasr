import React from 'react'
import { FaHandHoldingHeart, FaHospital } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { PiHospital } from 'react-icons/pi'
import line from "../../assets/images/Vectorline.png"
import { useTranslation } from 'react-i18next'
export default function Numbers() {
    const {t} = useTranslation("global")
  return <>
  
  <section>
    <div className="container relative py-20">
            <img src={line} className=' absolute top-1/2 -translate-y-1/2 -left-20' alt="" />
            <div className='grid lg:grid-cols-2 gap-20' >
                    <div className="flex items-center">
                    <div className='text-center md:text-start ' >
                    <p className='text-main text-xl font-bold'>{t("numbers.title")}</p>
                    <h4 className='text-sec text-7xl  font-bold mt-4 mb-8'>{t("numbers.Families")}</h4>
                    <p className='text-gray-400 text-xl leading-10 font-semibold'>{t("numbers.description")}</p>
                </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-10'>
                    <div className='flex flex-col' >

                        <div className="card-number shadow-xl text-center py-20  ">
                            <div className='p-6 bg-blue-50 rounded-full w-fit mx-auto ' ><FaHandHoldingHeart className='text-main text-6xl' />  </div>
                            <h5 className='text-sec text-7xl font-bold mt-4 mb-8'>5000+</h5>
                            <p className='text-gray-400 text-xl'>{t("numbers.Patients")}</p>
                        </div>
                        <div className="card-number shadow-xl text-center py-20  mt-12">
                            <div className='p-6 bg-yellow-100 rounded-full w-fit mx-auto ' ><FaHospital  className='text-yellow-400 text-6xl' />  </div>
                            <h5 className='text-sec text-7xl font-bold mt-4 mb-8'>5000+</h5>
                            <p className='text-gray-400 text-xl'>{t("numbers.Patients")}</p>
                        </div>

                    </div>
                    <div className='flex mt-16 flex-col' >

                        <div className="card-number shadow-xl text-center py-20  ">
                            <div className='p-6 bg-[#FFF2F0] rounded-full w-fit mx-auto ' ><PiHospital  className='text-[#FF684C] text-6xl' />  </div>
                            <h5 className='text-sec text-7xl font-bold mt-4 mb-8'>5000+</h5>
                            <p className='text-gray-400 text-xl'>{t("numbers.Patients")}</p>
                        </div>
                        <div className="card-number shadow-xl text-center py-20  mt-12">
                            <div className='p-6 bg-[#EBFAF1] rounded-full w-fit mx-auto ' ><FaUserDoctor  className='text-emerald-600 text-6xl' />  </div>
                            <h5 className='text-sec text-7xl font-bold mt-4 mb-8'>5000+</h5>
                            <p className='text-gray-400 text-xl'>{t("numbers.Patients")}</p>
                        </div>

                    </div>
                    </div>
            </div>

    </div>
  </section>
  
  
  </>
}
