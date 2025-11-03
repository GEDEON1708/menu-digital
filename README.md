# Menu Digital (Vue 3 + Tailwind)

Site de menu digital responsivo, mobile-first, com carrinho e integração com WhatsApp.

## Tecnologias
- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- Heroicons

## Rodando localmente
1. Instale Node.js LTS.
2. Na pasta do projeto, instale dependências e rode o servidor de desenvolvimento:

```powershell
npm install
npm run dev
```

Abra a URL indicada (geralmente http://localhost:5173).

## Build de produção
```powershell
npm run build
npm run preview
```

Os arquivos estáticos ficam em `dist/`.

## Configurar WhatsApp
Edite `src/config.js` e substitua `WHATSAPP_NUMBER` pelo número do restaurante (apenas dígitos, com DDI e DDD). Ex.: `5581987654321`.

## Deploy (estático)
- Netlify: aponte para o repo/pasta, defina comando de build `npm run build` e diretório `dist`.
- Vercel: importe o projeto, ele detecta Vite automaticamente (ou configure build `npm run build` e output `dist`).
- GitHub Pages: faça `npm run build` e publique o conteúdo de `dist` no Pages.

## Estrutura
- `src/App.vue` — página principal
- `src/components/*` — Header, Banners, Filtro, Card de produto e Carrinho lateral
- `src/composables/useCart.js` — estado reativo do carrinho (localStorage)
- `src/data/menu.js` — dados de categorias e itens (placeholders Unsplash)
- `src/styles/tailwind.css` — estilos base com Tailwind

## Personalização visual
Cores e fontes estão em `tailwind.config.cjs` e no `index.html` (Google Fonts). Paleta: verde escuro (#1a472a), dourado (#d4af37), branco e cinza claro.

## Observações
- Este projeto é totalmente frontend (estático), sem backend.
- Ícones do Heroicons são usados nos botões/ações.
