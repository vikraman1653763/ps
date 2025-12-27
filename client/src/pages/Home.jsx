import React from 'react'
import VenueSection from '../components/VenueSection'
import Info from '../components/Info'
import FlipdownTimer from '../components/FlipdownTimer'
import WeddingCTA from '../components/WeddingCTA'

const Home = () => {
  return (
    <div>
      <FlipdownTimer/>
      <VenueSection/>
      <Info/>
      <WeddingCTA/>
    </div>
  )
}

export default Home
