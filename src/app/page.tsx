import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Card from './components/card'
import CardImage from './components/card-image'
import Card3 from './components/card-3'

const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card/>
      <CardImage />
      <Card3 />
    </div>
  )
}

export default Page
