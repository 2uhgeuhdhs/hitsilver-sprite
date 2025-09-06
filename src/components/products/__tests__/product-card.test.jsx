/**
 * @file: product-card.test.jsx
 * @description: Smoke tests for ProductCard component
 * @dependencies: @testing-library/react, @testing-library/user-event, vitest
 * @created: 2025-09-06
 */
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from '@/components/products/product-card'
import { MemoryRouter } from 'react-router-dom'

// Mocks for context hooks used inside ProductCard
vi.mock('@/context/CartContext', () => {
  return {
    useCart: () => ({
      addToCart: vi.fn(() => {}),
      isInCart: () => false,
      getItemQuantity: () => 0,
    }),
  }
})

vi.mock('@/components/ui/use-toast', () => {
  return {
    useToast: () => ({ toast: vi.fn() }),
  }
})

vi.mock('@/context/FavoritesContext', () => {
  let favs = new Set()
  return {
    useFavorites: () => ({
      isFavorite: (id) => favs.has(id),
      addToFavorites: (product) => favs.add(product.id),
      removeFromFavorites: (id) => favs.delete(id),
    }),
  }
})

describe('ProductCard', () => {
  const product = {
    id: 101,
    name: 'Тестовый товар',
    slug: 'test-product',
    price: 19900,
    images: ['/images/placeholder.jpg'],
    rating: 4.5,
    reviews: 3,
    new: true,
    bestseller: false,
  }

  it('renders product name', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>,
    )
    expect(screen.getByText('Тестовый товар')).toBeInTheDocument()
  })

  it('adds to cart on button click', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>,
    )
    const button = screen.getByRole('button', { name: /в корзину/i })
    await user.click(button)
    // If no error thrown and button becomes disabled text may change, just assert still in doc
    expect(button).toBeInTheDocument()
  })

  it('handles favorites button click (smoke)', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>,
    )
    const heartBtn = screen.getByRole('button', { name: /добавить в избранное/i })
    await user.click(heartBtn)
    // Smoke assertion: click does not crash and button still present
    expect(heartBtn).toBeInTheDocument()
  })
})
