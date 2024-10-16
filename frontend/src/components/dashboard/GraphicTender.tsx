import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface TenderData {
  name: string
  TendersWon: number
  TendersLost: number
}

const data: TenderData[] = [
  { name: 'Jan', TendersWon: 4000, TendersLost: 2400 },
  { name: 'Feb', TendersWon: 3000, TendersLost: 1398 },
  { name: 'Mar', TendersWon: 2000, TendersLost: 9800 },
  { name: 'Apr', TendersWon: 2780, TendersLost: 3908 },
  { name: 'May', TendersWon: 1890, TendersLost: 4800 },
  { name: 'Jun', TendersWon: 2390, TendersLost: 3800 },
  { name: 'Jul', TendersWon: 3490, TendersLost: 4300 },
  { name: 'Aug', TendersWon: 2000, TendersLost: 9800 },
  { name: 'Sep', TendersWon: 2780, TendersLost: 3908 },
  { name: 'Oct', TendersWon: 1890, TendersLost: 4800 },
  { name: 'Nov', TendersWon: 2390, TendersLost: 3800 },
  { name: 'Dec', TendersWon: 3490, TendersLost: 4300 }
]

const TenderChart: React.FC = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Tenders</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TendersWon" fill="#F97316" />
            <Bar dataKey="TendersLost" fill="#162D3A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TenderChart
