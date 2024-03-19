import React from 'react'

import { Navbar, Hero, Footer, Memory } from './components'
import {hero, navlinks, memory, bemory} from './data/travigodata'

const App = () => {
  
  return (
    <>
    <Navbar navlinks={navlinks}/>
    
    <Hero hero={hero}/>
    <Memory memory={memory}/>
    <Footer bemory={bemory}/>
    
    
      </>
  )
}

export default App
