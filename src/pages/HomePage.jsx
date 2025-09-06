import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useOutletContext } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ProductGrid } from '@/components/products/product-grid'
import { getNewProducts, getBestsellers, products } from '@/data/products'
import hitSilverLogo from '../assets/hit_silver_logo.png'

// Import images
import necklacesPendants from '../assets/necklaces_pendants.webp'
import earrings from '../assets/earrings.webp'
import rings from '../assets/rings.webp'
import bracelets from '../assets/bracelets.webp'

const premiumCollectionImg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
const pearlJewelryImg =
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'

function HomePage() {
  const newProducts = getNewProducts(4)
  const bestsellers = getBestsellers(4)
  const userProducts = products.filter((p) => p.id >= 9 && p.id <= 18)
  const { openCallModal, openConsultModal, openDeliveryModal } = useOutletContext()

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'HIT SILVER GALLERY',
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="flex flex-col lg:flex-row min-h-[400px] items-center justify-center py-12">
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <img
              src={hitSilverLogo}
              alt="HIT SILVER GALLERY logo"
              className="w-32 h-32 object-contain rounded-full mb-4 shadow border border-gray-200"
              width="128"
              height="128"
              decoding="async"
            />
            <h1 className="text-4xl font-light text-black mb-4 tracking-wider">
              HIT SILVER GALLERY
            </h1>
            <p className="text-lg text-gray-700 mb-2">Галерея украшений из серебра 925 пробы</p>
            <p className="text-gray-600 mb-4">г. Уфа, ул. Чернышевского, 75, Галерея Арт</p>
            <Button asChild className="bg-tiffany-blue text-white hover:bg-tiffany-blue-dark">
              <Link to="/products">Смотреть коллекцию</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-900">Новые поступления</h2>
            <Button variant="outline" asChild>
              <Link to="/products">Смотреть все</Link>
            </Button>
          </div>
          <ProductGrid products={newProducts} />
        </div>
      </section>

      {/* Пользовательские товары */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-900">Эксклюзивные новинки галереи</h2>
          </div>
          <ProductGrid products={userProducts} />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">Категории товаров</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Наши ювелирные изделия отличаются непревзойденным качеством и изысканным дизайном,
              воплощая в себе традиции мастерства и современные тенденции.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
            <Link
              to="/categories/jewelry?subcategory=necklaces"
              className="text-center group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={necklacesPendants}
                  alt="Ожерелья и подвески"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-medium">Ожерелья и подвески</h3>
            </Link>
            <Link
              to="/categories/jewelry?subcategory=earrings"
              className="text-center group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={earrings}
                  alt="Серьги"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-medium">Серьги</h3>
            </Link>
            <Link
              to="/categories/jewelry?subcategory=rings"
              className="text-center group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={rings}
                  alt="Кольца"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-medium">Кольца</h3>
            </Link>
            <Link
              to="/categories/jewelry?subcategory=bracelets"
              className="text-center group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={bracelets}
                  alt="Браслеты"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-medium">Браслеты</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-16 bg-tiffany-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">К вашим услугам</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Нет вопроса слишком маленького или запроса слишком большого для наших консультантов.
              От выбора кольца для помолвки или подарка до предоставления консультаций в магазине
              или онлайн, мы всегда к вашим услугам.
            </p>
            <Button
              className="mt-6 bg-white text-tiffany-blue hover:bg-gray-100"
              onClick={openCallModal}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Shopping Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-8">Опыт покупок</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="text-lg font-medium mb-2">Бесплатная доставка и возврат</h3>
              <p className="text-gray-600 text-sm">
                Мы предлагаем бесплатную доставку и возврат на все заказы.
              </p>
              <Button variant="outline" size="sm" className="mt-4" onClick={openDeliveryModal}>
                Подробнее
              </Button>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🛎️</div>
              </div>
              <h3 className="text-lg font-medium mb-2">Обслуживание клиентов</h3>
              <p className="text-gray-600 text-sm">Наши эксперты всегда готовы помочь вам.</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={openCallModal}>
                Связаться с нами
              </Button>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">📅</div>
              </div>
              <h3 className="text-lg font-medium mb-2">Запись на консультацию</h3>
              <p className="text-gray-600 text-sm">
                Мы рады помочь вам с консультацией в магазине или онлайн.
              </p>
              <Button variant="outline" size="sm" className="mt-4" onClick={openConsultModal}>
                Записаться
              </Button>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🎁</div>
              </div>
              <h3 className="text-lg font-medium mb-2">Подарочная упаковка</h3>
              <p className="text-gray-600 text-sm">
                Ваша покупка будет упакована в нашу фирменную подарочную упаковку.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link to="/categories/gifts">Подарки</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
