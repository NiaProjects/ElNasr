import Heading from '@/Components/Heading/Heading';
import { useFormik } from 'formik';
import React from 'react'
import { useTranslation } from 'react-i18next';
import * as yup from'yup'

export default function ContactUs() {


  const {t} = useTranslation('global')
    async function sendData(values){

       
        console.log("sendData",values);
        
        

    }




    const validationSchema =yup.object().shape({
        name:yup.string().required(t("contact.nameValidation")),
        massage:yup.string().min(3,t("contact.massageValidation")).required(t("contact.massageValidation")),
        phone:yup.string().required(t("contact.phoneValidation")).matches(/^01[1025][0-9]{8}$/,t("contact.phoneValidation"))
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

  <Heading title={t("contact.title")} />

    <div className="container pt-14">
    <p className='text-2xl text-center  my-4 text-sec'>{t("contact.description")}    </p>
    <form  onSubmit={formik.handleSubmit} >
  <div className="relative flex flex-col md:flex-row justify-start w-full  items-center z-0  mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12 mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("contact.name")}</label>
  <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="name" id="name" aria-describedby="helper-text-explanation" className={` ${formik.errors.name && formik.touched.name ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder={t("contact.namePlaceholder")}/>

  {formik.errors.name && formik.touched.name ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span>{formik.errors.name}</p>
 : null }
  </div>



  <div className="relative flex flex-col md:flex-row justify-start  items-center z-0 w-full mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12  mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("contact.phone")}</label>
  <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="phone" id="phone" aria-describedby="helper-text-explanation" className={` ${formik.errors.phone && formik.touched.phone ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder="0100000000"/>

  {formik.errors.phone && formik.touched.phone ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span>{formik.errors.phone}</p>
 : null }
  </div>
  <div className="relative flex flex-col md:flex-row justify-start  items-center z-0 w-full mb-5 group">
  <label htmlFor="email" className="block  md:w-1/12 mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("contact.massage")}</label>
  <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} type="massage" id="massage" aria-describedby="helper-text-explanation" className={` ${formik.errors.massage && formik.touched.massage ? 'border-red-500 placeholder:text-red-300 ' : ''}  bg-gray-50 border w-9/12 min-h-40 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-main block  p-2.5 `} placeholder={t("contact.massagePlaceholder")}></textarea>

  {formik.errors.massage && formik.touched.massage ?     <p className="mt-2 text-sm text-red-600 mx-2"><span className="font-medium"></span>{formik.errors.massage}</p>
 : null }
  </div>










  

<button type='submit' className='bg-main  py-3 px-5 text-white rounded-lg font-bold mx-auto block mt-3'>

{/* {loading ?'loading ... ' : 'submit' } */}
{t("contact.button")}

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
