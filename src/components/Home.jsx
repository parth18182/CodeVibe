import React, { useEffect } from 'react'
import ImgSlider from './ImgSlider'
import Categories from './Categories'
import HeroSection from './HeroSection'
import { useSelector } from 'react-redux'

const Home = () => {
  const { cart } = useSelector((store) => store.cart)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className='w-full'>
      <HeroSection />
    </div>
  )
}

export default Home
