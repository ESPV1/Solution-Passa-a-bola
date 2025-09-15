import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"

import './index.css'
import { RootLayout } from './layout.jsx'
import { Home, Login, PerfilTorcedor, Quadras, ListaTimes, Register, UserTypeSelection } from '@/pages'
import { isAuthenticated } from '@/utils/auth'

// RequireAuth
function RequireAuth({ children }) {
  const location = useLocation()
  const ok = isAuthenticated()
  return ok ? children : <Navigate to="/login" replace state={{ from: location }} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="perfil-torcedor" element={<PerfilTorcedor />} />
          <Route path="quadras" element={<Quadras />} />
          <Route path="lista-times" element={<ListaTimes />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="user-type" element={<UserTypeSelection />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)