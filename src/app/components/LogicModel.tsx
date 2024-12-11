"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface CategoryType {
  title: string
  items: string[]
}

interface LogicModelType {
  inputs: {
    human: CategoryType
    financial: CategoryType
    material: CategoryType
    intellectual: CategoryType
  }
  activities: {
    clinical: CategoryType
    coaching: CategoryType
    professional: CategoryType
    community: CategoryType
    organizational: CategoryType
  }
  outputs: {
    direct: CategoryType
    professional: CategoryType
    community: CategoryType
    organizational: CategoryType
  }
  outcomes: {
    shortTerm: CategoryType
    intermediateTerm: CategoryType
    longTerm: CategoryType
  }
}

const logicModel: LogicModelType = {
  inputs: {
    human: {
      title: "Human Resources",
      items: [
        "Licensed therapists",
        "Professional coaches",
        "Program coordinators",
        "Administrative staff",
        "USTR Fellows",
        "Ambassadors (former clients)",
        "Volunteer mentors",
        "Board members"
      ]
    },
    financial: {
      title: "Financial Resources",
      items: [
        "Government grants",
        "Foundation funding",
        "Individual donations",
        "Fee-for-service revenue",
        "In-kind donations"
      ]
    },
    material: {
      title: "Material Resources",
      items: [
        "Clinical facilities",
        "Office space",
        "Technology infrastructure",
        "Program materials",
        "'Bags for Dads' supplies"
      ]
    },
    intellectual: {
      title: "Intellectual Resources",
      items: [
        "Evidence-based curricula",
        "Training materials",
        "Clinical protocols",
        "Evaluation tools",
        "Cultural competency framework"
      ]
    }
  },
  
  activities: {
    clinical: {
      title: "Clinical Services",
      items: [
        "Individual therapy sessions",
        "Family therapy",
        "Group therapy",
        "Mental health assessments",
        "Crisis intervention"
      ]
    },
    coaching: {
      title: "Coaching Services",
      items: [
        "One-on-one coaching",
        "Group coaching courses",
        "Pre-Father Care program",
        "Wellness & Recovery program",
        "Managing Emotions program",
        "HomeComing (reentry) support"
      ]
    },
    professional: {
      title: "Professional Development",
      items: [
        "USTR Fellowship training",
        "Clinical supervision",
        "Mentorship programs",
        "Licensure preparation",
        "Professional networking events"
      ]
    },
    community: {
      title: "Community Engagement",
      items: [
        "Ambassador program",
        "Peer support groups",
        "Community outreach",
        "Social media engagement",
        "Public education"
      ]
    },
    organizational: {
      title: "Organizational Development",
      items: [
        "Affiliate partner training",
        "Curriculum dissemination",
        "Technical assistance",
        "Quality assurance",
        "Program evaluation"
      ]
    }
  },

  outputs: {
    direct: {
      title: "Direct Service",
      items: [
        "Number of therapy sessions conducted",
        "Number of coaching encounters",
        "Number of groups facilitated",
        "Number of clients served",
        "Number of Bags for Dads distributed"
      ]
    },
    professional: {
      title: "Professional Development",
      items: [
        "Number of Fellows trained",
        "Hours of clinical supervision provided",
        "Number of mentorship matches",
        "Licensure prep sessions conducted",
        "Professional development workshops delivered"
      ]
    },
    community: {
      title: "Community Impact",
      items: [
        "Number of community events",
        "Social media reach",
        "Number of Ambassador engagements",
        "Public education sessions",
        "Partnership meetings"
      ]
    },
    organizational: {
      title: "Organizational Growth",
      items: [
        "Number of affiliate partners trained",
        "Organizations implementing curricula",
        "Technical assistance hours provided",
        "Program evaluations completed",
        "Quality improvement initiatives"
      ]
    }
  },

  outcomes: {
    shortTerm: {
      title: "Short-term (0-1 year)",
      items: [
        "Improved mental health metrics",
        "Enhanced father-child relationships",
        "Better quality of life for clients",
        "Increased parenting confidence",
        "Reduced barriers to services",
        "Higher client engagement rates"
      ]
    },
    intermediateTerm: {
      title: "Intermediate (1-3 years)",
      items: [
        "Sustained behavioral changes",
        "Improved family stability",
        "Enhanced community support",
        "Increased service accessibility",
        "More BIPOC therapists licensed",
        "Expanded organizational reach"
      ]
    },
    longTerm: {
      title: "Long-term (3+ years)",
      items: [
        "Reduced father absence rates",
        "Transformed mental health landscape",
        "Generational impact on families",
        "Systemic practice changes",
        "Cultural shift in father engagement",
        "Sustainable organizational model"
      ]
    }
  }
}

export const LogicModel: React.FC = () => {
  const renderCategory = (category: CategoryType, index: number) => (
    <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold text-fathers-blue mb-4">{category.title}</h4>
        <ul className="space-y-2">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group">
              <div className="w-2 h-2 bg-fathers-orange rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
              <span className="text-slate-700 group-hover:text-fathers-blue transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fathers-blue mb-4">Logic Model</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive framework showing how our resources and activities lead to meaningful outcomes
          </p>
        </div>

        {/* Inputs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-fathers-blue mb-8">Inputs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(logicModel.inputs).map((category, index) => renderCategory(category, index))}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-fathers-blue mb-8">Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(logicModel.activities).map((category, index) => renderCategory(category, index))}
          </div>
        </motion.div>

        {/* Outputs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-fathers-blue mb-8">Outputs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(logicModel.outputs).map((category, index) => renderCategory(category, index))}
          </div>
        </motion.div>

        {/* Outcomes Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-fathers-blue mb-8">Outcomes</h3>
          <div className="grid gap-6">
            {Object.values(logicModel.outcomes).map((category, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-fathers-blue mb-4">{category.title}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-slate-700 group-hover:text-green-600 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LogicModel 