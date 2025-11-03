<template>
  <div class="sticky top-14 md:top-16 z-30 bg-white/80 backdrop-blur border-b border-[var(--border-muted)]">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center gap-2 overflow-x-auto py-3">
        <button
          v-for="c in categories"
          :key="c.id"
          class="px-4 py-2 rounded-full whitespace-nowrap transition-all"
          :class="c.id === modelValue ? 'bg-primary text-white shadow' : 'bg-white text-gray-700 hover:bg-[var(--bg-muted-hover)] border border-[var(--border-muted)]'"
          @click="$emit('update:modelValue', c.id)"
        >
          {{ c.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, required: true },
})
defineEmits(['update:modelValue'])
</script>
