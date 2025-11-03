<template>
  <div>
    <Header @toggle-menu="onToggleMenu" />
    <BannerCarousel />
    <CategoryFilter :categories="flatCategories" v-model="active" />

  <main class="max-w-6xl mx-auto px-4 py-6 space-y-10">
      <!-- Menu do Dia (com grupos) -->
      <section v-if="active === 'menu-dia'">
        <h2 class="font-serif text-2xl text-primary mb-2">Menu do Dia</h2>
        <div class="h-0.5 w-16 bg-gold rounded mb-4"></div>
        <div v-for="group in menuDia.groups" :key="group.label" class="mb-8">
          <h3 class="font-serif text-xl text-primary/90 mb-3">{{ group.label }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            <ProductCard v-for="p in group.items" :key="p.id" :product="p" />
          </div>
        </div>
      </section>

      <!-- Outras categorias -->
      <section v-else>
        <h2 class="font-serif text-2xl text-primary mb-2">{{ currentCategory?.name }}</h2>
        <div class="h-0.5 w-16 bg-gold rounded mb-4"></div>
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          <ProductCard v-for="p in itemsForActive" :key="p.id" :product="p" />
        </div>
      </section>
    </main>

    <Footer />
    <CartDrawer />
    <MobileNavDrawer :open="showMobileNav" :categories="flatCategories" :model-value="active" @close="showMobileNav=false" @select="onSelectCategory" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import BannerCarousel from './components/BannerCarousel.vue'
import CategoryFilter from './components/CategoryFilter.vue'
import ProductCard from './components/ProductCard.vue'
import CartDrawer from './components/CartDrawer.vue'
import Footer from './components/Footer.vue'
import MobileNavDrawer from './components/MobileNavDrawer.vue'
import { categories } from './data/menu'

const active = ref('menu-dia')
const showMobileNav = ref(false)

const menuDia = categories.find((c) => c.id === 'menu-dia')

const otherCategories = categories.filter((c) => c.id !== 'menu-dia')
const flatCategories = [
  { id: 'menu-dia', name: 'Menu do Dia' },
  ...otherCategories.map((c) => ({ id: c.id, name: c.name })),
]

const currentCategory = computed(() => categories.find((c) => c.id === active.value))

const itemsForActive = computed(() => {
  const cat = currentCategory.value
  if (!cat) return []
  if (cat.groups) {
    return cat.groups.flatMap((g) => g.items)
  }
  return cat.items || []
})

function onToggleMenu() {
  showMobileNav.value = true
}

function onSelectCategory(id) {
  active.value = id
  showMobileNav.value = false
}

</script>
