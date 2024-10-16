import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface Contract {
  id: string
  customer_name: string
  order_total: string
  order_status: string
}

const popularContracts: Contract[] = [
  {
    id: '3432',
    customer_name: 'Shirley A. Lape',
    order_total: '$1499.00',
    order_status: 'ACTIVE'
  },
  {
    id: '7633',
    customer_name: 'Ryan Carroll',
    order_total: '$399.00',
    order_status: 'ACTIVE'
  },
  {
    id: '6534',
    customer_name: 'Mason Nash',
    order_total: '$899.00',
    order_status: 'INACTIVE'
  },
  {
    id: '9234',
    customer_name: 'Luke Parkin',
    order_total: '$499.00',
    order_status: 'ACTIVE'
  },
  {
    id: '4314',
    customer_name: 'Anthony Fry',
    order_total: '$699.00',
    order_status: 'INACTIVE'
  },
  {
    id: '4342',
    customer_name: 'Emily Johnson',
    order_total: '$399.00',
    order_status: 'ACTIVE'
  }
]

const PopularContracts: React.FC = () => (
  <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
    <strong className="text-gray-700 font-medium">Popular Contracts</strong>
    <div className="mt-4 flex flex-col gap-3">
      {popularContracts.map((contract) => (
        <Link key={contract.id} href={`/contract/${contract.id}`} className="flex items-start hover:no-underline">
          <div className="flex-1">
            <p className="text-sm text-gray-800">{contract.customer_name}</p>
            <span
              className={classNames(
                contract.order_status === 'INACTIVE' ? 'text-red-500' : 'text-green-500',
                'text-xs font-medium'
              )}
            >
              {contract.order_status}
            </span>
          </div>
          <div className="text-xs text-gray-400 pl-1.5">{contract.order_total}</div>
        </Link>
      ))}
    </div>
  </div>
)

export default PopularContracts
