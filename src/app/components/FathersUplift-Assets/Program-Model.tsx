"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const programs = [
  {
    id: "counseling",
    title: "Mental Health Counseling",
    subtitle: "Clinical Support & Therapy",
    description: "Licensed social workers provide culturally responsive individual, group, and family therapy sessions.",
    details: "Treatment focuses on understanding the connection between emotions, thoughts, and behavior.",
    icon: "🧠",
    color: "from-fathers-blue/20 to-fathers-navy/30"
  },
  {
    id: "coaching",
    title: "UpLift Coaching",
    subtitle: "Personal Development",
    description: "Professional coaches offer personal mentorship and guidance on life challenges.",
    details: "Support for job searches, custody challenges, co-parenting, and housing stability.",
    icon: "🎯",
    color: "from-fathers-orange/20 to-fathers-orange-light/30"
  },
  {
    id: "homecoming",
    title: "Fathers&apos; Homecoming",
    subtitle: "Reintegration Services",
    description: "Supporting incarcerated fathers 3 months before release with comprehensive resources.",
    details: "Includes therapy, coaching, courses, and connections to critical community resources.",
    icon: "🏡",
    color: "from-fathers-blue/20 to-fathers-navy/30"
  },
  {
    id: "ambassador",
    title: "Ambassador Program",
    subtitle: "Peer Support Network",
    description: "Trained program graduates providing weekly support and mentorship.",
    details: "Connecting fathers with resources and guidance rooted in lived experience.",
    icon: "🤝",
    color: "from-fathers-orange/20 to-fathers-orange-light/30"
  },
  {
    id: "institute",
    title: "Male Engagement Institute",
    subtitle: "Professional Training",
    description: "Training programs for mental health agencies and social work institutions.",
    details: "Trained 1600+ professionals in father-focused support methodologies in 2022.",
    icon: "🏫",
    color: "from-fathers-blue/20 to-fathers-navy/30"
  },
  {
    id: "fellowship",
    title: "USTR Fellowship",
    subtitle: "Career Development",
    description: "Supporting BIPOC therapists with $15,000 stipends and career resources.",
    details: "Includes licensure prep, mentorship, and employment opportunities.",
    icon: "🎓",
    color: "from-fathers-orange/20 to-fathers-orange-light/30"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export const ProgramModel: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-fathers-blue mb-6">
            Our Program Model
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive approach to supporting fathers through their journey
            of personal growth and family engagement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} 
                    flex items-center justify-center text-3xl mb-4 shadow-sm`}>
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-fathers-blue">
                    {program.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    {program.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-700 mb-3">
                    {program.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    {program.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramModel;

