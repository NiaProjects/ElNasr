import { useFormik } from 'formik';
import React from 'react'
import * as yup from'yup'

export default function ContactUs() {

    async function sendData(values){

       
        console.log("sendData",values);
        
        

    }




    const validationSchema =yup.object().shape({
        name:yup.string().min(3,'at least 3 chars').max(20,'max 20 chars').required('name is required'),
        massage:yup.string().min(3,'at least 3 chars').max(20,'max 20 chars').required('massage is required'),
        phone:yup.string().required('phone is required').matches(/^01[1025][0-9]{8}$/,'Egyptian numbers only')
    })
const formik  = useFormik({
initialValues:{
    name:'',
    massage:'',

    phone:'',
},
validationSchema,

onSubmit:sendData
})

  return <> 
  
  <section className='min-h-screen'>


<div className='mb-16'>
<div className='bg-gradient-to-r from-[#2AA7FF] to-[#0C8CE5]'>
        <h1 className='bg-white w-3/4 mx-auto shadow-xl rounded-2xl text-sec text-7xl font-bold relative top-16  text-center py-12'>contact us</h1>
         </div>
</div>


    <div className="container pt-14">
    <p className='text-2xl text-center md:text-left my-4 text-sec'>We will be happy to receive your inquiries and suggestions.         </p>
    <form  onSubmit={formik.handleSubmit} >
  <div className="relative flex flex-col md:flex-row justify-start w-full  items-center z-0  mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
  <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="name" id="name" aria-describedby="helper-text-explanation" className={` ${formik.errors.name && formik.touched.name ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder="Nagy Osama"/>

  {formik.errors.name && formik.touched.name ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span> Name is required!</p>
 : null }
  </div>



  <div className="relative flex flex-col md:flex-row justify-start  items-center z-0 w-full mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12  mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
  <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="phone" id="phone" aria-describedby="helper-text-explanation" className={` ${formik.errors.phone && formik.touched.phone ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder="0100000000"/>

  {formik.errors.phone && formik.touched.phone ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span> phone is required!</p>
 : null }
  </div>
  <div className="relative flex flex-col md:flex-row justify-start  items-center z-0 w-full mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your massage</label>
  <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} type="massage" id="massage" aria-describedby="helper-text-explanation" className={` ${formik.errors.massage && formik.touched.massage ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 min-h-40 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder="your massage ...."></textarea>

  {formik.errors.massage && formik.touched.massage ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span> massage is required!</p>
 : null }
  </div>










  

<button type='submit' className='bg-main  py-3 px-5 text-white rounded-lg font-bold mx-auto block mt-3'>

{/* {loading ?'loading ... ' : 'submit' } */}
submit

</button>

{/* {errMsg ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {errMsg}
</div> :null}
{successMsg ? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Success alert!</span> {successMsg}
</div> : null} */}

  </form>
    </div>
  </section>
  
  
  </>
}
