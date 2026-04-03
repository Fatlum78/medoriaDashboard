import React from 'react'
import Layout from '../dashboard/Layout'
import Navbar from '@/components/shared/topbar/navbar'
import PatientSummaryCards from '@/components/shared/patients/PatientSummaryCards'
import PatientsTable from '@/components/shared/patients/PatientsTable'

const PatientsPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="p-6 space-y-6">
        <PatientSummaryCards />
        <PatientsTable />
      </div>
    </Layout>
  )
}

export default PatientsPage