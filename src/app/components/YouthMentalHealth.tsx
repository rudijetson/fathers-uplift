"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Shield, Users } from 'lucide-react'

const impactAreas = [
  {
    icon: Brain,
    title: "Mental Health Support",
    description: "Offering counseling and coaching to fathers, addressing their mental health needs and equipping them with tools for emotional regulation."
  },
  {
    icon: Heart,
    title: "Emotional Regulation",
    description: "Helping fathers develop strong emotional regulation skills, which in turn helps children develop these crucial abilities."
  },
  {
    icon: Shield,
    title: "Protective Factors",
    description: "Creating protective factors for children by fostering healthier family dynamics and more involved fatherhood."
  },
  {
    icon: Users,
    title: "Family-Wide Impact",
    description: "Supporting fathers benefits the entire family, including mothers and other relatives, creating a network of natural support."
  }
]

const YouthMentalHealth: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-fathers-blue">
          Connection to Youth Mental Health
        </h2>
        
        <Card className="mb-12 bg-fathers-blue text-white">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              Fathers&apos; UpLift offers mental health counseling, coaching, advocacy, and resource support to help fathers overcome barriers that hinder their engagement in their children&apos;s lives. By empowering fathers to focus on their own healing while providing guidance on how to be more present and involved in family life, the program fosters healthier family dynamics that create protective factors for children.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {impactAreas.map((item, index) => (
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

        <Card className="bg-fathers-blue text-white">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              Research shows that when parents possess strong emotional regulation skills, children are more likely to develop those skills as well, which help buffer the impact of stress. Supporting fathers ultimately benefits the entire family—including mothers and other relatives—creating a network of natural support that significantly enhances the emotional and mental well-being of children.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default YouthMentalHealth;

