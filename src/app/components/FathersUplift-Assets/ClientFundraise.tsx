'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Fundraise = dynamic(() => import('./Fundraise'), {
  ssr: false,
  loading: () => <div className="min-h-[200px] flex items-center justify-center">Loading...</div>
})

export default function ClientFundraise() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fundraise />
      </Suspense>
    </div>
  )
} 