"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import revenueData from '@/app/data/revenue.json'
import localOperationsData from '@/app/data/local_operations.json'
import fidelityAndGrowthData from '@/app/data/fidelity_and_growth.json'
import financialSummaryData from '@/app/data/financial_summary.json'
import beneficiariesData from '@/app/data/beneficiaries.json'
import { Table, X } from 'lucide-react'
import detailedBudget from '@/app/data/detailed_budget.json'

const formatCurrency = (value: string | number) => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(num)
}

const DetailedBudgetModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-4 md:inset-8 bg-white rounded-lg shadow-xl flex flex-col">
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-fathers-blue">Detailed Budget</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-fathers-blue" />
            </button>
          </div>
        </div>
        
        <div className="overflow-auto">
          <div className="min-w-max">
            <table className="w-full">
              <thead className="sticky top-0 bg-fathers-blue z-10">
                <tr>
                  {detailedBudget.headers.map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left font-medium text-white whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.values(detailedBudget.sections).map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    <tr className="bg-fathers-blue/5">
                      <td 
                        colSpan={detailedBudget.headers.length} 
                        className="px-6 py-4 font-semibold text-fathers-blue"
                      >
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row, rowIndex) => (
                      <tr 
                        key={`${sectionIndex}-${rowIndex}`}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex} 
                            className={`px-6 py-4 ${
                              cellIndex === 0 
                                ? "text-fathers-blue font-medium whitespace-nowrap" 
                                : "text-right text-fathers-blue/80"
                            }`}
                          >
                            {cellIndex === 0 ? cell : formatCurrency(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const BRAND_COLORS = {
  primary: '#003057',
  secondary: '#F4B223',
  accent1: '#3B82F6',
  accent2: '#82B1FF',
  accent3: '#B0BEC5',
  background: '#FFFFFF',
  text: '#003057',
  greenLight: '#32CD32',
  axis: '#64748B',
}

const FinancialDashboard: React.FC = () => {
  const [showDetailedBudget, setShowDetailedBudget] = useState(false)

  const revenueStreamData = revenueData.years.map((year, index) => ({
    name: year,
    ...revenueData.categories.reduce((acc, category, catIndex) => {
      acc[category] = revenueData.data[catIndex][index]
      return acc
    }, {} as Record<string, number>),
    Total: revenueData.totals[index]
  }))

  const expensesData = financialSummaryData.years.map((year, index) => ({
    name: year,
    'Total Expenses': financialSummaryData.data[0][index],
    'HQ Allocated Salaries': financialSummaryData.data[2][index],
    'HQ Allocated Benefits': financialSummaryData.data[3][index],
    'Total HQ Allocation': financialSummaryData.data[4][index],
  }))

  const netRevenueData = financialSummaryData.years.map((year, index) => ({
    name: year,
    'Net Revenue': financialSummaryData.data[5][index],
  }))

  return (
    <section className="bg-[#F0F4F8] py-24 px-4 text-[#333333] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A2240]">
            Financial Dashboard
          </h2>
          <button
            onClick={() => setShowDetailedBudget(true)}
            className="flex items-center gap-2 px-4 py-2 bg-fathers-blue text-white rounded-lg hover:bg-fathers-blue/90 transition-colors"
          >
            <Table className="w-4 h-4" />
            View Detailed Budget
          </button>
        </div>

        <div className="overflow-x-auto">
          <Card className="mb-8 bg-white shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#0A2240]">Revenue Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={revenueStreamData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                  <YAxis 
                    tickFormatter={(value) => formatCurrency(value)} 
                    stroke={BRAND_COLORS.axis}
                    tickLine={{ stroke: BRAND_COLORS.axis }}
                    axisLine={{ stroke: BRAND_COLORS.axis }}
                  />
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Legend />
                  {revenueData.categories.map((category, index) => (
                    <Line 
                      key={category}
                      type="monotone"
                      dataKey={category}
                      stroke={category === "Greenlight Fund" ? BRAND_COLORS.greenLight : BRAND_COLORS[`accent${index + 1}` as keyof typeof BRAND_COLORS] || BRAND_COLORS.primary}
                      strokeWidth={category === "Greenlight Fund" ? 3 : 2}
                    />
                  ))}
                  <Line 
                    type="monotone"
                    dataKey="Total"
                    stroke={BRAND_COLORS.secondary}
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#0A2240]">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={expensesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                  <YAxis 
                    tickFormatter={(value) => formatCurrency(value)} 
                    stroke={BRAND_COLORS.axis}
                    tickLine={{ stroke: BRAND_COLORS.axis }}
                    axisLine={{ stroke: BRAND_COLORS.axis }}
                  />
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Legend />
                  <Bar dataKey="Total Expenses" fill={BRAND_COLORS.primary} />
                  <Bar dataKey="HQ Allocated Salaries" fill={BRAND_COLORS.accent1} />
                  <Bar dataKey="HQ Allocated Benefits" fill={BRAND_COLORS.accent2} />
                  <Bar dataKey="Total HQ Allocation" fill={BRAND_COLORS.accent3} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#0A2240]">Local Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={localOperationsData.years.map((year, index) => ({
                    name: year,
                    ...localOperationsData.categories.reduce((acc, category, catIndex) => {
                      acc[category] = localOperationsData.data[catIndex][index]
                      return acc
                    }, {} as Record<string, number>)
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                    <YAxis 
                      tickFormatter={(value) => formatCurrency(value)} 
                      stroke={BRAND_COLORS.axis}
                      tickLine={{ stroke: BRAND_COLORS.axis }}
                      axisLine={{ stroke: BRAND_COLORS.axis }}
                    />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    {localOperationsData.categories.map((category, index) => (
                      <Bar key={category} dataKey={category} fill={BRAND_COLORS[`accent${index + 1}` as keyof typeof BRAND_COLORS] || BRAND_COLORS.primary} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-[#0A2240]">Fidelity & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={fidelityAndGrowthData.years.map((year, index) => ({
                    name: year,
                    ...fidelityAndGrowthData.categories.reduce((acc, category, catIndex) => {
                      acc[category] = fidelityAndGrowthData.data[catIndex][index]
                      return acc
                    }, {} as Record<string, number>)
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                    <YAxis 
                      tickFormatter={(value) => formatCurrency(value)} 
                      stroke={BRAND_COLORS.axis}
                      tickLine={{ stroke: BRAND_COLORS.axis }}
                      axisLine={{ stroke: BRAND_COLORS.axis }}
                    />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    {fidelityAndGrowthData.categories.map((category, index) => (
                      <Bar key={category} dataKey={category} fill={BRAND_COLORS[`accent${index + 1}` as keyof typeof BRAND_COLORS] || BRAND_COLORS.primary} />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 bg-white shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#0A2240]">Net Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={netRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                  <YAxis 
                    tickFormatter={(value) => formatCurrency(value)} 
                    stroke={BRAND_COLORS.axis}
                    tickLine={{ stroke: BRAND_COLORS.axis }}
                    axisLine={{ stroke: BRAND_COLORS.axis }}
                  />
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Area type="monotone" dataKey="Net Revenue" stroke={BRAND_COLORS.secondary} fill={BRAND_COLORS.accent1} fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#0A2240]">Total Beneficiaries</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={beneficiariesData.years.map((year, index) => ({
                  name: year,
                  Beneficiaries: beneficiariesData.data[index]
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="name" stroke={BRAND_COLORS.axis} />
                  <YAxis
                    stroke={BRAND_COLORS.axis}
                    tickLine={{ stroke: BRAND_COLORS.axis }}
                    axisLine={{ stroke: BRAND_COLORS.axis }}
                  />
                  <Tooltip />
                  <Bar dataKey="Beneficiaries" fill={BRAND_COLORS.primary} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <DetailedBudgetModal 
          isOpen={showDetailedBudget} 
          onClose={() => setShowDetailedBudget(false)} 
        />
      </div>
    </section>
  )
}

export default FinancialDashboard

