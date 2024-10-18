'use client'

import React from 'react'
import { Link } from 'react-scroll'
import useMetaMask from '../../hooks/useWallet'

const Header: React.FC = () => {
  const { account, connectWallet } = useMetaMask()

  return (
    <header className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-8 py-4 shadow-md z-50">
      <div className="text-3xl font-semibold">
        <span className="text-black">Titan</span>
        <span className="text-custom-orange">Labs</span>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="info"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Info
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Services
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Team
        </Link>

        {/* Conectar Wallet */}
        {account ? (
          <a
            href={`https://etherscan.io/address/${account}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button nav-button btn-sm mx-4"
          >
            <button className="bg-custom-dark text-white py-2 px-4 rounded-md transition">
              {`${account.slice(0, 6)}...${account.slice(-4)}`}
            </button>
          </a>
        ) : (
          <button
            className="bg-custom-dark hover:bg-slate-950 text-white py-2 px-4 rounded-md transition"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
