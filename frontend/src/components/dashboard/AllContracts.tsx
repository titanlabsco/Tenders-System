import React from 'react'
import { format } from 'date-fns'
import { getOrderStatus } from '../../lib/helpers'

interface Contract {
  id: string
  customer_name: string
  start_date: string
  end_date: string
  order_total: string
  order_status: string
}

const allContractData: Contract[] = [
  {
    id: '1',
    customer_name: 'Shirley A. Lape',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$435.50',
    order_status: 'ACTIVE'
  },
  {
    id: '2',
    customer_name: 'Ryan Carroll',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$96.35',
    order_status: 'ACTIVE'
  },
  {
    id: '3',
    customer_name: 'Mason Nash',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$836.44',
    order_status: 'INACTIVE'
  },
  {
    id: '4',
    customer_name: 'Luke Parkin',
    start_date: '2022-05-16',
    end_date: '2022-06-16',
    order_total: '$334.50',
    order_status: 'INACTIVE'
  },
  {
    id: '5',
    customer_name: 'Anthony Fry',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$876.00',
    order_status: 'INACTIVE'
  },
  {
    id: '6',
    customer_name: 'Emily Johnson',
    start_date: '2022-05-15',
    end_date: '2022-06-15',
    order_total: '$1,250.00',
    order_status: 'ACTIVE'
  },
  {
    id: '7',
    customer_name: 'Michael Smith',
    start_date: '2022-05-20',
    end_date: '2022-06-20',
    order_total: '$1,750.75',
    order_status: 'INACTIVE'
  },
  {
    id: '8',
    customer_name: 'Jessica Brown',
    start_date: '2022-05-21',
    end_date: '2022-06-21',
    order_total: '$542.60',
    order_status: 'ACTIVE'
  },
  {
    id: '9',
    customer_name: 'Oliver Garcia',
    start_date: '2022-05-22',
    end_date: '2022-06-22',
    order_total: '$1,980.50',
    order_status: 'INACTIVE'
  },
  {
    id: '10',
    customer_name: 'Sophia Martinez',
    start_date: '2022-05-23',
    end_date: '2022-06-23',
    order_total: '$700.00',
    order_status: 'ACTIVE'
  }
]

const AllContracts: React.FC = () => (
  <div className="bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-200 flex-1">
    <strong className="text-gray-700 font-medium">Contracts Information</strong>
    <table className="w-full mt-4 border-collapse text-sm text-gray-700">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2 text-left">Contract ID</th>
          <th className="border px-4 py-2 text-left">Client Name</th>
          <th className="border px-4 py-2 text-left">Start Date</th>
          <th className="border px-4 py-2 text-left">End Date</th>
          <th className="border px-4 py-2 text-left">Order Total</th>
          <th className="border px-4 py-2 text-left">Order Status</th>
        </tr>
      </thead>
      <tbody>
        {allContractData.map((contract) => (
          <tr key={contract.id} className="even:bg-gray-50">
            <td className="border px-4 py-2">{contract.id}</td>
            <td className="border px-4 py-2">{contract.customer_name}</td>
            <td className="border px-4 py-2">{format(new Date(contract.start_date), 'dd MMM yyyy')}</td>
            <td className="border px-4 py-2">{format(new Date(contract.end_date), 'dd MMM yyyy')}</td>
            <td className="border px-4 py-2">{contract.order_total}</td>
            <td className="border px-4 py-2">{getOrderStatus(contract.order_status)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default AllContracts
