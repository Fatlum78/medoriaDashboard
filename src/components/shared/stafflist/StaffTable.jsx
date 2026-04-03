import React from 'react'

const staff = [
  { id: "S001", name: "Dr. Adams", role: "Cardiologist", department: "Cardiology", phone: "+1 555-0201", email: "adams@medoria.com", status: "Active" },
  { id: "S002", name: "Dr. Brown", role: "Neurologist", department: "Neurology", phone: "+1 555-0202", email: "brown@medoria.com", status: "Active" },
  { id: "S003", name: "Dr. Clark", role: "Orthopedic", department: "Orthopedics", phone: "+1 555-0203", email: "clark@medoria.com", status: "Active" },
  { id: "S004", name: "Nurse Jane", role: "Head Nurse", department: "General", phone: "+1 555-0204", email: "jane@medoria.com", status: "Active" },
  { id: "S005", name: "Dr. Evans", role: "Pediatrician", department: "Pediatrics", phone: "+1 555-0205", email: "evans@medoria.com", status: "On Leave" },
]

const StaffTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-5 border-b">
        <h2 className="text-base font-semibold">All Staff</h2>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-500 bg-gray-50">
          <tr>
            <th className="text-left px-5 py-3">ID</th>
            <th className="text-left px-5 py-3">Name</th>
            <th className="text-left px-5 py-3">Role</th>
            <th className="text-left px-5 py-3">Department</th>
            <th className="text-left px-5 py-3">Phone</th>
            <th className="text-left px-5 py-3">Email</th>
            <th className="text-left px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((s) => (
            <tr key={s.id} className="border-t hover:bg-gray-50">
              <td className="px-5 py-3 text-gray-400">{s.id}</td>
              <td className="px-5 py-3 font-medium">{s.name}</td>
              <td className="px-5 py-3 text-gray-500">{s.role}</td>
              <td className="px-5 py-3 text-gray-500">{s.department}</td>
              <td className="px-5 py-3 text-gray-500">{s.phone}</td>
              <td className="px-5 py-3 text-gray-500">{s.email}</td>
              <td className="px-5 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${s.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StaffTable