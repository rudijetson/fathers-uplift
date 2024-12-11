'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sections = [
  { id: 'executive', label: 'Executive Summary' },
  { id: 'programs', label: 'Healthcare Programs' },
  { id: 'impact', label: 'Impact & Growth' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'demographics', label: 'Demographics' },
  { id: 'expansion', label: 'Expansion Plans' },
  { id: 'financial', label: 'Financial Overview' },
]

export function SideNav() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-10% 0px -80% 0px'
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hidden lg:block fixed left-0 top-0 h-screen w-[240px] bg-white border-r border-gray-200">
      <Link href="/" className="block px-6 py-6 border-b border-gray-200">
        <Image 
          src="/FuturoHealth.png"
          alt="Futuro Health Logo"
          width={240}
          height={120}
          className="w-auto h-16"
        />
      </Link>

      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                     ${activeSection === section.id 
                       ? 'bg-blue-50 text-blue-600 font-medium' 
                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                     }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  )
} 