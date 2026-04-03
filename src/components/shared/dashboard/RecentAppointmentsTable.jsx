import React from 'react'

const statusColor = {
  Confirmed: "bg-blue-100 text-blue-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

const recentAppointments = [
  { patient: "John Smith", doctor: "Dr. Adams", date: "2026-03-26", status: "Confirmed" },
  { patient: "Sara Lee", doctor: "Dr. Brown", date: "2026-03-26", status: "Pending" },
  { patient: "Mark Johnson", doctor: "Dr. Clark", date: "2026-03-25", status: "Completed" },
  { patient: "Emily Davis", doctor: "Dr. Adams", date: "2026-03-25", status: "Cancelled" },
]

const RecentAppointmentsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-5 border-b">
        <h2 className="text-base font-semibold">Recent Appointments</h2>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-500 bg-gray-50">
          <tr>
            <th className="text-left px-5 py-3">Patient</th>
            <th className="text-left px-5 py-3">Doctor</th>
            <th className="text-left px-5 py-3">Date</th>
            <th className="text-left px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentAppointments.map((a, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-5 py-3 font-medium">{a.patient}</td>
              <td className="px-5 py-3 text-gray-500">{a.doctor}</td>
              <td className="px-5 py-3 text-gray-500">{a.date}</td>
              <td className="px-5 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[a.status]}`}>
                  {a.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentAppointmentsTable