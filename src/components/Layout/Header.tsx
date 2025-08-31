
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Agendamento', href: '/agendamento' },
    { name: 'Contato', href: '/contato' }
  ]

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="LimpaBrasil" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-primary-600">LimpaBrasil</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link to="/agendamento" className="btn-primary">
              Agendar Serviço
            </Link>
            <Link 
              to="/admin/login" 
              className="border border-secondary-300 text-secondary-700 hover:bg-secondary-100 px-4 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link
                to="/agendamento"
                className="block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar Serviço
              </Link>
              <Link
                to="/admin/login"
                className="block border border-secondary-300 text-secondary-700 hover:bg-secondary-100 px-6 py-3 rounded-lg font-medium text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login Administrativo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
