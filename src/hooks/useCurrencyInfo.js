//TODO: COSTOM HOOK 

import { useEffect, useState } from "react";

/** 
 * HOOK IS  just another function 
 */

// function hello(){

//     return []
// } THIS IS ALSO THE HOOK 

// hooks has optional argument but in our project we need argument 'currency'


function useCurrencyInfo(currency){

    // return some data 
    const [data, setData] = useState({}) // in case fetch filed i will passed empty obj
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))  // same as res.currency

        
    },[currency])
    // console.log(data)
    
    return data
}


export default useCurrencyInfo;