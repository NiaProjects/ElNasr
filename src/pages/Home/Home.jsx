import HomeSlider from '@/Components/HomeSlider/HomeSlider'
import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/section/Footer/Footer'
import Numbers from '@/section/Numbers/Numbers'
import OffersSlider from '@/section/OffersSlider/OffersSlider'
import Questions from '@/section/Questions/Questions'
import Specializations from '@/section/Specializations/Specializations'
import Testimonial from '@/section/Testimonial/Testimonial'
import TopDoctors from '@/section/TopDoctors/TopDoctors'
import React from 'react'

export default function Home() {
  return <>
  
  {/* <Navbar/> */}

  <HomeSlider/>
  <Specializations/>

  <OffersSlider/>
  <TopDoctors/>
  <Numbers/>
  <Questions/>
  <Testimonial/>
  {/* <Footer/> */}
  </>
}
