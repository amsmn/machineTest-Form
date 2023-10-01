
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import CountryList from '../pages/CountryList/CountryList'


export const routes = (
  <Routes>
    <Route path="/" element={<Outlet />}>
      <Route index={true} element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<CountryList/>} />
    </Route>
  </Routes>
)
