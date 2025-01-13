import React from 'react'
import HeroSection from './components/hero'
import Card from './components/card'
import CardImage from './components/card-image'
import Card3 from './components/card-3'
import Signup from './components/signup'
import Getintouch from './components/getintouch'
import About from './About/page'
import Product from './productListing/page'
import Footer from './components/footer'
const Page = () => {
  return (
    <div>
      <HeroSection />
      <Card/>
      <CardImage />
      <Card3 />
      <Signup />
    <Getintouch/>
   <About /> 
    
      {/* <About /> */}
    </div>
  )
}

export default Page
