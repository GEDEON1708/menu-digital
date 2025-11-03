export const categories = [
  {
    id: 'menu-dia',
    name: 'Menu do Dia',
    groups: [
      {
        label: 'Acompanhamentos',
        items: [
          { id: 'feijao-preto', name: 'Feijão preto', price: 8.0, image: 'https://images.unsplash.com/photo-1608138417933-3c5ed9d0a1f1?q=80&w=1200&auto=format&fit=crop', description: 'Feijão preto caseiro, cozido lentamente.' },
          { id: 'feijao-carioca', name: 'Feijão carioca', price: 8.0, image: 'https://images.unsplash.com/photo-1625944521139-0c7e2a962f9a?q=80&w=1200&auto=format&fit=crop', description: 'Clássico feijão carioca bem temperado.' },
          { id: 'arroz-refogado', name: 'Arroz refogado', price: 7.0, image: 'https://images.unsplash.com/photo-1604908177074-0bff103b57f7?q=80&w=1200&auto=format&fit=crop', description: 'Arroz branco soltinho.' },
          { id: 'macarrao-molho', name: 'Macarrão ao molho', price: 9.0, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop', description: 'Massa com molho de tomate artesanal.' },
          { id: 'farofa', name: 'Farofa', price: 6.0, image: 'https://images.unsplash.com/photo-1599785209795-1cdb05d4953b?q=80&w=1200&auto=format&fit=crop', description: 'Farofa crocante.' },
          { id: 'salada-verde', name: 'Salada Verde', price: 10.0, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop', description: 'Mix de folhas com vinagrete.' },
          { id: 'macaxeira', name: 'Macaxeira', price: 8.0, image: 'https://images.unsplash.com/photo-1604156789978-4b3b59f27d0c?q=80&w=1200&auto=format&fit=crop', description: 'Macaxeira cozida na manteiga.' },
        ],
      },
      {
        label: 'Proteínas',
        items: [
          { id: 'linguica-toscana', name: 'Linguiça toscana', price: 15.0, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop', description: 'Linguiça toscana grelhada.' },
          { id: 'calabresa', name: 'Calabresa', price: 14.0, image: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&w=1200&auto=format&fit=crop', description: 'Calabresa acebolada.' },
          { id: 'frango-frito', name: 'Frango frito', price: 16.0, image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop', description: 'Crocante por fora, suculento por dentro.' },
          { id: 'frango-cozido', name: 'Frango cozido', price: 15.0, image: 'https://images.unsplash.com/photo-1604908554027-9f7a4f92a1db?q=80&w=1200&auto=format&fit=crop', description: 'Cozido lentamente com ervas.' },
        ],
      },
    ],
  },
  {
    id: 'executivo',
    name: 'Menu Executivo',
    items: [
      { id: 'file-mignon-madeira', name: 'Filé mignon ao molho madeira', price: 32.0, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop', description: 'Clássico com molho madeira.' },
      { id: 'risoto-camarao', name: 'Risoto de camarão', price: 28.0, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop', description: 'Cremoso e aromático.' },
      { id: 'salmao-grelhado', name: 'Salmão grelhado', price: 30.0, image: 'https://images.unsplash.com/photo-1544025162-42752296d014?q=80&w=1200&auto=format&fit=crop', description: 'Com legumes ao vapor.' },
      { id: 'frango-parmegiana', name: 'Frango à parmegiana', price: 25.0, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop', description: 'Clássico gratinado.' },
    ],
  },
  {
    id: 'fitness',
    name: 'Menu Fitness',
    items: [
      { id: 'bowl-quinoa', name: 'Bowl de quinoa com legumes', price: 22.0, image: 'https://images.unsplash.com/photo-1543339318-b43dc53f1b37?q=80&w=1200&auto=format&fit=crop', description: 'Saudável e colorido.' },
      { id: 'frango-batata-doce', name: 'Frango grelhado com batata doce', price: 24.0, image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop', description: 'Proteico e saboroso.' },
      { id: 'salada-caesar', name: 'Salada caesar com frango', price: 20.0, image: 'https://images.unsplash.com/photo-1551183053-8c042944b0de?q=80&w=1200&auto=format&fit=crop', description: 'Clássica com toque da casa.' },
      { id: 'wrap-vegetais', name: 'Wrap de vegetais com homus', price: 18.0, image: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=1200&auto=format&fit=crop', description: 'Leve e nutritivo.' },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    items: [
      { id: 'sucos-naturais', name: 'Sucos naturais (laranja, limão, abacaxi)', price: 8.0, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop', description: 'Frescos e naturais.' },
      { id: 'coca-cola', name: 'Refrigerante Coca-Cola', price: 7.0, image: 'https://images.unsplash.com/photo-1630396595603-7a2e39f60b90?q=80&w=1200&auto=format&fit=crop', description: '350ml' },
      { id: 'coca-zero', name: 'Coca-Cola Zero', price: 7.0, image: 'https://images.unsplash.com/photo-1600276039554-7f71b92da0de?q=80&w=1200&auto=format&fit=crop', description: '350ml' },
      { id: 'fanta-laranja', name: 'Fanta Laranja', price: 6.0, image: 'https://images.unsplash.com/photo-1626847037657-cbc9c38e70b4?q=80&w=1200&auto=format&fit=crop', description: '350ml' },
      { id: 'fanta-uva', name: 'Fanta Uva', price: 6.0, image: 'https://images.unsplash.com/photo-1613478223719-6e53bba9838a?q=80&w=1200&auto=format&fit=crop', description: '350ml' },
    ],
  },
]
