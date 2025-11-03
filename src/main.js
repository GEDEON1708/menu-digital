import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import { THEME, BRAND } from './config'

// Aplicar tema via CSS variables em runtime (facilita customização por restaurante)
const root = document.documentElement
if (THEME) {
	root.style.setProperty('--color-primary', THEME.primary)
	root.style.setProperty('--color-gold', THEME.gold)
	root.style.setProperty('--bg-page', THEME.pageBg)
	root.style.setProperty('--bg-muted', THEME.mutedBg)
	root.style.setProperty('--bg-muted-hover', THEME.mutedBgHover)
	root.style.setProperty('--border-muted', THEME.mutedBorder)
}

// Atualizar a meta theme-color do navegador para combinar com o tema
const metaTheme = document.querySelector('meta[name="theme-color"]')
if (metaTheme && THEME?.primary) {
	metaTheme.setAttribute('content', THEME.primary)
}

// Gerar favicon dinâmico com as iniciais da marca usando as cores do tema
try {
	const initial = (BRAND?.shortName || '').toString().slice(0, 2).toUpperCase() || 'R'
	const bg = THEME?.primary || '#8b1d1d'
	const ring = THEME?.gold || '#f59e0b'
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs><style>.t{font:700 28px 'Inter', sans-serif;}</style></defs>
	<circle cx="32" cy="32" r="30" fill="${ring}"/>
	<circle cx="32" cy="32" r="26" fill="${bg}"/>
	<text x="32" y="39" text-anchor="middle" class="t" fill="#ffffff">${initial}</text>
</svg>`
	const href = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg)
	let link = document.querySelector('link[rel="icon"]')
	if (!link) {
		link = document.createElement('link')
		link.setAttribute('rel', 'icon')
		document.head.appendChild(link)
	}
	link.setAttribute('type', 'image/svg+xml')
	link.setAttribute('href', href)
} catch {}

createApp(App).mount('#app')
