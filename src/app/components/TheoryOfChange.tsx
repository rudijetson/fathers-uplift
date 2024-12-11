"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface PathwayType {
  title: string
  interventions: string[]
  outcomes: string[]
}

interface IndicatorType {
  title: string
  metrics: string[]
}

interface TheoryOfChangeType {
  ultimateGoal: {
    title: string
    description: string
  }
  problemStatement: {
    primary: string[]
    contributing: string[]
  }
  pathways: {
    direct: PathwayType
    systemic: PathwayType
    community: PathwayType
  }
  indicators: {
    shortTerm: IndicatorType
    mediumTerm: IndicatorType
    longTerm: IndicatorType
  }
}

const theoryOfChange: TheoryOfChangeType = {
  ultimateGoal: {
    title: "Ultimate Impact Goal",
    description: "Transform the statistic of 5 million U.S. fathers who haven't seen their children in the last month by creating systemic change in how mental health services are delivered to BIPOC fathers and families."
  },

  problemStatement: {
    primary: [
      "Father absence disproportionately affects BIPOC communities",
      "Mental health stigma prevents men of color from seeking help",
      "Lack of culturally competent mental health providers",
      "Systemic barriers to father engagement"
    ],
    contributing: [
      "Historical trauma and systemic racism",
      "Economic and social barriers",
      "Limited access to culturally responsive services",
      "BIPOC therapists have lower licensure pass rates (40% vs 80%)"
    ]
  },

  pathways: {
    direct: {
      title: "Direct Service Pathway",
      interventions: [
        "Clinical therapy (individual, family, group)",
        "Wraparound coaching services",
        "Pre-Father Care programs",
        "Youth enrichment services"
      ],
      outcomes: [
        "Improved mental health",
        "Enhanced father-child relationships",
        "Better quality of life",
        "Increased parental engagement"
      ]
    },
    systemic: {
      title: "Systemic Change Pathway",
      interventions: [
        "USTR Fellowship program",
        "Affiliate partner training",
        "Evidence-based curriculum dissemination",
        "Professional development for BIPOC therapists"
      ],
      outcomes: [
        "Increased culturally competent therapists",
        "Expanded access to mental health services",
        "Reduced stigma around mental health",
        "Institutional adoption of practices"
      ]
    },
    community: {
      title: "Community Transformation Pathway",
      interventions: [
        "Ambassador program",
        "Peer support networks",
        "Community engagement initiatives",
        "Public education and advocacy"
      ],
      outcomes: [
        "Strengthened community support",
        "Changed narratives around fatherhood",
        "Reduced stigma",
        "Increased community resilience"
      ]
    }
  },

  indicators: {
    shortTerm: {
      title: "Short-term (1-2 years)",
      metrics: [
        "Client engagement rates",
        "Mental health improvements",
        "Enhanced relationships",
        "BIPOC therapists trained"
      ]
    },
    mediumTerm: {
      title: "Medium-term (2-5 years)",
      metrics: [
        "Expanded geographic reach",
        "Increased partnerships",
        "Community health indicators",
        "Sustained behavior changes"
      ]
    },
    longTerm: {
      title: "Long-term (5+ years)",
      metrics: [
        "Reduced father absence",
        "Transformed mental health landscape",
        "Generational family impact",
        "Systemic policy changes"
      ]
    }
  }
}

export const TheoryOfChange: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fathers-blue mb-4">Theory of Change</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A comprehensive framework for transforming father engagement and mental health services</p>
        </div>
        
        <div className="grid gap-12">
          {/* Ultimate Goal - Hero Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-fathers-blue text-white overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-fathers-blue/50 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4">{theoryOfChange.ultimateGoal.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{theoryOfChange.ultimateGoal.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Statement - Modern Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {(["primary", "contributing"] as const).map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-fathers-blue mb-6">
                      {type === "primary" ? "Primary Issues" : "Contributing Factors"}
                    </h3>
                    <ul className="space-y-4">
                      {theoryOfChange.problemStatement[type].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                          <div className="w-2 h-2 bg-fathers-orange rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                          <span className="text-slate-700 group-hover:text-fathers-blue transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pathways - Interactive Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(theoryOfChange.pathways).map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-fathers-blue mb-6 pb-4 border-b">
                      {pathway.title}
                    </h3>
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-medium text-fathers-blue/80 mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-fathers-orange rounded-full"></div>
                          Interventions
                        </h4>
                        <ul className="space-y-3 pl-4">
                          {pathway.interventions.map((item, idx) => (
                            <li key={idx} className="text-slate-700 hover:text-fathers-blue transition-colors list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-fathers-blue/80 mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-3 pl-4">
                          {pathway.outcomes.map((item, idx) => (
                            <li key={idx} className="text-slate-700 hover:text-green-600 transition-colors list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Indicators Timeline - Modern Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-fathers-blue mb-8 text-center">
                  Measurable Indicators
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {Object.values(theoryOfChange.indicators).map((timeframe, index) => (
                    <div key={index} className="relative">
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-fathers-orange via-fathers-blue to-green-500 rounded-full"></div>
                      <div className="pl-6">
                        <h4 className="font-semibold text-fathers-blue mb-4">{timeframe.title}</h4>
                        <ul className="space-y-3">
                          {timeframe.metrics.map((metric, idx) => (
                            <li key={idx} className="group flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                              <span className="text-slate-700 group-hover:text-fathers-blue transition-colors">
                                {metric}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TheoryOfChange 