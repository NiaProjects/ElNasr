import { TranslateContext } from '@/context/TranslateContext'
import React, { useContext, useEffect } from 'react'

export default function useExtractData(data ={}) {
// console.log(data);

 const {lang}=   useContext(TranslateContext)

        const keys = Object.keys(data)
        
        for (let i = 0 ; i < keys.length ; i++) {
          
        
          if(keys[i].endsWith(lang) ) {
            const key = keys[i].split("_")[0]
            data[key] = data[ keys[i] ]
          } 
        
        
        }


        
    return data
        

}
