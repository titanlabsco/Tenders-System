'use client'

import AllSuppliers from '@/src/components/dashboard/AllSuppliers'
import StatsSuppliers from '@/src/components/dashboard/StatsSuppliers'
import Header from '@/src/layouts/dashboard/Header-Dashboard'
import Sidebar from '@/src/layouts/dashboard/Sidebar-Dashboard'
import { usePathname } from 'next/navigation'

export default function SuppliersPage(): JSX.Element {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">
          <StatsSuppliers />
        </div>
        <div className="flex flex-col">
          <AllSuppliers />
        </div>
      </div>
    </div>
  )
}
