import React from 'react'

import HeroSection from '@/src/components/home/HeroSection'
import InfoSection from '@/src/components/home/InfoSection'
import WhatWeOffer from '@/src/components/home/WhatWeOffer'
import TeamSection from '@/src/components/home/TeamSection'
import Header from '@/src/layouts/home/Header'
import Footer from '@/src/layouts/home/Footer'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Header />
        <main className="w-full">
          <HeroSection />
          <InfoSection />
          <WhatWeOffer />
          <TeamSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
