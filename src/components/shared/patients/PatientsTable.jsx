import React from 'react'

const patients = [
  { id: "P001", name: "John Smith", age: 34, gender: "Male", phone: "+1 555-0101", condition: "Hypertension", status: "Active" },
  { id: "P002", name: "Sara Lee", age: 28, gender: "Female", phone: "+1 555-0102", condition: "Diabetes", status: "Active" },
  { id: "P003", name: "Mark Johnson", age: 45, gender: "Male", phone: "+1 555-0103", condition: "Asthma", status: "Inactive" },
  { id: "P004", name: "Emily Davis", age: 52, gender: "Female", phone: "+1 555-0104", condition: "Arthritis", status: "Active" },
  { id: "P005", name: "Tom Wilson", age: 61, gender: "Male", phone: "+1 555-0105", condition: "Heart Disease", status: "Active" },
]

const PatientsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-5 border-b">
        <h2 className="text-base font-semibold">All Patients</h2>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-500 bg-gray-50">
          <tr>
            <th className="text-left px-5 py-3">ID</th>
            <th className="text-left px-5 py-3">Name</th>
            <th className="text-left px-5 py-3">Age</th>
            <th className="text-left px-5 py-3">Gender</th>
            <th className="text-left px-5 py-3">Phone</th>
            <th className="text-left px-5 py-3">Condition</th>
            <th className="text-left px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="px-5 py-3 text-gray-400">{p.id}</td>
              <td className="px-5 py-3 font-medium">{p.name}</td>
              <td className="px-5 py-3 text-gray-500">{p.age}</td>
              <td className="px-5 py-3 text-gray-500">{p.gender}</td>
              <td className="px-5 py-3 text-gray-500">{p.phone}</td>
              <td className="px-5 py-3 text-gray-500">{p.condition}</td>
              <td className="px-5 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientsTable