import React from 'react'
import Layout from '../dashboard/Layout'
import Navbar from '@/components/shared/topbar/navbar'
import AppointmentSummaryCards from '@/components/shared/appointments/AppointmentSummaryCards'
import AppointmentsTable from '@/components/shared/appointments/AppointmentsTable'

const AppointmentsPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="p-6 space-y-6">
        <AppointmentSummaryCards />
        <AppointmentsTable />
      </div>
    </Layout>
  )
}

export default AppointmentsPage