export const categories = [
  {
    id: 'jewelry',
    name: 'Ювелирные изделия',
    description: 'Элегантные и стильные украшения на каждый день',
    image: '/images/categories/jewelry.webp',
    subcategories: [
      { id: 'necklaces', name: 'Ожерелья' },
      { id: 'pendants', name: 'Подвески' },
      { id: 'earrings', name: 'Серьги' },
      { id: 'bracelets', name: 'Браслеты' },
      { id: 'rings', name: 'Кольца' }
    ]
  },
  {
    id: 'watches',
    name: 'Часы',
    description: 'Швейцарские и дизайнерские часы: классика и современность',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'men', name: 'Мужские' },
      { id: 'women', name: 'Женские' },
      { id: 'smart', name: 'Смарт‑часы' }
    ]
  },
  {
    id: 'pearls',
    name: 'Жемчужные украшения',
    description: 'Коллекция украшений с натуральным жемчугом: ожерелья, серьги, браслеты и кольца с жемчужинами.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    subcategories: []
  }
]

export function getCategoryById(categoryId) {
  return categories.find(category => category.id === categoryId)
}

export function getSubcategory(categoryId, subcategoryId) {
  const category = getCategoryById(categoryId)
  if (!category) return null
  return category.subcategories.find(sub => sub.id === subcategoryId)
} 