
import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Briefcase, Tool, Layers, Square, Droplet, CheckCircle } from 'lucide-react'

export const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Limpeza Residencial',
      description: 'Limpeza completa de residências, apartamentos e casas com produtos seguros e ecológicos.',
      features: [
        'Limpeza de todos os cômodos',
        'Banheiros e cozinha profunda',
        'Aspiração e lavagem de pisos',
        'Limpeza de móveis e superfícies',
        'Produtos ecológicos'
      ],
      price: 'A partir de R$ 80',
      period: 'por visita'
    },
    {
      icon: Briefcase,
      title: 'Limpeza Comercial',
      description: 'Serviços especializados para escritórios, lojas, restaurantes e estabelecimentos comerciais.',
      features: [
        'Limpeza de escritórios',
        'Sanitização de áreas comuns',
        'Limpeza de vidros e fachadas',
        'Horários flexíveis',
        'Contratos mensais disponíveis'
      ],
      price: 'A partir de R$ 200',
      period: 'por visita'
    },
    {
      icon: Tool,
      title: 'Limpeza Pós-Obra',
      description: 'Limpeza especializada após reformas e construções, removendo resíduos e sujeira pesada.',
      features: [
        'Remoção de entulho leve',
        'Limpeza de cimento e tinta',
        'Aspiração de poeira fina',
        'Limpeza de vidros e esquadrias',
        'Equipamentos especializados'
      ],
      price: 'Sob consulta',
      period: 'conforme o projeto'
    },
    {
      icon: Layers,
      title: 'Limpeza de Carpetes',
      description: 'Limpeza profissional de carpetes, tapetes e estofados com equipamentos especializados.',
      features: [
        'Extração profunda de sujeira',
        'Remoção de manchas difíceis',
        'Higienização com vapor',
        'Produtos anti-alérgicos',
        'Secagem rápida'
      ],
      price: 'A partir de R$ 15',
      period: 'por m²'
    },
    {
      icon: Square,
      title: 'Limpeza de Vidros',
      description: 'Limpeza especializada de vidros residenciais e comerciais com técnicas profissionais.',
      features: [
        'Limpeza interna e externa',
        'Remoção de gordura e resíduos',
        'Limpeza de esquadrias',
        'Equipamentos de segurança',
        'Resultado sem riscos'
      ],
      price: 'A partir de R$ 8',
      period: 'por m²'
    },
    {
      icon: Droplet,
      title: 'Higienização',
      description: 'Serviços de higienização e sanitização para eliminar vírus, bactérias e fungos.',
      features: [
        'Sanitização completa',
        'Produtos hospitalares',
        'Eliminação de vírus e bactérias',
        'Ambientes seguros',
        'Certificado de higienização'
      ],
      price: 'A partir de R$ 120',
      period: 'por ambiente'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Agendamento',
      description: 'Entre em contato e agende seu serviço de forma rápida e fácil.'
    },
    {
      number: 2,
      title: 'Avaliação',
      description: 'Nossa equipe avalia o local e define a melhor estratégia de limpeza.'
    },
    {
      number: 3,
      title: 'Execução',
      description: 'Realizamos o serviço com equipamentos profissionais e produtos de qualidade.'
    },
    {
      number: 4,
      title: 'Aprovação',
      description: 'Verificamos se está tudo perfeito e aguardamos sua aprovação final.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Nossos <span className="text-primary-600">Serviços</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços de limpeza profissional para 
              atender todas as suas necessidades com qualidade e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-3 text-sm text-secondary-600 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                    <p className="text-sm text-secondary-500">{service.period}</p>
                  </div>
                  <div className="text-center mt-6">
                    <Link to="/agendamento" className="btn-primary">
                      {service.price.includes('consulta') ? 'Solicitar Orçamento' : 'Agendar Agora'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Um processo estruturado para garantir a máxima qualidade e satisfação
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Algum Destes Serviços?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento gratuito e deixe nossa equipe especializada 
            cuidar da limpeza do seu ambiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agendamento" className="bg-white text-primary-600 hover:bg-secondary-100 px-8 py-4 rounded-lg font-medium transition-colors">
              Agendar Serviço
            </Link>
            <Link to="/contato" className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-colors">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
