import { HomePage } from "./pages/home-page"
import { TechnicianDetails } from "./pages/technician-details"
import { AdminDashboard } from "./pages/admin-dashboard"

export const routes = [

    {
        path: '/dashboard',
        component: AdminDashboard
    },
    {
        path: '/technician/:id',
        component: TechnicianDetails
    },
    {
        path: '/',
        component: HomePage
    }
]