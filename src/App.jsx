import React from 'react'
import Home from './pages/Home/Home'
import "./app.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import ContactUs from './pages/ContactUs/ContactUs'
import { QueryClient, QueryClientProvider } from 'react-query'
import i18next from 'i18next'

import EN_lang from "./locales/EN/common.json"
import AR_lang from "./locales/AR/common.json"
import { I18nextProvider } from 'react-i18next'
import TranslateContextProvider from './context/TranslateContext'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, children: [
      {index : true , element : <Home/>},
      {path: "contact" , element: <ContactUs />},
    ]}
])
const queryClient = new QueryClient()

i18next.init({
  resources : {
    en : {global:EN_lang},
    ar : {global:AR_lang}
  },
  lng: "en", 
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
export default function App() {
  return <>
  <I18nextProvider i18n={i18next}>
    <TranslateContextProvider>




    <QueryClientProvider client={ queryClient}>


  <RouterProvider router={router} />


    </QueryClientProvider>



    </TranslateContextProvider>
  </I18nextProvider>
  
  
  </>
}
