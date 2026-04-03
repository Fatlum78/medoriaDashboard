import React from 'react'
import Layout from './Layout'
import Navbar from '@/components/shared/topbar/navbar'
import StatsCard from '@/components/shared/dashboard/StatsCard'
import RecentAppointmentsTable from '@/components/shared/dashboard/RecentAppointmentsTable'
import { Users, CalendarDays, CreditCard, Activity } from 'lucide-react'

const stats = [
  { label: "Total Patients", value: "1,284", icon: Users, color: "bg-blue-100 text-blue-600" },
  { label: "Appointments Today", value: "48", icon: CalendarDays, color: "bg-green-100 text-green-600" },
  { label: "Revenue This Month", value: "$24,500", icon: CreditCard, color: "bg-purple-100 text-purple-600" },
  { label: "Active Staff", value: "32", icon: Activity, color: "bg-orange-100 text-orange-600" },
]

const DashboardPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>
        <RecentAppointmentsTable />
      </div>
    </Layout>
  )
}

export default DashboardPage