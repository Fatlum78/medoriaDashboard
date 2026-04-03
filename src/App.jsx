import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/dashboard/DashboardPage'
import PatientsPage from './pages/patients/PatientsPage'
import AppointmentsPage from './pages/appointments/AppointmentsPage'
import Stafflist from './pages/stafflist/Stafflist'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/patients' element={<PatientsPage/>} />
        <Route path='/appointments' element={<AppointmentsPage/>} />
        <Route path='/stafflist' element={<Stafflist/>} />
      </Routes>
    </Router>
  )
}

export default App