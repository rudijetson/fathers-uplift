"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Briefcase, Users, Scale, DollarSign } from 'lucide-react'

const differentiators = [
  {
    icon: Briefcase,
    title: "Workforce Development",
    description: "The USTR Fellowship program accepts 14 students each year from graduate schools at accredited colleges & universities in the United States."
  },
  {
    icon: Users,
    title: "Multigenerational Impact",
    description: "Fathers&apos; UpLift serves as a mediator and partner between fathers and their families to help mend broken relationships and assist with getting fathers access to resources to be present and engaged in their children&apos;s lives."
  },
  {
    icon: Scale,
    title: "System Change",
    description: "Fathers&apos; UpLift advocates for policy changes and raises awareness about the importance of fatherhood, challenging societal norms and stereotypes."
  },
  {
    icon: DollarSign,
    title: "Diverse Funding",
    description: "In addition to traditional philanthropy, Fathers&apos; UpLift can access public funding and fee for service (insurance reimbursement for group and individual sessions)."
  }
]

export const Differentiators: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fathers-blue">Our Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <item.icon className="h-6 w-6 text-fathers-orange mr-4" />
                  <CardTitle className="text-xl font-semibold text-fathers-blue">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-fathers-blue/80">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators;

