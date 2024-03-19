import React from 'react'

const Footer = ({bemory:{title, text, subtitle, img, experience}}) => {
  return (
    <>
    <div className='bg-fixed bg-cover bg-center 'style={{backgroundImage: `url(${img})`, transition:"2s"}}>
      <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
        
        <div className='grid items-center w-full max-w-2x lg:text-center'>
            <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 sm:text-sm '>{text}</p>
            <div className='grid items-center grid-cols-3 gap-7 xl:gap-3'>{experience?.map((val,i)=>(
                <div key={i} className='bg-gradient-to-b from-yellow-500 to-green-300 opacity-80 rounded-lg h-auto w-auto flex items-center justify-center flex-col text-slate-900 text-center py-7 px-5 xl:p-4 filter drop shadow-lg cursor-pointer hover:scale-105 transition-all duration-400'>
                    <h1 className='text-3xl xl:text-2xl font-bold '>{val.number}</h1>
                    <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>{val.title}</p>
                </div>
            ))}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
