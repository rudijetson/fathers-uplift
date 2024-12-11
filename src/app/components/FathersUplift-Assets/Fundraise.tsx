"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { motion } from "framer-motion"

interface DonationTier {
  amount: number
  title: string
  description: string
  impact: string[]
}

const donationTiers: DonationTier[] = [
  {
    amount: 50,
    title: "Friend",
    description: "Help a father attend counseling sessions",
    impact: [
      "One therapy session for a father",
      "Basic support materials",
      "Access to online resources"
    ]
  },
  {
    amount: 100,
    title: "Advocate",
    description: "Support a father's journey to reconnection",
    impact: [
      "Two therapy sessions",
      "Parenting workshop materials",
      "Transportation assistance",
      "Care package for father"
    ]
  },
  {
    amount: 250,
    title: "Champion",
    description: "Provide comprehensive support for a father",
    impact: [
      "Five therapy sessions",
      "Complete program materials",
      "Transportation assistance",
      "Care package for father and child",
      "Emergency support fund access"
    ]
  }
]

export const Fundraise: React.FC = () => {
  const [isClient, setIsClient] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number>(0)
  const [customAmount, setCustomAmount] = useState<string>("")

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading state
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-fathers-blue mb-4">Support Our Mission</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Your contribution helps fathers overcome barriers and rebuild relationships with their children
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="will-change-transform"
            >
              <Card 
                className={`cursor-pointer transition-all hover:-translate-y-1 ${
                  selectedAmount === tier.amount 
                    ? 'ring-2 ring-fathers-blue shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => {
                  setSelectedAmount(tier.amount)
                  setCustomAmount("")
                }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-fathers-blue">{tier.title}</h3>
                    <p className="text-3xl font-bold text-fathers-blue mt-2">${tier.amount}</p>
                    <p className="text-slate-600 mt-2">{tier.description}</p>
                  </div>
                  <div className="space-y-3">
                    {tier.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-fathers-orange rounded-full mt-2"></div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-md mx-auto mb-12 will-change-transform"
        >
          <Card className={`${
            selectedAmount === 0 && customAmount 
              ? 'ring-2 ring-fathers-blue shadow-lg' 
              : ''
          }`}>
            <CardContent className="p-6">
              <label className="block text-center mb-4">
                <span className="text-lg font-semibold text-fathers-blue">Custom Amount</span>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fathers-blue"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </label>
            </CardContent>
          </Card>
        </motion.div>

        {/* Donate Button */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center will-change-transform"
        >
          <button
            className={`
              px-8 py-4 rounded-lg text-lg font-semibold
              ${(selectedAmount > 0 || customAmount)
                ? 'bg-fathers-blue text-white hover:bg-fathers-blue/90'
                : 'bg-slate-200 text-slate-500 cursor-not-allowed'
              }
              transition-colors
            `}
            disabled={!(selectedAmount > 0 || customAmount)}
            onClick={() => {
              // Handle donation processing
              const amount = selectedAmount || Number(customAmount)
              console.log(`Processing donation of $${amount}`)
            }}
          >
            Donate ${selectedAmount || customAmount || '0'}
          </button>
          <p className="mt-4 text-sm text-slate-500">
            All donations are tax-deductible. You will receive a receipt for your records.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Fundraise
