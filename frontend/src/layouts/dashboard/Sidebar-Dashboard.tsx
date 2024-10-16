import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { HiCloud, HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

interface SidebarLinkProps {
  link: {
    key: string
    path: string
    label: string
    icon: React.ReactNode
  }
  currentPath: string
}

interface SidebarProps {
  currentPath: string
}

export default function Sidebar({ currentPath }: SidebarProps) {
  return (
    <div className="bg-custom-dark w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <div className="text-white">
          <HiCloud fontSize={24} />
        </div>
        <span className="text-neutral-200 text-lg">TitanLabs</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} currentPath={currentPath} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} currentPath={currentPath} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, currentPath }) => {
  return (
    <Link
      href={link.path}
      className={classNames(currentPath === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  )
}
