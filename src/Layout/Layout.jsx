import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/section/Footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  
  <Navbar/>

  <Outlet/>
    <Footer/>
  </>
}
