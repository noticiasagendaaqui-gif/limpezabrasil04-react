
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Booking } from './pages/Booking'
import { Contact } from './pages/Contact'
import { AdminLogin } from './pages/Admin/Login'
import { AdminDashboard } from './pages/Admin/Dashboard'
import { AdminBookings } from './pages/Admin/Bookings'
import { AdminClients } from './pages/Admin/Clients'
import { AdminEmployees } from './pages/Admin/Employees'
import { AdminReports } from './pages/Admin/Reports'
import { NotificationProvider } from './contexts/NotificationContext'

function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/sobre" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/servicos" element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/agendamento" element={
            <>
              <Header />
              <Booking />
              <Footer />
            </>
          } />
          <Route path="/contato" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/agendamentos" element={<AdminBookings />} />
          <Route path="/admin/clientes" element={<AdminClients />} />
          <Route path="/admin/funcionarios" element={<AdminEmployees />} />
          <Route path="/admin/relatorios" element={<AdminReports />} />
        </Routes>
      </div>
    </NotificationProvider>
  )
}

export default App
