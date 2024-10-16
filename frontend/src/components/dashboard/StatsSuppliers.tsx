import React, { ReactNode } from 'react'
import { IoPeople, IoDocumentTextOutline, IoDocumentOutline } from 'react-icons/io5'

interface BoxWrapperProps {
  children: ReactNode
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex-1 border border-gray-200 flex items-center">{children}</div>
)

const StatsSuppliers: React.FC = () => {
  return (
    <div className="flex gap-6">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-6">
          <span className="text-sm text-gray-500 font-light">Total Active Suppliers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">75</strong>
            <span className="text-sm text-green-500 pl-2">+5</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoDocumentTextOutline className="text-2xl text-white" />
        </div>
        <div className="pl-6">
          <span className="text-sm text-gray-500 font-light">Total Inactive Suppliers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">25</strong>
            <span className="text-sm text-red-500 pl-2">-2</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-custom-dark">
          <IoDocumentOutline className="text-2xl text-white" />
        </div>
        <div className="pl-6">
          <span className="text-sm text-gray-500 font-light">Total Supplier Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">150</strong>
            <span className="text-sm text-green-500 pl-2">+10</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default StatsSuppliers
