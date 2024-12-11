"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/app/components/ui/card"

const stats = [
  { label: "Fathers and family members served since 2011", value: "14,000+" },
  { label: "Fathers reporting improved relationships with their children", value: "89%" },
  { label: "Fathers presently engaged in their children's lives", value: "87%" },
  { label: "Fathers reporting improved quality of life", value: "93%" },
  { label: "Social workers and mental health professionals trained", value: "3,700+" }
]

export const SocialImpact: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-fathers-blue/5 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-fathers-blue">Social Impact and Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="text-4xl font-bold text-fathers-orange mb-4"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="bg-fathers-blue text-white">
          <CardContent className="p-8">
            <p className="text-xl text-center">
              91.5% of participating fathers report a hopeful outlook for their future after receiving services.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default SocialImpact;

