"use client"

import React from 'react'
import { Card, CardContent } from "@/app/components/ui/card"

const executiveSummary = {
  mission: "Fathers' UpLift is a pioneering organization dedicated to helping fathers overcome obstacles that prevent them from being present in their children's lives.",
  
  impactHighlights: {
    year: "2023",
    metrics: [
      { label: "Fathers & Families Served", value: "1,400+" },
      { label: "Improved Child Relationships", value: "93%" },
      { label: "Individual Encounters", value: "4,000" },
      { label: "Affiliate Organizations", value: "18+" }
    ]
  },

  services: {
    direct: {
      title: "Direct Service Programs",
      items: [
        "Mental health counseling",
        "Coaching and advocacy services",
        "Pre-release support",
        "Community-based reentry support"
      ]
    },
    allyship: {
      title: "Mother and Father Allyship",
      items: [
        "Father-mother partnership building",
        "Relationship enhancement",
        "Supportive family environments",
        "Co-parenting guidance"
      ]
    },
    workforce: {
      title: "Workforce Development",
      items: [
        "Social work professional training",
        "Licensure preparation",
        "Mentorship opportunities",
        "BIPOC Fellowship Program"
      ]
    }
  },

  historicalImpact: {
    since: "2011",
    totalServed: "15,500+",
    keyAreas: [
      "Father and family support",
      "Resource provision (food, housing, employment)",
      "Mental health services",
      "Family strengthening programs"
    ]
  }
}

export const ExecutiveSummary = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-fathers-blue mb-12">Executive Summary</h2>
        
        <div className="grid gap-8">
          {/* Mission */}
          <Card>
            <CardContent className="p-6">
              <p className="text-xl text-fathers-blue leading-relaxed">{executiveSummary.mission}</p>
            </CardContent>
          </Card>

          {/* 2023 Impact Highlights */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-fathers-blue mb-6">
                {executiveSummary.impactHighlights.year} Impact Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {executiveSummary.impactHighlights.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-fathers-blue mb-2">{metric.value}</p>
                    <p className="text-sm text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(executiveSummary.services).map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-fathers-blue mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-fathers-orange rounded-full"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Historical Impact */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-fathers-blue mb-2">Historical Impact</h3>
                  <p className="text-slate-600">Since {executiveSummary.historicalImpact.since}</p>
                  <p className="text-3xl font-bold text-fathers-blue mt-2">
                    {executiveSummary.historicalImpact.totalServed}
                  </p>
                  <p className="text-sm text-slate-600">Fathers & Family Members Served</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-semibold text-fathers-blue/80 mb-3">Key Focus Areas</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {executiveSummary.historicalImpact.keyAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-fathers-orange rounded-full"></div>
                        <span className="text-slate-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ExecutiveSummary

