import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/patients': 'Patients',
  '/appointments': 'Appointments',
  '/billing': 'Billing',
  '/reports': 'Reports',
  '/stafflist': 'Staff List',
  '/purchases': 'Purchases',
  '/security': 'Security',
  '/integrations': 'Integrations',
  '/general': 'General',
}

const usePageTitle = () => {
  const { pathname } = useLocation()
  return pageTitles[pathname] || 'Dashboard'
}

export default usePageTitle