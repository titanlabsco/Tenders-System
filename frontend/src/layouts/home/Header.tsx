import React from 'react'

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-8 py-4 shadow-md z-50">
    <div className="text-xl font-semibold">
      <span className="text-black">Titan</span>
      <span className="text-custom-orange">Labs</span>
    </div>

    <div className="flex items-center space-x-4">
      <button className="bg-custom-dark hover:bg-slate-950 text-white py-2 px-4 rounded-md transition">
        Get Started
      </button>
    </div>
  </header>
)

export default Header
