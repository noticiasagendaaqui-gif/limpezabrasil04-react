
# LimpaBrasil - React + TypeScript + Vite

Sistema moderno de limpeza profissional desenvolvido em React com TypeScript, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento SPA
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🏗️ Build para cPanel

```bash
# Executar script de build para cPanel
node build-for-cpanel.js
```

O script criará uma pasta `cpanel-build` com todos os arquivos otimizados para hospedagem.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout/         # Header, Footer
│   └── UI/             # Componentes de interface
├── pages/              # Páginas da aplicação
│   ├── Admin/          # Painel administrativo
│   ├── Home.tsx        # Página inicial
│   ├── About.tsx       # Sobre
│   ├── Services.tsx    # Serviços
│   ├── Booking.tsx     # Agendamento
│   └── Contact.tsx     # Contato
├── contexts/           # Contexts do React
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🎨 Funcionalidades

### Frontend
- [x] Design responsivo e moderno
- [x] Roteamento SPA com React Router
- [x] Formulários com validação
- [x] Sistema de notificações
- [x] Componentes reutilizáveis
- [x] Tipagem completa com TypeScript
- [x] Otimização para SEO

### Páginas
- [x] Home - Landing page com serviços
- [x] Sobre - História e valores da empresa
- [x] Serviços - Catálogo completo de serviços
- [x] Agendamento - Formulário de agendamento
- [x] Contato - Formulário de contato
- [x] Admin - Painel administrativo

### Sistema Admin
- [x] Login de administrador
- [x] Dashboard com estatísticas
- [x] Gestão de agendamentos
- [x] Gestão de clientes
- [x] Gestão de funcionários
- [x] Relatórios

## 🔧 Configuração

### Vite
O projeto usa Vite como build tool com configurações otimizadas para produção.

### Tailwind CSS
Framework CSS configurado com tema personalizado incluindo:
- Cores primárias e secundárias
- Animações customizadas
- Componentes utilitários

### TypeScript
Configuração rigorosa de TypeScript com:
- Tipagem completa da aplicação
- Interfaces para todas as entidades
- Type safety em todo o código

## 📱 Responsividade

O design é totalmente responsivo, funcionando perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- Lazy loading de componentes
- Code splitting automático
- Otimização de assets
- Compressão automática
- Cache de recursos estáticos

## 🚀 Deploy

### cPanel/Hospedagem Tradicional
1. Execute `node build-for-cpanel.js`
2. Faça upload dos arquivos da pasta `cpanel-build`
3. Configure o .htaccess para SPA routing

### Replit Deploy
O projeto está configurado para deploy direto no Replit Deployments.

## 📄 Licença

Projeto desenvolvido para demonstração de capacidades técnicas.

## 🤝 Contribuição

Para contribuir com o projeto:
1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas técnicas ou suporte:
- Email: desenvolvedor@limpabrasil.com.br
- GitHub Issues: Abra uma issue no repositório
