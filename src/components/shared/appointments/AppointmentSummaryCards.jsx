import React from 'react'

const summaries = [
  { label: "Total", value: 5, color: "text-gray-700" },
  { label: "Confirmed", value: 2, color: "text-blue-600" },
  { label: "Pending", value: 1, color: "text-yellow-600" },
  { label: "Completed", value: 1, color: "text-green-600" },
]

const AppointmentSummaryCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {summaries.map((s) => (
        <div key={s.label} className="bg-white border rounded-xl p-4 shadow-sm text-center">
          <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          <p className="text-sm text-gray-500 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export default AppointmentSummaryCards