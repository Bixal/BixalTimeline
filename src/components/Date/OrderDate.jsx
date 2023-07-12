// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******

import React from "react"
import { useState, useEffect } from "react"

// export default function OrderDate({value}) {
    
//     let dates = []
    
//     value.map(({date}) => {

//         // Order Dates
//         let newDate = new Date(date)
//         dates.push(newDate)
//         dates.sort(function(a, b){
//             return a - b
//         })
//     })
//     return(dates)
// }

export default function OrderDate({date}) {

        // Convert Date Format
        let [convertDate, setConvertDate] = useState('')

        useEffect(() => {
            let oldDate = new Date(date)
            let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
            let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
            let newDate = oldDateMonth + " " + oldDateYear
            setConvertDate(newDate)
        })

        return(convertDate)
    }   