import { Footer, Header } from './components/ui'
import './rootlayout.css'
import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}