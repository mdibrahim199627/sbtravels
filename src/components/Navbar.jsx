import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/menu.svg'
import PopupMenu from './PopupMenu'
const Navbar = ({navlinks}) => {

  const [popupState,setPopupState] = useState(false);
  const onTriggerPopup =()=> setPopupState(!popupState)
  return (
    <>
      <header className='flex items-center justify-center w-auto h-auto absolute top-5 left-0 right-0'>
        <nav className='flex items-center justify-between travigo-container'>
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt='logo/img' className='w-24 h-21 sm:object-fill'/>
            
          </NavLink>
          <ul className='flex items-center gap-7 lg:hidden'>
            {navlinks?.map((val, i)=>(
             <li key={i}><NavLink to={'#'} className="text-lg text-slate-900">{val.link}</NavLink></li> 
            ))}
          </ul>
          <ul className='flex items-center lg:hidden'>
            <li><button type='button' className='button-emrald px-7 text-base py-1.5'>Join Us</button></li>
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li>
              <button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menu} alt="menu/svg" className='object-cover shadow-sm filter'/></button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks}
      popupState={popupState}/>
    </>
  )
}

export default Navbar
