import { reactive, computed, watch } from 'vue'

const STORAGE_KEY = 'menu_cart_v1'

const state = reactive({
  items: [],
  customer: {
    name: '',
    address: '',
    payment: 'PIX',
  },
  isOpen: false,
})

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items, customer: state.customer }))
}
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      state.items = data.items || []
      state.customer = { ...state.customer, ...(data.customer || {}) }
    }
  } catch {}
}
load()

watch(
  () => [state.items, state.customer],
  save,
  { deep: true },
)

function addItem(product) {
  const existing = state.items.find((i) => i.id === product.id)
  if (existing) {
    existing.qty += 1
  } else {
    state.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    })
  }
}

function removeItem(id) {
  const idx = state.items.findIndex((i) => i.id === id)
  if (idx !== -1) state.items.splice(idx, 1)
}

function increase(id) {
  const item = state.items.find((i) => i.id === id)
  if (item) item.qty += 1
}

function decrease(id) {
  const item = state.items.find((i) => i.id === id)
  if (item) {
    item.qty -= 1
    if (item.qty <= 0) removeItem(id)
  }
}

function clear() {
  state.items = []
}

const count = computed(() => state.items.reduce((acc, i) => acc + i.qty, 0))
const subtotal = computed(() => state.items.reduce((acc, i) => acc + i.qty * i.price, 0))

function toggle(open) {
  if (typeof open === 'boolean') state.isOpen = open
  else state.isOpen = !state.isOpen
}

function buildWhatsAppMessage() {
  const lines = []
  lines.push('Novo Pedido:')
  state.items.forEach((i) => {
    lines.push(`- ${i.name} x${i.qty} — R$ ${i.price.toFixed(2).replace('.', ',')}`)
  })
  lines.push(`Total: R$ ${subtotal.value.toFixed(2).replace('.', ',')}`)
  lines.push(`Pagamento: ${state.customer.payment || 'PIX'}`)
  lines.push(`Nome do cliente: ${state.customer.name || ''}`)
  lines.push(`Endereço de entrega: ${state.customer.address || ''}`)
  return lines.join('\n')
}

export function useCart() {
  return {
    state,
    addItem,
    removeItem,
    increase,
    decrease,
    clear,
    count,
    subtotal,
    toggle,
    buildWhatsAppMessage,
  }
}
