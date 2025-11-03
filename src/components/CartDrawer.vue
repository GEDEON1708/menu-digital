<template>
  <Transition name="slide">
    <aside v-if="state.isOpen" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/40" @click="toggle(false)"></div>
      <div class="absolute right-0 top-0 h-full w-[90%] sm:w-[420px] bg-white shadow-xl flex flex-col">
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h3 class="font-serif text-xl text-primary">Seu Carrinho</h3>
          <button class="p-2 rounded-md hover:bg-gray-100" @click="toggle(false)">
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <div v-if="!state.items.length" class="text-center text-gray-500 py-10">
            Seu carrinho está vazio.
          </div>
          <div v-else class="space-y-4">
            <div v-for="item in state.items" :key="item.id" class="flex gap-3">
              <img :src="item.image" :alt="item.name" class="h-16 w-20 object-cover rounded" />
              <div class="flex-1">
                <p class="font-medium">{{ item.name }}</p>
                <p class="text-sm text-gray-600">R$ {{ item.price.toFixed(2).replace('.', ',') }}</p>
                <div class="flex items-center gap-2 mt-2">
                  <button class="px-2 py-1 rounded bg-gray-100" @click="decrease(item.id)">-</button>
                  <span class="min-w-[2ch] text-center">{{ item.qty }}</span>
                  <button class="px-2 py-1 rounded bg-gray-100" @click="increase(item.id)">+</button>
                  <button class="ml-auto text-red-600 hover:underline text-sm" @click="removeItem(item.id)">Remover</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t p-4 space-y-3">
          <div class="flex items-center justify-between">
            <span class="font-medium">Subtotal</span>
            <span class="font-semibold">R$ {{ subtotal.toFixed(2).replace('.', ',') }}</span>
          </div>
          <div class="grid grid-cols-1 gap-3">
            <input v-model="state.customer.name" type="text" placeholder="Nome do cliente" class="w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" />
            <input v-model="state.customer.address" type="text" placeholder="Endereço de entrega" class="w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" />
            <select v-model="state.customer.payment" class="w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary">
              <option value="PIX">PIX</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão">Cartão</option>
            </select>
          </div>
          <button :disabled="!state.items.length" class="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" @click="sendWhatsApp">
            <span class="mr-2">Enviar pedido no WhatsApp</span>
          </button>
          <button v-if="state.items.length" class="btn w-full bg-gray-100 hover:bg-gray-200" @click="clear">Limpar carrinho</button>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useCart } from '../composables/useCart'
import { WHATSAPP_NUMBER } from '../config'

const { state, increase, decrease, removeItem, subtotal, toggle, clear, buildWhatsAppMessage } = useCart()

function sendWhatsApp() {
  const text = buildWhatsAppMessage()
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 250ms ease;
}
</style>
