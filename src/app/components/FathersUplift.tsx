import Hero from './FathersUplift-Assets/Hero'
import ClientFundraise from './FathersUplift-Assets/ClientFundraise'
import ExecutiveSummary from './FathersUplift-Assets/Executive'
import TheoryOfChange from './FathersUplift-Assets/TheoryOfChange'
import LogicModel from './FathersUplift-Assets/LogicModel'
import ProgramModel from './FathersUplift-Assets/Program-Model'
import SocialImpact from './FathersUplift-Assets/Impact'
import OrganizationInfo from './FathersUplift-Assets/Info'
import Differentiators from './FathersUplift-Assets/Differentiators'
import YouthMentalHealth from './FathersUplift-Assets/YouthMentalHealth'
import Equity from './FathersUplift-Assets/Equity'
import CincinnatiFit from './FathersUplift-Assets/Fit'
import IndicatorsAndRisks from './FathersUplift-Assets/IndicatorsRisk'
import FinancialDashboard from './FathersUplift-Assets/Financials'
import BudgetTableSection from './FathersUplift-Assets/BudgetTable'
import { SideNav } from './FathersUplift-Assets/SideNav'
import DashboardNav from './FathersUplift-Assets/DashboardNav'

export default function FathersUplift() {
  return (
    <div className="min-h-screen">
      <SideNav />
      <DashboardNav />
      <Hero />
      <div className="flex">
        <div className="flex-1 lg:pl-[240px]">
          <ClientFundraise />
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
      </div>
    </div>
  )
}
