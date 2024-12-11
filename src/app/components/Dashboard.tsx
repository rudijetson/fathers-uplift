import { DashboardNav } from './DashboardNav'
import ExecutiveSummary from './Executive'
import TheoryOfChange from './TheoryOfChange'
import LogicModel from './LogicModel'
import ProgramModel from './Program-Model'
import SocialImpact from './Impact'
import OrganizationInfo from './Info'
import Differentiators from './Differentiators'
import YouthMentalHealth from './YouthMentalHealth'
import Equity from './Equity'
import CincinnatiFit from './Fit'
import IndicatorsAndRisks from './IndicatorsRisk'
import FinancialDashboard from './Financials'
import BudgetTableSection from './BudgetTable'

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <DashboardNav />
      
      <div id="executive" className="scroll-mt-16">
        <ExecutiveSummary />
      </div>

      <div id="theory" className="scroll-mt-16">
        <TheoryOfChange />
      </div>

      <div id="logic" className="scroll-mt-16">
        <LogicModel />
      </div>

      <div id="program" className="scroll-mt-16">
        <ProgramModel />
      </div>

      <div id="impact" className="scroll-mt-16">
        <SocialImpact />
        <OrganizationInfo />
        <Differentiators />
      </div>

      <div id="focus" className="scroll-mt-16">
        <YouthMentalHealth />
        <Equity />
      </div>

      <div id="evaluation" className="scroll-mt-16">
        <CincinnatiFit />
        <IndicatorsAndRisks />
      </div>

      <div id="financial" className="scroll-mt-16">
        <FinancialDashboard />
        <BudgetTableSection />
      </div>
    </div>
  )
}
