'use client'

import Header from '@/src/layouts/dashboard/Header-Dashboard'
import Sidebar from '@/src/layouts/dashboard/Sidebar-Dashboard'
import DashboardStats from '@/src/components/dashboard/DashboardStats'
import PopularContracts from '@/src/components/dashboard/PopularContracts'
import { usePathname } from 'next/navigation'
import StatsTenders from '@/src/components/dashboard/StatsTenders'
import RecentTenders from '@/src/components/dashboard/RecentTenders'
import GraphicTender from '@/src/components/dashboard/GraphicTender'

export default function Dashboard() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex flex-col gap-6">
          <DashboardStats />

          <div className="flex gap-6">
            <div className="flex-1">
              <RecentTenders className="mb-4" />
              <GraphicTender />
            </div>

            <div className="w-[20rem] mb-4">
              <StatsTenders className="mb-4" />
              <PopularContracts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
