<template>
  <Transition name="slide-left">
    <aside v-if="open" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>
      <nav class="absolute left-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl flex flex-col">
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center font-serif">{{ brand.shortName }}</div>
            <span class="font-serif text-lg text-primary">{{ brand.name }}</span>
          </div>
          <button class="p-2 rounded-md hover:bg-gray-100" @click="$emit('close')" aria-label="Fechar menu">✕</button>
        </div>
        <div class="p-4 space-y-2 overflow-y-auto">
          <button
            v-for="c in categories"
            :key="c.id"
            class="w-full flex items-center justify-between px-3 py-3 rounded-lg border text-left"
            :class="c.id === modelValue ? 'bg-[var(--bg-muted)] border-[var(--border-muted)] text-primary' : 'bg-white border-gray-200 text-gray-800'"
            @click="$emit('select', c.id)"
          >
            <span class="font-medium">{{ c.name }}</span>
            <span class="text-xs text-gray-500">ver</span>
          </button>
        </div>
      </nav>
    </aside>
  </Transition>
</template>

<script setup>
import { BRAND } from '../config'

const props = defineProps({
  open: { type: Boolean, default: false },
  categories: { type: Array, default: () => [] },
  modelValue: { type: String, default: '' },
})
const brand = BRAND
</script>

<style scoped>
.slide-left-enter-from,
.slide-left-leave-to { transform: translateX(-100%); opacity: 0 }
.slide-left-enter-active,
.slide-left-leave-active { transition: all 220ms ease }
</style>
