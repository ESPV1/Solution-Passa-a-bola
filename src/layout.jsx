import { Footer } from './components/ui'
import './rootlayout.css'
import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div>
      {/* isso aqui vai virar um componente header depois */}
      <header>
        <nav></nav>
      </header>

      {/* aqui vai o conteúdo das páginas que tem header e footer */}
      <Outlet />

      <Footer />
    </div>
  )
}