import React from 'react'

interface FeatureProps {
  icon: string
  title: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => (
  <div className="flex items-center space-x-3">
    <span className="text-3xl">{icon}</span>
    <p className="text-lg font-medium">{title}</p>
  </div>
)

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white px-16 py-32 flex items-center"
      style={{ backgroundImage: `url('/img/background.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-5xl mx-auto text-center md:text-left">
        <h1 className="text-6xl font-bold leading-tight mb-8">
          <span className="text-white">Trust</span>

          <span className="text-custom-orange">Prox</span>
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Our blockchain-based system enables secure property transfers using smart contracts and verified signatures.
          Ideal for individuals and businesses seeking a reliable and transparent solution.
        </p>
        <button className="bg-white text-black py-3 px-8 rounded-md text-lg hover:bg-gray-300 transition mb-12">
          Get Started Now
        </button>

        <div className="flex justify-center md:justify-start gap-12">
          <Feature icon="🔒" title="Transaction Security" />
          <Feature icon="🖊️" title="Verified Signatures" />
          <Feature icon="⚙️" title="Automated Process" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
