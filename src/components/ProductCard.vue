<template>
  <div class="card group h-full flex flex-col transition duration-300 hover:shadow-lg hover:-translate-y-0.5">
    <div class="relative aspect-square md:aspect-[3/2] overflow-hidden">
      <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      <button @click="add" class="absolute bottom-2 right-2 md:bottom-3 md:right-3 btn btn-primary shadow-md px-2.5 py-1 text-xs md:px-3 md:py-1.5 md:text-sm">
        <PlusIcon class="h-5 w-5 mr-1" /> Adicionar
      </button>
    </div>
    <div class="p-2.5 md:p-4 flex-1 flex flex-col">
      <h4 class="font-serif text-base md:text-lg text-primary leading-snug">{{ product.name }}</h4>
      <p class="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{{ product.description }}</p>
      <div class="mt-auto pt-1.5 md:pt-2">
        <p class="text-sm md:text-[15px] font-semibold text-gray-900">R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import { useCart } from '../composables/useCart'
const props = defineProps({
  product: { type: Object, required: true },
})
const { addItem } = useCart()
function add() {
  addItem(props.product)
}
</script>
