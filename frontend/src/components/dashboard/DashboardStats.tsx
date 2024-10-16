import React, { ReactNode } from 'react'
import { IoDocumentOutline, IoDocumentTextOutline, IoPeople } from 'react-icons/io5'

export default function DashboardStats() {
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoDocumentOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Tenders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">4560</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoDocumentTextOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Contracts</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">2000</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Suppliers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">123</strong>
            <span className="text-sm text-red-500 pl-2">-3</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

interface BoxWrapperProps {
  children: ReactNode
}

function BoxWrapper({ children }: BoxWrapperProps) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
