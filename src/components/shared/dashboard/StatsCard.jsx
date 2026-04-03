import React from 'react'

const StatsCard = ({ label, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-4">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  )
}

export default StatsCard