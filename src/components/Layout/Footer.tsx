
import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.svg" alt="LimpaBrasil" className="h-8 w-8" />
              <h3 className="text-xl font-bold">LimpaBrasil</h3>
            </div>
            <p className="text-secondary-400 mb-4">
              Sua empresa de limpeza profissional de confiança há mais de 10 anos.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+553198025882" 
                className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-secondary-400">
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Limpeza Residencial
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Limpeza Comercial
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Limpeza Pós-Obra
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Limpeza de Escritórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-secondary-400">
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="hover:text-white transition-colors">
                  Agendamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-secondary-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(31) 98025-2882</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contato@limpabrasil.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>São José da Lapa, MG - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; 2025 LimpaBrasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
