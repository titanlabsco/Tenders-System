'use client'

import AllContracts from '@/src/components/dashboard/AllContracts'
import PopularContracts from '@/src/components/dashboard/PopularContracts'
import StatsContracts from '@/src/components/dashboard/StatsContracts'
import Header from '@/src/layouts/dashboard/Header-Dashboard'
import Sidebar from '@/src/layouts/dashboard/Sidebar-Dashboard'
import { usePathname } from 'next/navigation'

export default function ContractsPage(): JSX.Element {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <AllContracts />
            </div>

            <div className="w-[24rem] flex flex-col gap-6">
              <StatsContracts />
              <PopularContracts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
