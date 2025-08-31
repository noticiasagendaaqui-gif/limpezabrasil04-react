
import React from 'react'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Briefcase, Clock, Shield, Award, Users, ShieldCheck, CheckCircle } from 'lucide-react'

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Limpeza Profissional
                <span className="text-primary-600 block">Para Sua Casa e Empresa</span>
              </h2>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                Oferecemos serviços de limpeza residencial e comercial com qualidade profissional, 
                usando produtos ecológicos e equipamentos modernos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/agendamento" className="btn-primary text-center">
                  Agendar Agora
                </Link>
                <Link to="/servicos" className="btn-secondary text-center">
                  Ver Serviços
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <HomeIcon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">Residencial</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">Comercial</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">24/7</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">Seguro</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de limpeza para atender todas as suas necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <HomeIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4 text-center">Limpeza Residencial</h3>
              <p className="text-secondary-600 mb-6 text-center">
                Limpeza completa de residências, apartamentos e casas com produtos seguros e ecológicos.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Limpeza de todos os cômodos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Produtos ecológicos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Equipe treinada
                </li>
              </ul>
            </div>
            
            <div className="card">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4 text-center">Limpeza Comercial</h3>
              <p className="text-secondary-600 mb-6 text-center">
                Serviços especializados para escritórios, lojas, restaurantes e estabelecimentos comerciais.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Horários flexíveis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Equipamentos profissionais
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Contratos mensais
                </li>
              </ul>
            </div>
            
            <div className="card">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4 text-center">Limpeza Pós-Obra</h3>
              <p className="text-secondary-600 mb-6 text-center">
                Limpeza especializada após reformas e construções, removendo resíduos e sujeira pesada.
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Remoção de entulho
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Limpeza profunda
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                  Equipamentos especializados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Por Que Nos Escolher?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Somos reconhecidos pela excelência em nossos serviços e pelo compromisso com a satisfação do cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">+10 Anos</h3>
              <p className="text-secondary-600">de experiência no mercado</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">+1000</h3>
              <p className="text-secondary-600">clientes satisfeitos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">24/7</h3>
              <p className="text-secondary-600">disponibilidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">100%</h3>
              <p className="text-secondary-600">garantia de qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto Para Ter Sua Casa ou Empresa Impecável?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e solicite um orçamento gratuito para seus serviços de limpeza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agendamento" className="bg-white text-primary-600 hover:bg-secondary-100 px-8 py-4 rounded-lg font-medium transition-colors">
              Agendar Serviço
            </Link>
            <Link to="/contato" className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors">
              Falar Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
