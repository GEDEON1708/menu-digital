<template>
  <header class="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <button class="md:hidden text-gray-700" aria-label="Menu" @click="$emit('toggle-menu')">
        <Bars3Icon class="h-6 w-6" />
      </button>
      <div class="flex items-center space-x-3">
        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-serif text-xl">{{ brand.shortName }}</div>
        <div>
          <h1 class="font-serif text-xl md:text-2xl text-primary">{{ brand.name }}</h1>
          <p class="text-xs text-gray-500">Menu Digital</p>
        </div>
      </div>
      <button class="relative btn btn-ghost" @click="toggleCart" aria-label="Abrir carrinho">
        <ShoppingCartIcon class="h-6 w-6" />
        <span v-if="count" class="absolute -top-1 -right-1 bg-gold text-black rounded-full h-5 min-w-[1.25rem] px-1 text-xs flex items-center justify-center">{{ count }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ShoppingCartIcon, Bars3Icon } from '@heroicons/vue/24/outline'
import { useCart } from '../composables/useCart'
import { BRAND } from '../config'
const { count, toggle } = useCart()
const brand = BRAND
function toggleCart() {
  toggle(true)
}
</script>
