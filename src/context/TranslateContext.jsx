/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
export const TranslateContext = createContext()
export default function TranslateContextProvider({children}) {
  const {i18n} = useTranslation("global")
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const handelChangeLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
    document.body.style.direction = newLang === "ar" ? "rtl" : "ltr";
  };




  const ExtractData = (data)=> {
    

const keys = Object.keys(data)

for (let i = 0 ; i < keys.length ; i++) {
  

  if(keys[i].endsWith(lang) ) {
    const key = keys[i].split("_")[0]
    data[key] = data[ keys[i] ]
  } 


}
console.log(data);

return data

  }


  useEffect(() => {
    i18n.changeLanguage(lang);
    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
    // console.log("lang", lang);
    
  }, [lang, i18n]);
  return (
    <TranslateContext.Provider value={{ handelChangeLang, lang , ExtractData  }}>
      {children}
    </TranslateContext.Provider>
  );
}
