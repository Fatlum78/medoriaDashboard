import React from 'react'
import Layout from '../dashboard/Layout'
import Navbar from '@/components/shared/topbar/navbar'
import StaffSummaryCards from '@/components/shared/stafflist/StaffSummaryCards'
import StaffTable from '@/components/shared/stafflist/StaffTable'

const Stafflist = () => {
  return (
    <Layout>
      <Navbar />
      <div className="p-6 space-y-6">
        <StaffSummaryCards />
        <StaffTable />
      </div>
    </Layout>
  )
}

export default Stafflist