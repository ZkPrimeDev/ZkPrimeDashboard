import React from 'react'

export default function Card({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-white border rounded p-4 shadow-sm ${className}`}>
      {title && <h3 className="text-sm font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </section>
  )
}
