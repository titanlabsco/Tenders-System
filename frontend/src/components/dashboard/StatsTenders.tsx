import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Active', value: 750 },
  { name: 'Inactive', value: 620 }
]

const COLORS = ['#162D3A', '#F97316']

interface StatsTendersProps {
  className?: string
}

const StatsTenders: React.FC<StatsTendersProps> = ({ className }) => (
  <div className={`w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col ${className}`}>
    <strong className="text-gray-700 font-medium">Statistics Tenders</strong>
    <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="45%" labelLine={false} outerRadius={105} dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default StatsTenders
