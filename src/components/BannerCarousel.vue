<template>
  <div class="mt-16 md:mt-20">
    <div class="max-w-6xl mx-auto px-4">
      <div class="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-2">
        <div v-for="b in banners" :key="b.id" class="snap-center min-w-[85%] md:min-w-[48%] lg:min-w-[32%]">
          <div class="relative h-40 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow">
            <img :src="b.image" :alt="b.alt" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute bottom-0 p-4 text-white">
              <h3 class="font-serif text-xl md:text-2xl">{{ b.title }}</h3>
              <p class="text-sm opacity-90">{{ b.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const banners = [
  { id: 1, title: 'Sabores do dia', subtitle: 'Ingredientes frescos selecionados', alt: 'Prato sofisticado', image: 'https://images.unsplash.com/photo-1541542684-4a89a1a27c54?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Menu Executivo', subtitle: 'Almoço especial', alt: 'Menu executivo', image: 'https://images.unsplash.com/photo-1604908177049-89bd042f1cae?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Drinks e Sucos', subtitle: 'Refrescos artesanais', alt: 'Bebidas', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop' },
]
</script>
