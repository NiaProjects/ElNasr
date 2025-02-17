import React from 'react'
import img from "../../assets/images/dr 3.png"
import { FaStar } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'
export default function DoctorDetails() {
  return <> 
  
  <section className='bg-[#F2F9FF] pb-2'>

    <div className='bg-main p-12'></div>
    <div className="container">
        <div className="flex items-start relative -top-10 gap-10 flex-col md:flex-row">
                <div className='w-full md:w-1/3 '>

                <div className=' md:h-[450px] bg-white pt-10  border-main border-4 overflow-hidden rounded-[100px]'>
            <img src={img} alt="" className='w-full' />
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
                </div>
            <div className=' w-full md:w-2/3'>
                <div className='bg-white mb-10 shadow-xl p-12 rounded-2xl'>
                    <h1 className='text-sec text-7xl mb-4 text-center font-bold'>Dr. Magdy Saber</h1>
                    <p className='text-2xl text-center text-gray-600 font-bold'>Prof. of medical oncology & Hematology</p>
                </div>
                <div className='bg-white  shadow-xl p-12 rounded-2xl'>
                    <h2 className='text-3xl text-sec font-bold mb-4'>About The Doctor</h2>
                    <p className='text-xl text-gray-600'>-PhD and Consultant of Oral and Dental Surgery higly specialized in full 
                        mouth rehabilitation and reconstruction. - Over 35 years of experience besides her passion in
                         becoming an artist and drawing the prettiest smiles on her patients faces making
                          her one of the elite dental care providers not only in egypt but in the middle east region.
                           -Her honesty professionalism and dedication for her patient's satisfaction made her well known among her patients.
                           </p>
                </div>
            </div>
        </div> 
        <div className='bg-white p-2 flex justify-around text-main text-xl font-semibold shadow-lg rounded-lg md:w-2/3 mx-auto '>
            <div className='text-sec'>
            Clinic appointments
            </div>
            <div >
            Daily from Saturday to Thursday
            </div>
            <div className='text-main'>
            From <span className='text-sec'>9</span> am to <span className='text-sec'>6</span> pm
            </div>
        </div>

        <div className='bg-white shadow my-10 p-4 rounded-xl'>
            <h3 className='text-center text-3xl font-bold'>Education</h3>
                <div className='flex justify-center gap-60 mt-2 font-semibold '>
                        <div className='  relative after:absolute after:-left-4 after:top-0 after:bg-main after:h-full  after:w-1 after:rounded-sm' >
                        <p className='text-main text-lg max-w-80'>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-600'> Sep 2018 - Apr 2022  </p>
                    </div>
                        <div className='  relative after:absolute after:-left-4 after:top-0 after:bg-main after:h-full  after:w-1 after:rounded-sm '>
                        <p className='text-main text-lg max-w-80'>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-600'> Sep 2018 - Apr 2022  </p>
                    </div>
                </div>
        </div>


            <div className="grid md:grid-cols-2 gap-10">



                <div className='bg-white rounded-xl shadow-xl p-4'>
                    <h4 className='text-2xl font-bold'>Certificates</h4>
                        <div className='p-4'>


              
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>


                        </div>

                </div>
                <div className='bg-white rounded-xl shadow-xl p-4'>
                    <h4 className='text-2xl font-bold'>EX</h4>
                        <div className='p-4'>


              
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>
                        <div className=' mb-6 last-of-type:mb-0 border-b-[1px] border-gray-700 border-dashed last-of-type:border- pb-4 relative after:absolute after:-left-2 after:top-0 after:bg-main after:h-full  after:w-0.5 after:rounded-sm font-bold' >
                        <p className='text-main  '>
                        Master Degree in Neuro-Psychiatry (M.SC) AlAzhar University
                        </p>
                        <p className='text-gray-400'> Sep 2018 - Apr 2022  </p>
                    </div>


                        </div>

                </div>




            </div>


    </div>
  </section>
  
  </>
}
