import React, { useEffect } from 'react'
import { useState } from 'react'

import menu from '../images/car1.jpg' 
import logo from '../images/car2.jpg'
import dashboard from '../images/car3.png'
const Hero = ({hero:{title, subtitle, text, btn1, btn2, img}}) => {

const images=[
  logo,menu
]
const [backgroundImage, setbackgroundImage] = useState(images[1])
useEffect(() => {
 let currectIndex = 0;
 const changeBackgroundImage =()=>{
  currectIndex =(currectIndex + 1)% images.length;
  setbackgroundImage(images[currectIndex])
 }
const interval =setInterval(changeBackgroundImage,4000)
return()=>{
  clearInterval(interval)
}
},[])

  return (
    <>
       
      <div className='flex flex-col h-auto w-auto bg-gradient-to-b from-red-200 to-blue-500' >
        <div className='travigo-container grid items-start justify-items-center '>
          <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
          <h1 className='text-7xl font-bold mt-12 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 text-center  sm:text-sm '>{text}</p>
            <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
              <button type= 'button' className='button-emrald'>{btn1}</button>
              <button type= 'button' className='button-light'>{btn2}</button>
            </div>
          </div>
          <div className='h-[75vh] w-[95vh] lg:w-[95vh] md:w-[57vh] sm:w-[45vh] xsm:w-[35vh] bg-relative bg-contain bg-center rounded-2xl drop-shadow-emrald'style={{backgroundImage: `url(${backgroundImage})`, transition:"2s"}}>
      <div className='h-[55vh] lg:h-[25vh] md:h-[25vh] sm:h-[25vh] '></div>
    </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Hero
