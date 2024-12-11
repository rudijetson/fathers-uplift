"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import dynamic from 'next/dynamic'

// Dynamically import the map components with no SSR
const Map = dynamic(
  () => import('react-simple-maps').then(mod => ({
    default: () => {
      const { ComposableMap, Geographies, Geography } = mod
      return (
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isActive = locations.some(loc => loc.stateId === geo.id)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isActive ? "#F4B223" : "#f1f5f9"}
                    stroke="#94a3b8"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: isActive ? "#F4B223" : "#e2e8f0", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>
      )
    }
  })),
  { ssr: false }
)

const basicInfo = [
  { label: "Website", value: "fathersuplift.org" },
  { label: "Established", value: "2011" },
  { label: "Headquarters", value: "Dorchester, MA" },
  { label: "CEO", value: "Dr. Charles C. Daniels, Jr." },
  { label: "Revenue (2022)", value: "$2.7M" },
  { label: "Expenses (2022)", value: "$524K" },
  { label: "Beneficiaries Served", value: "14,000+ fathers and family members since 2011" },
  { label: "Current Locations", value: "MA, FL, TN" },
  { label: "Focus Areas", value: "Youth Mental Health, Family Support" },
  { label: "Approach", value: "Whole family/multi-generation" }
]

const locations = [
  { state: "MA", name: "Massachusetts", coordinates: [-71.0589, 42.3601] as [number, number], stateId: "25" },
  { state: "FL", name: "Florida", coordinates: [-81.5158, 27.6648] as [number, number], stateId: "12" },
  { state: "TN", name: "Tennessee", coordinates: [-86.7844, 36.1627] as [number, number], stateId: "47" },
]

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

export const OrganizationInfo: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Basic Information Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-fathers-blue">Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {basicInfo.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <span className="font-medium text-fathers-blue/80">{item.label}</span>
                    <span className="text-right text-fathers-blue">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Locations Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-fathers-blue">Our Impact Across the USA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <Map />
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-fathers-blue mb-3">Active Locations</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {locations.map((location) => (
                    <div key={location.state} 
                      className="flex items-center gap-2 bg-fathers-orange/10 p-3 rounded-lg">
                      <div className="w-3 h-3 bg-fathers-orange rounded-full"></div>
                      <span className="font-medium text-slate-700">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Replication Plans Card */}
        <Card className="mt-12 bg-gradient-to-r from-fathers-blue to-fathers-navy text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Replication Plans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Fathers&apos; UpLift is expanding beyond Boston to address the significant gap in BIPOC therapists. 
              In partnership with schools of social work, Fathers&apos; UpLift supports the licensure of Black 
              and Brown therapists by providing mentorship and practical clinical training on the delivery 
              of our holistic, contextual, community-based therapy proven to more effectively serve men 
              of color. These fellows provide clinical care to local residents.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default OrganizationInfo;

