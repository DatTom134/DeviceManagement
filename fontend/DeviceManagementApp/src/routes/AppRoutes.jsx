import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/DashboardPage.jsx'
import Devices from '../pages/Devices/Devices.jsx'
import Users from '../pages/Users/Users.jsx'
import Departments from '../pages/Departments/Departments.jsx'
import IPAddresses from '../pages/IPAddresses/IPAddresses.jsx'

import MainLayout from '../layouts/MainLayout.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route 
                path='/' 
                element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                }
            />

            <Route 
                path='/devices' 
                element={
                    <MainLayout>
                        <Devices />
                    </MainLayout>
                }
            />

            <Route 
                path='/users' 
                element={ 
                    <MainLayout>
                        <Users />
                    </MainLayout>
                }
            />

            <Route 
                path='/departments' 
                element={ 
                    <MainLayout>
                        <Departments />
                    </MainLayout>
                }
            />
            <Route 
                path='/ip-addresses' 
                element={ 
                    <MainLayout>
                        <IPAddresses />
                    </MainLayout>
                }
            />
        </Routes>
    )
}