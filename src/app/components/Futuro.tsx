import Hero from './Futuro-Assets/Hero'
import Executive from './Futuro-Assets/Executive'
import { SideNav } from './Futuro-Assets/SideNav'
import DashboardNav from './Futuro-Assets/DashboardNav'
// ... other imports

export default function Futuro() {
  return (
    <div className="min-h-screen">
      <SideNav />
      <DashboardNav />
      <Hero />
      <div className="flex">
        <div className="flex-1 lg:pl-[240px]">
          <div id="executive" className="scroll-mt-16">
            <Executive />
          </div>
          {/* Add other sections */}
        </div>
      </div>
    </div>
  )
}
