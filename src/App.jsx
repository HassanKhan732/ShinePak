import React from 'react'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Hero from './Components/Hero'
import SliderSection from './Components/SliderSection'
import  PeopleGridSection from './Components/PeopleGridSection'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Navbar2></Navbar2>
    <Hero></Hero>
    <SliderSection></SliderSection>
    <PeopleGridSection></PeopleGridSection>
    <Footer></Footer>
    </>
  )
}

export default App