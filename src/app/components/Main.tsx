'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organizational Profiles for Selection Cycle 6
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select an organization to view their comprehensive report and impact metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fathers Uplift Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/fathers-uplift">
              <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 aspect-[16/9]">
                <Image
                  src="/fathers-uplift-logo.png"
                  alt="Fathers Uplift"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
                {/* ... overlay content ... */}
              </div>
            </Link>
          </motion.div>

          {/* Futuro Health Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/futuro">
              <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 aspect-[16/9]">
                <Image
                  src="/FuturoHealth.png"
                  alt="Futuro Health"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
                {/* ... overlay content ... */}
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
