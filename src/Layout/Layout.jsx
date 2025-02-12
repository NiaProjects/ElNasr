import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/section/Footer/Footer'
import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {

let location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } , [location])
  return <>
  


  <Navbar/>

  <Outlet/>
    <Footer/>
  </>
}
