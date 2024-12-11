"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/app/components/ui/card"

export const Equity: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-fathers-blue mb-6">
            Commitment to Racial Equity
          </h2>
        </motion.div>

        <Card className="bg-fathers-blue/5 border-none">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg">
              <p className="text-fathers-blue/80 leading-relaxed">
                Fathers&apos; UpLift is committed to advancing racial equity by providing 
                tailored mental health services for Black and Brown men and fathers, 
                addressing the unique trauma and systemic barriers faced by these communities.
              </p>
              
              <p className="text-fathers-blue/80 leading-relaxed">
                With a leadership and staff that reflect the cultural context of the 
                communities served, Fathers&apos; UpLift ensures low-barrier access to 
                mental health and coaching services for those who may not typically 
                seek traditional support.
              </p>

              <p className="text-fathers-blue/80 leading-relaxed">
                Fathers&apos; UpLift partners with social work graduate students, 
                providing them with paid practicum experience and support to help them 
                pass their licensing exams. This not only helps the students gain 
                hands-on experience in an equitable way but also strengthens 
                Fathers&apos; UpLift&apos;s capacity to deliver culturally relevant 
                mental health services to fathers in need by increasing the pipeline 
                of trained professionals.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Equity;
