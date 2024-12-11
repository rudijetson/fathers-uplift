"use client"

import React from 'react'
import { X } from 'lucide-react'
import { BudgetData } from '../types'
import { formatCurrency } from '../utils/formatters'
import detailedBudget from '@/app/data/detailed_budget.json'

interface DetailedBudgetTableProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DetailedBudgetTable: React.FC<DetailedBudgetTableProps> = ({ isOpen, onClose }) => {
  const budget = detailedBudget as BudgetData

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className="fixed inset-0 bg-white flex flex-col md:inset-4 lg:inset-8 md:rounded-lg">
        <div className="h-16 flex-none flex items-center justify-between px-4 border-b bg-white">
          <h2 className="text-2xl font-bold text-fathers-blue">Detailed Budget</h2>
          <button 
            className="ml-auto p-3 hover:bg-gray-100 rounded-full transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-fathers-blue" />
          </button>
        </div>

        <div className="h-[calc(100vh-4rem)] overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="sticky top-0 z-20 bg-fathers-blue shadow-sm">
                <th className="sticky left-0 z-30 bg-fathers-blue px-4 py-3 text-left font-medium text-white min-w-[180px]">
                  {budget.headers[0]}
                </th>
                {budget.headers.slice(1).map((header, index) => (
                  <th key={index} className="px-4 py-3 text-left font-medium text-white whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.values(budget.sections).map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr className="bg-fathers-blue/5">
                    <td 
                      colSpan={budget.headers.length} 
                      className="sticky left-0 px-6 py-4 font-bold text-fathers-blue bg-fathers-blue/5"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                      className={`border-b border-gray-200 transition-colors duration-150
                        ${row[0] === "Greenlight Fund" ? "bg-green-50/80 hover:bg-green-50" : "hover:bg-gray-50"}`}
                    >
                      <td className={`sticky left-0 px-6 py-4 font-medium whitespace-nowrap border-r
                        ${row[0] === "Greenlight Fund" 
                          ? "bg-green-50/90 text-green-700 border-green-200" 
                          : "bg-white text-fathers-blue border-gray-200"}`}
                      >
                        {row[0]}
                      </td>
                      {row.slice(1).map((cell, cellIndex) => (
                        <td 
                          key={cellIndex}
                          className={`px-6 py-4 text-right ${
                            row[0] === "Greenlight Fund" ? "text-green-700" : "text-fathers-blue/80"
                          }`}
                        >
                          {formatCurrency(cell)}
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
  )
} 