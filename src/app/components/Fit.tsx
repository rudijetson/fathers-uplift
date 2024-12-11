"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Users, Briefcase, UserPlus } from 'lucide-react'

const considerations = [
  {
    icon: School,
    title: "Academic Partnership",
    description: "Secure partnership with a School of Social Work (Mount Saint Joseph University, University of Cincinnati, or Xavier University) to implement the fellowship model."
  },
  {
    icon: Users,
    title: "Community Partnerships",
    description: "Establish strong partnerships with local organizations where men are already receiving support (barbershops, HCJFS, court system, SVDP, etc.) for successful recruitment."
  },
  {
    icon: Briefcase,
    title: "Collaboration",
    description: "Partner with existing holistic parent-oriented groups like Queens Village, Every Mother&apos;s Advocate, Fatherhood Collaborative, Talbert House & DAD Initiative for local success."
  }
]

const staffing = [
  "Admin",
  "Ambassador (2 positions)",
  "Coach",
  "Coaching Manager",
  "Clinical Manager",
  "Fellow (3 positions)"
]

const CincinnatiFit: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fathers-blue">
          Cincinnati Local Fit and Considerations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {considerations.map((item, index) => (
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

        <Card className="mb-12 bg-fathers-blue/5 border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-fathers-blue">
              <UserPlus className="mr-2 h-6 w-6 text-fathers-orange" />
              Local Staffing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {staffing.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-fathers-orange/10 rounded-lg p-4 text-fathers-blue font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {position}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-fathers-blue text-white">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              Fathers&apos; UpLift&apos;s success in Cincinnati will depend on establishing strong local partnerships and effectively integrating into the community. By leveraging existing networks and collaborating with established organizations, Fathers&apos; UpLift can create a robust support system for fathers in the area, ultimately contributing to improved family dynamics and youth mental health outcomes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CincinnatiFit;

