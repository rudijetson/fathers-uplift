'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { BookOpen, Users, Globe } from 'lucide-react'

const programs = [
  "Medical Assistant",
  "Patient Care Representative",
  "Emergency Room Technician",
  "Pharmacy Technician",
  "Phlebotomy",
  "Peer Support Specialist"
]

const supportServices = [
  "Success coaching and career guidance",
  "Education financing",
  "Targeted education-to-work pathways",
  "Spanish to English learning programs",
  "Jump Start courses for online study preparation"
]

const metrics = [
  {
    title: "Lives Transformed",
    value: "9,000+",
    description: "Individuals pursuing healthcare careers"
  },
  {
    title: "Ethnic Diversity",
    value: "85%",
    description: "Ethnically diverse student body"
  },
  {
    title: "Language Diversity",
    value: "52%",
    description: "Linguistically diverse students"
  },
  {
    title: "Average Age",
    value: "31",
    description: "Years old"
  }
]

export default function Executive() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Overview and Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Futuro Health is improving the health and wealth of communities by building the nation&apos;s largest network of allied healthcare workers. Launched in 2020 with $130 million in initial funding, we&apos;ve expanded nationwide with an additional $100 million commitment in 2023.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Programs and Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Healthcare Education Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                    <span>{program}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Support Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {supportServices.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recent Developments */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              Nationwide Expansion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              In December 2023, Futuro Health received a new $100 million commitment from Kaiser Permanente to expand operations nationwide.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full" />
                <span>Initial presence in California</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full" />
                <span>Expansion to Colorado, Oregon, and Washington</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full" />
                <span>Future plans to expand to eastern United States</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
