import React, { useState } from 'react'
import { datalist } from './data'


const useReview = () => {

    const[index, setIndex] = useState(0)
   
    
    const item = datalist[index]
  
    
    
    
    const handleNext = ()=>{
     
      setIndex((prev)=>{
        return  prev = (prev + 1) % datalist.length
      })
    }
    
    const handlePrev = ()=>{
      setIndex((prev)=>{
        return  prev = (prev - 1 < 0) ?  datalist.length -1 : prev - 1
      })
    }
    
    
    const handleSurprise = ()=>{
      setIndex(Math.floor(Math.random() * datalist.length))
    }
        

  return (
   { handlePrev,handleNext,handleSurprise,item}
  )
}

export default useReview
