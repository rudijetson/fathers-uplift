"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle } from 'lucide-react'

const positiveIndicators = [
  "2023 Annual Report highlights measurable improvements in mental health, family reunification, and child support compliance for fathers served.",
  "Year-over-year increases in enrollment, engagement, and demand from both the community and larger systems of care (e.g., justice system, public health, economic development) in Boston site.",
  "Strong collaboration and contracts with local & state government agencies, mental health providers, community organizations, jails, and family courts.",
  "Offers a mix of service delivery modes: in-person drop-in, tele-health, call/text support, and community-based groups creating a holistic and innovative support system for fathers.",
  "Strengthens family culture by helping fathers heal from a history of broken relationships, develop emotional competency, increase self-awareness, and develop positive parenting skills.",
  "Mental health is a growing concern in Cincinnati. Fathers&apos; UpLift integrates culturally relevant mental health care into their programming, making it more accessible to fathers who may not otherwise seek or receive this support. Their focus on mental wellness would complement existing fatherhood services in the city.",
  "Diverse revenue streams: insurance reimbursement, government contracts, fee-for-service training, and philanthropy (with fee-for-service expanding as insurance reimbursement is established)."
]

const riskFactors = [
  "Limited financial runway; requires more philanthropic seed capital to launch effectively in new locations like Ohio.",
  "High demand from cities and states for replication, but no funder has provided the startup capital needed for a wholly owned model outside Boston, so the program has only been able to provide training to affiliate organizations in Florida and Tennessee; no full-scale replication outside of Boston yet.",
  "High demand may outpace their small team&apos;s capacity (there&apos;s a waitlist for services in Boston).",
  "The board has concerns about the upfront expense of replicating with a \"brick and mortar\" model and has encouraged exploring an affiliate model or Fathers&apos; UpLift Fellowship expansion to reduce costs and increase capacity.",
  "May experience a slower start in Ohio due to the need to secure state-specific licensing and align with local regulations before full program implementation.",
  "Need for physical space that meets state code requirements for insurance reimbursement."
]

export const IndicatorsAndRisks: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-fathers-blue">
          Positive Indicators & Risk Factors
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="h-full bg-fathers-blue/5 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-fathers-blue">
                <CheckCircle className="mr-2 h-6 w-6 text-fathers-orange" />
                Positive Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {positiveIndicators.map((indicator, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="mr-2 h-5 w-5 text-fathers-orange flex-shrink-0 mt-1" />
                    <span className="text-fathers-blue/80">{indicator}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full bg-fathers-blue/5 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-fathers-blue">
                <AlertTriangle className="mr-2 h-6 w-6 text-fathers-orange" />
                Risk Factors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AlertTriangle className="mr-2 h-5 w-5 text-fathers-orange flex-shrink-0 mt-1" />
                    <span className="text-fathers-blue/80">{risk}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default IndicatorsAndRisks;
