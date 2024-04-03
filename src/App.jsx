import { lazy, useState } from 'react'
const UpperNavBar =  lazy(()=>import("./UpperNavBar/UppernavBar"))
const LowerNavBar = lazy(()=>import("./LowerNavBar/LowerNavBar"))
const HeroSection = lazy(()=>import("./HeroSection/HeroSection"))
function App() {


  return (
    <>
      
      <section className='overflow-x-hidden' >
        <UpperNavBar/>
        <LowerNavBar/>
        <HeroSection/>
      </section>

    </>
  )
}

export default App
