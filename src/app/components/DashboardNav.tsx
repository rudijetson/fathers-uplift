"use client"

import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'executive', label: 'Executive Summary' },
  { id: 'theory', label: 'Theory of Change' },
  { id: 'logic', label: 'Logic Model' },
  { id: 'program', label: 'Program Model' },
  { id: 'impact', label: 'Impact & Implementation' },
  { id: 'focus', label: 'Focus Areas' },
  { id: 'evaluation', label: 'Evaluation & Planning' },
  { id: 'financial', label: 'Financial Overview' },
]

export function DashboardNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 relative">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide relative">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 
                       whitespace-nowrap rounded-lg hover:bg-gray-100 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-fathers-blue/20"
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 pointer-events-none flex items-center">
          <div className="bg-gradient-to-l from-white via-white/95 to-transparent px-4 h-full flex items-center">
            <motion.div
              animate={{
                x: [0, 4, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
} 