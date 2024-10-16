'use client'

import Header from '@/src/layouts/dashboard/Header-Dashboard'
import Sidebar from '@/src/layouts/dashboard/Sidebar-Dashboard'
import GraphicTenders from '@/src/components/dashboard/GraphicTender'
import AllTenders from '@/src/components/dashboard/AllTenders'
import { usePathname } from 'next/navigation'

export default function TendersPage(): JSX.Element {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-row gap-4 w-full">
          <GraphicTenders />
        </div>
        <div className="flex flex-col">
          <AllTenders />
        </div>
      </div>
    </div>
  )
}
