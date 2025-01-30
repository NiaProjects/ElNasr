import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function useApi({url , data = {} , method = "get" , queryKey}) {


    function callApi () {
            return axios[method](url , { body : data ,})
    }
    const res = useQuery( { queryKey  , queryFn : callApi , refetchOnWindowFocus : false} )

  return res
}
