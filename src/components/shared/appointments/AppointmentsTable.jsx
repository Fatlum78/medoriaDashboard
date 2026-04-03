import React from 'react'

const statusColor = {
  Confirmed: "bg-blue-100 text-blue-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

const appointments = [
  { id: "A001", patient: "John Smith", doctor: "Dr. Adams", date: "2026-03-26", time: "09:00 AM", type: "Check-up", status: "Confirmed" },
  { id: "A002", patient: "Sara Lee", doctor: "Dr. Brown", date: "2026-03-26", time: "10:30 AM", type: "Follow-up", status: "Pending" },
  { id: "A003", patient: "Mark Johnson", doctor: "Dr. Clark", date: "2026-03-26", time: "11:00 AM", type: "Consultation", status: "Completed" },
  { id: "A004", patient: "Emily Davis", doctor: "Dr. Adams", date: "2026-03-27", time: "02:00 PM", type: "Check-up", status: "Cancelled" },
  { id: "A005", patient: "Tom Wilson", doctor: "Dr. Brown", date: "2026-03-27", time: "03:30 PM", type: "Follow-up", status: "Confirmed" },
]

const AppointmentsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-5 border-b">
        <h2 className="text-base font-semibold">All Appointments</h2>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-500 bg-gray-50">
          <tr>
            <th className="text-left px-5 py-3">ID</th>
            <th className="text-left px-5 py-3">Patient</th>
            <th className="text-left px-5 py-3">Doctor</th>
            <th className="text-left px-5 py-3">Date</th>
            <th className="text-left px-5 py-3">Time</th>
            <th className="text-left px-5 py-3">Type</th>
            <th className="text-left px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-t hover:bg-gray-50">
              <td className="px-5 py-3 text-gray-400">{a.id}</td>
              <td className="px-5 py-3 font-medium">{a.patient}</td>
              <td className="px-5 py-3 text-gray-500">{a.doctor}</td>
              <td className="px-5 py-3 text-gray-500">{a.date}</td>
              <td className="px-5 py-3 text-gray-500">{a.time}</td>
              <td className="px-5 py-3 text-gray-500">{a.type}</td>
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

export default AppointmentsTable