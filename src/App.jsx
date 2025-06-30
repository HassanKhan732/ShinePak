import React from 'react'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Hero from './Components/Hero'
import SliderSection from './Components/SliderSection'
import  PeopleGridSection from './Components/PeopleGridSection'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Navbar2></Navbar2>
    <Hero></Hero>
    <SliderSection></SliderSection>
    <PeopleGridSection></PeopleGridSection>
    <Banner></Banner>
    <Footer></Footer>
    </>
  )
}

export default App