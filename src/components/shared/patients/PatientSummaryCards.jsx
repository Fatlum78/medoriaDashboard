import React from 'react'

const summaries = [
  { label: "Total Patients", value: 5 },
  { label: "Active", value: 4 },
  { label: "Inactive", value: 1 },
]

const PatientSummaryCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {summaries.map((s) => (
        <div key={s.label} className="bg-white border rounded-xl p-4 shadow-sm text-center">
          <p className="text-2xl font-bold text-gray-700">{s.value}</p>
          <p className="text-sm text-gray-500 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export default PatientSummaryCards