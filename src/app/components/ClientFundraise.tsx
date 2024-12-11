'use client'

import dynamic from 'next/dynamic'

const Fundraise = dynamic(() => import('./Fundraise'), {
  ssr: false
})

export default function ClientFundraise() {
  return <Fundraise />
} 