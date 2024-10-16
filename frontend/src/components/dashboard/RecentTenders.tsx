import React from 'react'
import { format } from 'date-fns'
import { getOrderStatus } from '../../lib/helpers'

interface TenderData {
  id: string
  tender_id: string
  customer_name: string
  start_date: string
  end_date: string
  order_total: string
  order_status: string
}

const recentTenderData: TenderData[] = [
  {
    id: '1',
    tender_id: '4324',
    customer_name: 'Shirley A. Lape',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$435.50',
    order_status: 'ACTIVE'
  },
  {
    id: '2',
    tender_id: '7453',
    customer_name: 'Ryan Carroll',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$96.35',
    order_status: 'ACTIVE'
  },
  {
    id: '3',
    tender_id: '5434',
    customer_name: 'Mason Nash',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$836.44',
    order_status: 'INACTIVE'
  },
  {
    id: '4',
    tender_id: '9854',
    customer_name: 'Luke Parkin',
    start_date: '2022-05-16',
    end_date: '2022-06-16',
    order_total: '$334.50',
    order_status: 'INACTIVE'
  },
  {
    id: '5',
    tender_id: '8763',
    customer_name: 'Anthony Fry',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$876.00',
    order_status: 'INACTIVE'
  },
  {
    id: '6',
    tender_id: '5627',
    customer_name: 'Emily Johnson',
    start_date: '2022-05-15',
    end_date: '2022-06-15',
    order_total: '$1,250.00',
    order_status: 'ACTIVE'
  },
  {
    id: '7',
    tender_id: '3498',
    customer_name: 'Michael Smith',
    start_date: '2022-05-20',
    end_date: '2022-06-20',
    order_total: '$1,750.75',
    order_status: 'INACTIVE'
  },
  {
    id: '8',
    tender_id: '1287',
    customer_name: 'Jessica Brown',
    start_date: '2022-05-21',
    end_date: '2022-06-21',
    order_total: '$542.60',
    order_status: 'ACTIVE'
  },
  {
    id: '9',
    tender_id: '7345',
    customer_name: 'Oliver Garcia',
    start_date: '2022-05-22',
    end_date: '2022-06-22',
    order_total: '$1,980.50',
    order_status: 'INACTIVE'
  },
  {
    id: '10',
    tender_id: '1987',
    customer_name: 'Sophia Martinez',
    start_date: '2022-05-23',
    end_date: '2022-06-23',
    order_total: '$700.00',
    order_status: 'ACTIVE'
  }
]

interface RecentProps {
  className?: string
}

const Recent: React.FC<RecentProps> = ({ className }) => {
  return (
    <div className={`bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-200 flex-1 ${className}`}>
      <strong className="text-gray-700 font-medium">Recent Tenders</strong>
      <table className="w-full mt-4 border-collapse text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Tender ID</th>
            <th className="border px-4 py-2 text-left">Client Name</th>
            <th className="border px-4 py-2 text-left">Start Date</th>
            <th className="border px-4 py-2 text-left">End Date</th>
            <th className="border px-4 py-2 text-left">Order Total</th>
            <th className="border px-4 py-2 text-left">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {recentTenderData.map((order) => (
            <tr key={order.id} className="even:bg-gray-50">
              <td className="border px-4 py-2">{order.tender_id}</td>
              <td className="border px-4 py-2">{order.customer_name}</td>
              <td className="border px-4 py-2">{format(new Date(order.start_date), 'dd MMM yyyy')}</td>
              <td className="border px-4 py-2">{format(new Date(order.end_date), 'dd MMM yyyy')}</td>
              <td className="border px-4 py-2">{order.order_total}</td>
              <td className="border px-4 py-2">{getOrderStatus(order.order_status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recent
