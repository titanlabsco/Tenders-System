import React from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const WhatWeOffer: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Tender Management',
      description:
        'Streamline your tender process with transparency and automation using our blockchain-powered system.',
      icon: '📑'
    },
    {
      title: 'Contract Management',
      description: 'Securely manage contracts with easy tracking, version control, and compliance assurance.',
      icon: '📝'
    },
    {
      title: 'Supplier Management',
      description: 'Build reliable supplier networks with real-time data, evaluation, and seamless collaboration.',
      icon: '🤝'
    }
  ]

  return (
    <section className="bg-custom-dark text-white px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-lg text-gray-200 mb-12">
          Explore our key solutions designed to enhance. <br />
          Transparency, efficiency, and collaboration <br />
          Across your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-8 text-center border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-black text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
