import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'

const currentYear = new Date().getFullYear()

const Footer: React.FC = () => (
  <footer className="bg-custom-dark text-white py-12">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <div className="text-2xl font-bold">
        Titan<span className="text-orange-500">Labs</span>
      </div>

      <div className="flex justify-center space-x-6 text-3xl">
        <a href="#" className="text-white hover:text-gray-300">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaYoutube />
        </a>
      </div>

      <p className="text-sm uppercase tracking-widest">
        Reduces corruption risks <br /> in contract award processes.
      </p>

      <div className="text-xs text-gray-500">
        Tenders System. Powered by <span className="text-orange-500">TitanLabs</span> © {currentYear}
      </div>
    </div>
  </footer>
)

export default Footer
