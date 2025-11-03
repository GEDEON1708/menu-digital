<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div class="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm text-center p-6 md:p-8 relative">
        <img src="/app-logo.svg" alt="Logo do restaurante" class="h-16 w-16 mx-auto mb-3" />
        <h2 class="font-serif text-2xl text-primary">{{ brand.name }}</h2>
        <p class="text-gray-600 mt-1">Seja bem-vindo(a)!</p>
        <button @click="$emit('close')" class="btn btn-primary mt-5 px-5">Entrar</button>
        <button @click="$emit('close')" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700" aria-label="Fechar">
          ✕
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { BRAND } from '../config'
const props = defineProps({ show: { type: Boolean, default: false } })
const brand = BRAND
</script>

<style scoped>
.fade-enter-from, .fade-leave-to { opacity: 0 }
.fade-enter-active, .fade-leave-active { transition: opacity 200ms ease }
</style>
