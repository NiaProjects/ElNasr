import React, { useContext } from 'react'
import logo from '../../assets/images/logoelnasr.png'
import { Link, NavLink } from 'react-router-dom'
import { TranslateContext } from '@/context/TranslateContext'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const {lang , handelChangeLang} = useContext(TranslateContext)
  const {t} = useTranslation("global")
  return <>
  

<nav className="bg-sec shadow-xl relative   border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
  <Link to="/" className="flex text-main items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-" alt="elnasr Logo" />
  </Link>
  <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
  <button
  onClick={handelChangeLang}
  className='border-2 border-main shadow-md shadow-teal-300 hover:scale-105 focus:shadow-none transition-all duration-200 px-3 py-1 rounded-md bg-gray-100 text-teal-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-teal-300 dark:hover:bg-gray-700'
>
  <i className="fa-solid fa-earth-americas"></i> {lang == "ar" ? "English" : "عربي"}
</button>
      <button data-collapse-toggle="navbar-language" type="button" className="inline-flex bg-main text-white items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-sky-600  focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-language" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg0  md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li className='mx-4'>
        <NavLink to="/" className="block py-2 px-3  text-white bg-main rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{t("navbar.Home")}</NavLink>
      </li>
      <li className='mx-4'>
        <NavLink to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t("navbar.About")}</NavLink>
      </li>
      <li className='mx-4'>
        <NavLink  to="/specializations" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t("navbar.Specializations")}</NavLink>
      </li> 
      <li className='mx-4'>
        <NavLink to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{t("navbar.Contact")}</NavLink>
      </li>

    </ul>
  </div>
  </div>
</nav>

  
  </>
}
