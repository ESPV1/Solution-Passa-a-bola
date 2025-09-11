import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import { RootLayout } from './layout.jsx'
import { Home, Login, PerfilTorcedor, Quadras} from '@/pages'
import Footer from './components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="perfil-torcedor" element={<PerfilTorcedor />} />
          <Route path="quadras" element={<Quadras />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
      <RootLayout />
    </BrowserRouter>
    <Footer/>
  </StrictMode>
)