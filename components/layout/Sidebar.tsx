"use client"

import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-6">
        <img src="/logo-zkprime.svg" alt="ZKPRIME" className="h-8" />
      </div>
      <nav className="space-y-2">
        <Link href="/" className="block py-2 px-2 rounded hover:bg-gray-100">Overview</Link>
        <Link href="/projects" className="block py-2 px-2 rounded hover:bg-gray-100">Projects</Link>
        <Link href="/docs" className="block py-2 px-2 rounded hover:bg-gray-100">Docs</Link>
      </nav>
    </aside>
  )
}
