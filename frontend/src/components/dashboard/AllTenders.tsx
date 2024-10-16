import React from 'react'
import { format } from 'date-fns'
import { getOrderStatus } from '../../lib/helpers'

interface Tender {
  tender_id: string
  tender_name: string
  start_date: string
  end_date: string
  order_total: string
  order_status: string
}

const allTenderData: Tender[] = [
  {
    tender_id: '1',
    tender_name: 'Shirley A. Lape',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$435.50',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '2',
    tender_name: 'Ryan Carroll',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$96.35',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '3',
    tender_name: 'Mason Nash',
    start_date: '2022-05-17',
    end_date: '2022-06-17',
    order_total: '$836.44',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '4',
    tender_name: 'Luke Parkin',
    start_date: '2022-05-16',
    end_date: '2022-06-16',
    order_total: '$334.50',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '5',
    tender_name: 'Anthony Fry',
    start_date: '2022-05-14',
    end_date: '2022-06-14',
    order_total: '$876.00',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '6',
    tender_name: 'Emily Johnson',
    start_date: '2022-05-15',
    end_date: '2022-06-15',
    order_total: '$1,250.00',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '7',
    tender_name: 'Michael Smith',
    start_date: '2022-05-20',
    end_date: '2022-06-20',
    order_total: '$1,750.75',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '8',
    tender_name: 'Jessica Brown',
    start_date: '2022-05-21',
    end_date: '2022-06-21',
    order_total: '$542.60',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '9',
    tender_name: 'Oliver Garcia',
    start_date: '2022-05-22',
    end_date: '2022-06-22',
    order_total: '$1,980.50',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '10',
    tender_name: 'Sophia Martinez',
    start_date: '2022-05-23',
    end_date: '2022-06-23',
    order_total: '$700.00',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '11',
    tender_name: 'John Doe',
    start_date: '2022-05-24',
    end_date: '2022-06-24',
    order_total: '$500.00',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '12',
    tender_name: 'Jane Smith',
    start_date: '2022-05-25',
    end_date: '2022-06-25',
    order_total: '$750.00',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '13',
    tender_name: 'David Johnson',
    start_date: '2022-05-26',
    end_date: '2022-06-26',
    order_total: '$950.00',
    order_status: 'INACTIVE'
  },
  {
    tender_id: '14',
    tender_name: 'Emily Davis',
    start_date: '2022-05-27',
    end_date: '2022-06-27',
    order_total: '$1,100.00',
    order_status: 'ACTIVE'
  },
  {
    tender_id: '15',
    tender_name: 'Michael Wilson',
    start_date: '2022-05-28',
    end_date: '2022-06-28',
    order_total: '$1,300.00',
    order_status: 'INACTIVE'
  }
]

const AllTenders: React.FC = () => (
  <div className="bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-200 flex-1">
    <strong className="text-gray-700 font-medium">Tenders Information</strong>
    <table className="w-full mt-4 border-collapse text-sm text-gray-700">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2 text-left">Tender ID</th>
          <th className="border px-4 py-2 text-left">Tender Name</th>
          <th className="border px-4 py-2 text-left">Start Date</th>
          <th className="border px-4 py-2 text-left">End Date</th>
          <th className="border px-4 py-2 text-left">Tender Total</th>
          <th className="border px-4 py-2 text-left">Tender Status</th>
        </tr>
      </thead>
      <tbody>
        {allTenderData.map((order) => (
          <tr key={order.tender_id} className="even:bg-gray-50">
            <td className="border px-4 py-2">{order.tender_id}</td>
            <td className="border px-4 py-2">{order.tender_name}</td>
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

export default AllTenders
