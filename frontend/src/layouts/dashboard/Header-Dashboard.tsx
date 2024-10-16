'use client'

import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between shadow-sm">
      {/* Search Input */}
      <div className="relative w-[24rem]">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:ring-2 focus:ring-blue-500 border border-gray-300 w-full h-10 pl-11 pr-4 rounded-md"
        />
      </div>

      {/* Icons and User Menu */}
      <div className="flex items-center gap-4">
        {/* Chat Icon */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'bg-gray-100' : '',
                  'p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none'
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-72 bg-white rounded-md shadow-lg p-4">
                  <strong className="text-gray-700">Messages</strong>
                  <p className="text-sm mt-2">You have no new messages.</p>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Notification Icon */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'bg-gray-100' : '',
                  'p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none'
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-72 bg-white rounded-md shadow-lg p-4">
                  <strong className="text-gray-700">Notifications</strong>
                  <p className="text-sm mt-2">You have no new notifications.</p>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* User Menu */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex items-center focus:outline-none">
              <div
                className="h-10 w-10 rounded-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
              ></div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => router.push('/profile')}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    )}
                  >
                    Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => router.push('/settings')}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    )}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => router.push('/logout')}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    )}
                  >
                    Sign Out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  )
}

export default Header
