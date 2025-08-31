
#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🚀 Iniciando build para cPanel...')

// 1. Build da aplicação React
console.log('📦 Fazendo build da aplicação...')
execSync('npm run build', { stdio: 'inherit' })

// 2. Criar pasta de distribuição
const distPath = path.join(__dirname, 'cpanel-build')
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true })
}
fs.mkdirSync(distPath)

// 3. Copiar arquivos do build
const buildPath = path.join(__dirname, 'dist')
console.log('📁 Copiando arquivos do build...')
execSync(`cp -r ${buildPath}/* ${distPath}/`)

// 4. Criar .htaccess para SPA routing
const htaccessContent = `
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
`

fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent.trim())

// 5. Criar arquivo de instruções
const instructionsContent = `
# INSTRUÇÕES DE INSTALAÇÃO NO CPANEL

## Passo 1: Upload dos arquivos
1. Acesse o File Manager do seu cPanel
2. Navegue até a pasta public_html
3. Faça upload de todos os arquivos desta pasta (cpanel-build)
4. Extraia se necessário

## Passo 2: Configuração do domínio
- Se for domínio principal: coloque os arquivos diretamente em public_html
- Se for subdomínio: crie uma pasta e configure o subdomínio para apontar para ela

## Passo 3: Verificação
- Acesse seu site
- Teste a navegação entre páginas
- Verifique se o formulário de contato funciona

## Estrutura dos arquivos:
- index.html (página principal)
- assets/ (CSS, JS, imagens)
- .htaccess (configurações do servidor)

## Suporte:
Para dúvidas sobre instalação, consulte a documentação do seu provedor de hospedagem.
`

fs.writeFileSync(path.join(distPath, 'INSTALACAO.txt'), instructionsContent.trim())

// 6. Criar arquivo index.html simplificado para fallback
const fallbackHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LimpaBrasil - Carregando...</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            font-family: Arial, sans-serif; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            background: #f8fafc;
        }
        .loading { 
            text-align: center; 
            color: #0284c7;
        }
        .spinner {
            border: 4px solid #e2e8f0;
            border-top: 4px solid #0284c7;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    <script>
        // Fallback para verificar se o React carregou
        setTimeout(function() {
            if (!document.querySelector('#root').innerHTML.trim()) {
                document.body.innerHTML = '<div style="text-align: center; padding: 40px;"><h1>LimpaBrasil</h1><p>Erro ao carregar a aplicação. Verifique se JavaScript está habilitado.</p><a href="mailto:contato@limpabrasil.com.br">Contato</a></div>';
            }
        }, 5000);
    </script>
</head>
<body>
    <div class="loading">
        <div class="spinner"></div>
        <p>Carregando LimpaBrasil...</p>
    </div>
    <div id="root"></div>
</body>
</html>
`

// Backup do index.html original se necessário
const originalIndexPath = path.join(distPath, 'index.html')
if (!fs.existsSync(originalIndexPath)) {
  fs.writeFileSync(originalIndexPath, fallbackHtml)
}

console.log('✅ Build concluído!')
console.log(`📂 Arquivos prontos em: ${distPath}`)
console.log('📋 Leia o arquivo INSTALACAO.txt para instruções de upload')
