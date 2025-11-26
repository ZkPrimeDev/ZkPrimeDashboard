"use client"

import React from 'react'

export default function SimpleAreaChart({ values = [10, 20, 15, 30, 25] }: { values?: number[] }) {
  const max = Math.max(...values)
  const points = values.map((v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-40">
      <polyline fill="none" stroke="#60a5fa" strokeWidth={2} points={points} />
      <polyline fill="rgba(96,165,250,0.15)" stroke="none" points={`${points} 100,100 0,100`} />
    </svg>
  )
}
