"use client"

import React, { useState } from 'react'
import { Table } from 'lucide-react'
import { DetailedBudgetTable } from './components/DetailedBudgetTable'

const BudgetTableSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-fathers-blue text-white rounded-lg hover:bg-fathers-blue/90 transition-colors"
      >
        <Table className="w-4 h-4" />
        View Detailed Budget
      </button>

      <DetailedBudgetTable 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  )
}

export default BudgetTableSection 