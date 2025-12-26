import React from 'react'
import VenueSection from '../components/VenueSection'
import Info from '../components/Info'
import FlipdownTimer from '../components/FlipdownTimer'

const Home = () => {
  return (
    <div>
      <FlipdownTimer/>
      <VenueSection/>
      <Info/>
    </div>
  )
}

export default Home
