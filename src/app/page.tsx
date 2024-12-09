import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Card from './components/card'
import CardImage from './components/card-image'
import Card3 from './components/card-3'
import Signup from './components/signup'
import Getintouch from './components/getintouch'
import Footer from './components/footer'
const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card/>
      <CardImage />
      <Card3 />
      <Signup />
      <Getintouch />
      <Footer />
    </div>
  )
}

export default Page
