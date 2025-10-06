import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBooks from './users/pages/ViewBooks'
import Profile from './users/pages/Profile'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import DashboardAdmin from "./admin/pages/DashboardAdmin";
import CareerAdmin from "./admin/pages/CareerAdmin";
import ResourceAdmin from "./admin/pages/ResourceAdmin";
import SettingAdmin from "./admin/pages/SettingAdmin";
import Pnf from './pages/Pnf'


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 7000);
  }, [])



  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/books/:id/view' element={<ViewBooks />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin-dashboard' element={loading ? <Preloader /> : <DashboardAdmin />} />
        <Route path='/admin-resources' element={<ResourceAdmin />} />
        <Route path='/admin-careers' element={<CareerAdmin />} />
        <Route path='/admin-settings' element={<SettingAdmin />} />

        <Route path='/*' element={<Pnf />} />
      </Routes>

    </>
  )
}

export default App
