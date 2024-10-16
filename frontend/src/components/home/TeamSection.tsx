import React from 'react'

interface TeamMember {
  name: string
  role: string
  role2: string
  image: string
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Josué Brenes',
      role: 'Co-founder',
      role2: 'FE Developer',
      image: '/img/brenes.png'
    },
    {
      name: 'Randall Valenciano',
      role: 'Co-founder',
      role2: 'FS Developer',
      image: '/img/randall.png'
    },
    {
      name: 'Diego Duarte',
      role: 'Co-founder',
      role2: 'FS Developer',
      image: '/img/duarte.png'
    },
    {
      name: 'Humberto',
      role: 'Co-founder',
      role2: 'BE Developer',
      image: '/img/humberto.png'
    },
    {
      name: 'Josué Soto',
      role: 'Co-founder',
      role2: 'BE Developer',
      image: '/img/soto.png'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="relative max-w-7xl mx-auto text-center px-8 text-black">
        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-lg mb-12">
          Our talented team is committed to building reliable and innovative solutions for your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => {
            const isHighlighted = member.name === 'Randall Valenciano' || member.name === 'Humberto'

            return (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${
                  isHighlighted ? 'bg-custom-orange' : 'bg-custom-dark'
                }`}
              >
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-1 ${isHighlighted ? 'text-white' : 'text-white'}`}>
                    {member.name.toUpperCase()}
                  </h3>
                  <p className={`text-sm mb-1 ${isHighlighted ? 'text-white' : 'text-white'}`}>{member.role}</p>
                  <p className={`text-sm mb-4 ${isHighlighted ? 'text-white' : 'text-white'}`}>{member.role2}</p>
                </div>
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
