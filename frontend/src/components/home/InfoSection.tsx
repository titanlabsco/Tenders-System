import React from 'react'

const InfoSection: React.FC = () => {
  return (
    <section className="bg-white text-black px-16 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            With the right system, <br /> great things happen.
          </h2>
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            Our blockchain-powered tender management system ensures transparent and secure processes for both government
            agencies and private companies. It eliminates the risks of corruption by creating an immutable,
            decentralized record of every step in the procurement process.
          </p>
          <p className="mt-6">
            With this solution, organizations can achieve better control, accountability, and trust from their
            stakeholders, while making the entire process more efficient and traceable from start to finish.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
