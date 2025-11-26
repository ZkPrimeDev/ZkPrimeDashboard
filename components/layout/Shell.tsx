"use client"

import React from 'react'
import Sidebar from '../layout/Sidebar'
import Topbar from '../layout/Topbar'

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
