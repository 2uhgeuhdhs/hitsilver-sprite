import { useState, useEffect } from 'react'
import { Outlet, Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Search, MapPin, Phone, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx'
import './App.css'
import { categories } from '@/data/categories.js'
import analytics from '@/utils/analyticsManager'
import { registerWebVitals } from '@/utils/webVitals'
import { products } from '@/data/products.js'
import { useCart } from '@/context/CartContext'
import { useFavorites } from '@/context/FavoritesContext'
import { CookieConsentProvider } from '@/context/cookie-consent-context'
import { CookieConsentBanner } from '@/components/ui/cookie-consent-banner'

// Import images
import hitSilverLogo from './assets/hit_silver_logo.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConsultOpen, setIsConsultOpen] = useState(false)
  const [consultForm, setConsultForm] = useState({ name: '', phone: '', email: '', comment: '' })
  const [consultSent, setConsultSent] = useState(false)
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchType, setSearchType] = useState('products')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isCallOpen, setIsCallOpen] = useState(false)
  const [isGeoOpen, setIsGeoOpen] = useState(false)
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Получаем данные о корзине
  const { totalItems } = useCart()
  const { totalFavorites } = useFavorites()

  // Регистрация Web Vitals один раз при монтировании приложения
  useEffect(() => {
    registerWebVitals()
  }, [])

  // Прокрутка к началу при смене маршрута (плавно), после отрисовки контента
  useEffect(() => {
    let raf1 = 0
    let raf2 = 0
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const y =
          window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
        if (y > 0) {
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } catch {
            // fallback для старых браузеров
            window.scrollTo(0, 0)
          }
        }
        // Трекинг просмотра страницы (включается только при consent.analytics)
        try {
          analytics.trackPageView(location.pathname)
        } catch {}
      })
    })
    return () => {
      if (raf1) cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [location.pathname])

  const handleConsultChange = (e) => {
    setConsultForm({ ...consultForm, [e.target.name]: e.target.value })
  }

  const handleConsultSubmit = (e) => {
    e.preventDefault()
    setConsultSent(true)
  }

  const handleConsultClose = () => {
    setIsConsultOpen(false)
    setConsultSent(false)
    setConsultForm({ name: '', phone: '', email: '', comment: '' })
  }

  const handleSearch = (query, type = searchType) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    if (type === 'products') {
      const results = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(results)
    } else {
      const results = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
      setSearchResults(results)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      {/* <div className="bg-tiffany-blue text-white text-center py-2 px-4 text-sm">
        Успейте выбрать подарок ко Дню отца с самовывозом из магазина или{' '}
        <a href="#" className="underline">свяжитесь с нами</a>
        <button className="ml-4 px-3 py-1 bg-white text-tiffany-blue rounded text-xs font-medium">
          Перейти к покупкам
        </button>
      </div> */}

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side icons */}
            <div className="flex items-center space-x-4 md:space-x-4">
              {/* Мобильный бургер-меню */}
              <button
                className="p-2 md:hidden hover:bg-gray-100 rounded-full"
                title="Меню"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Поиск"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Магазины на карте"
                onClick={() => setIsGeoOpen(true)}
              >
                <MapPin className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Позвонить"
                onClick={() => setIsCallOpen(true)}
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center items-center gap-2">
              <img
                src={hitSilverLogo}
                alt="HIT SILVER GALLERY logo"
                className="h-10 w-10 rounded-full object-contain"
              />
              <Link to="/" className="text-2xl font-bold tracking-wider text-black site-title">
                HIT SILVER GALLERY
              </Link>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => setIsConsultOpen(true)}
              >
                Записаться на консультацию
              </Button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                title="Профиль"
                onClick={() => navigate('/profile')}
              >
                <User className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full relative"
                title="Избранное"
                onClick={() => navigate('/favorites')}
              >
                <Heart className="h-5 w-5" />
                {totalFavorites > 0 && (
                  <span className="absolute -top-1 -right-1 bg-tiffany-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalFavorites}
                  </span>
                )}
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full relative"
                title="Корзина"
                onClick={() => navigate('/cart')}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-tiffany-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-t border-gray-100 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-4">
              <NavLink
                to="/categories/jewelry"
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'} transition-colors`
                }
              >
                Ювелирные изделия
              </NavLink>
              <NavLink
                to="/categories/watches"
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'} transition-colors`
                }
              >
                Часы
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'} transition-colors`
                }
              >
                О нас
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* Модальное окно консультации */}
      <Dialog open={isConsultOpen} onOpenChange={setIsConsultOpen}>
        <DialogContent>
          {!consultSent ? (
            <form onSubmit={handleConsultSubmit} className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Записаться на консультацию</h2>
              <input
                name="name"
                value={consultForm.name}
                onChange={handleConsultChange}
                required
                placeholder="Имя"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="phone"
                value={consultForm.phone}
                onChange={handleConsultChange}
                required
                placeholder="Телефон"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="email"
                value={consultForm.email}
                onChange={handleConsultChange}
                required
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="comment"
                value={consultForm.comment}
                onChange={handleConsultChange}
                placeholder="Комментарий"
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={handleConsultClose}>
                  Отмена
                </Button>
                <Button type="submit" className="bg-tiffany-blue text-white">
                  Отправить
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <h2 className="text-xl font-semibold mb-4">Спасибо за обращение!</h2>
              <p className="mb-4">
                Сайт находится в демо-версии, онлайн-запись временно недоступна.
                <br />
                Для консультации свяжитесь с нами по телефону или email.
              </p>
              <Button className="bg-tiffany-blue text-white" onClick={handleConsultClose}>
                Закрыть
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Модальное окно поиска */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent>
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => {
                setSearchType('products')
                handleSearch(searchQuery, 'products')
              }}
              className={`px-3 py-1 rounded ${searchType === 'products' ? 'bg-tiffany-blue text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Товары
            </button>
            <button
              onClick={() => {
                setSearchType('categories')
                handleSearch(searchQuery, 'categories')
              }}
              className={`px-3 py-1 rounded ${searchType === 'categories' ? 'bg-tiffany-blue text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Категории
            </button>
          </div>
          <input
            autoFocus
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={
              searchType === 'products' ? 'Поиск по товарам...' : 'Поиск по категориям...'
            }
            className="w-full border px-3 py-2 rounded mb-4"
          />
          <div>
            {searchType === 'products' && searchResults.length > 0 && (
              <ul className="space-y-2">
                {searchResults.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="block hover:bg-gray-100 rounded px-2 py-1"
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        {product.description.slice(0, 60)}...
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchType === 'categories' && searchResults.length > 0 && (
              <ul className="space-y-2">
                {searchResults.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={`/categories/${category.id}`}
                      className="block hover:bg-gray-100 rounded px-2 py-1"
                    >
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-gray-500">
                        {category.description?.slice(0, 60)}...
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchResults.length === 0 && searchQuery && (
              <div className="text-gray-500 text-center py-4">Ничего не найдено</div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Модальное окно звонка */}
      <Dialog open={isCallOpen} onOpenChange={setIsCallOpen}>
        <DialogContent>
          <h2 className="text-xl font-semibold mb-4">Связаться с нами</h2>
          <div className="mb-2">
            Телефон:{' '}
            <a href="tel:+79000000000" className="text-tiffany-blue hover:underline">
              +7 (900) 000-00-00
            </a>
          </div>
          <div className="mb-4">
            Email:{' '}
            <a href="mailto:info@hitsilver.ru" className="text-tiffany-blue hover:underline">
              info@hitsilver.ru
            </a>
          </div>
          <a href="tel:+79000000000">
            <Button className="bg-tiffany-blue text-white w-full">Позвонить</Button>
          </a>
        </DialogContent>
      </Dialog>

      {/* Модальное окно доставки и возврата */}
      <Dialog open={isDeliveryOpen} onOpenChange={setIsDeliveryOpen}>
        <DialogContent>
          <h2 className="text-xl font-semibold mb-4">Бесплатная доставка и возврат</h2>
          <div className="mb-4 text-gray-700">
            <p className="mb-2">
              Мы предлагаем бесплатную доставку по всей России на все заказы, независимо от суммы
              покупки.
            </p>
            <p className="mb-2">
              Срок доставки: 1–5 рабочих дней в зависимости от региона. После оформления заказа вы
              получите уведомление с трек-номером для отслеживания посылки.
            </p>
            <p className="mb-2">
              Если товар вам не подошёл, вы можете оформить бесплатный возврат в течение 14 дней с
              момента получения заказа. Все расходы по возврату мы берём на себя.
            </p>
            <p>
              Для оформления возврата или получения дополнительной информации свяжитесь с нашей
              службой поддержки по телефону или email.
            </p>
          </div>
          <Button
            className="bg-tiffany-blue text-white w-full"
            onClick={() => setIsDeliveryOpen(false)}
          >
            Понятно
          </Button>
        </DialogContent>
      </Dialog>

      {/* Модальное окно подписки на новости */}
      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent>
          <h2 className="text-xl font-semibold mb-4">Спасибо за интерес!</h2>
          <div className="mb-4 text-gray-700 text-center">
            Сайт находится в демо-версии, подписка на новости и акции временно недоступна.
          </div>
          <Button
            className="bg-tiffany-blue/80 text-white w-full rounded hover:bg-tiffany-blue transition-colors"
            onClick={() => setIsSubscribeOpen(false)}
          >
            Закрыть
          </Button>
        </DialogContent>
      </Dialog>

      {/* Модальное окно геолокации */}
      <Dialog open={isGeoOpen} onOpenChange={setIsGeoOpen}>
        <DialogContent>
          <h2 className="text-xl font-semibold mb-4">Магазины на карте</h2>
          <div className="mb-4">Показ магазинов на карте в демо-версии недоступен.</div>
          <div className="mb-2">Адрес магазина:</div>
          <div className="font-medium text-tiffany-blue mb-2">
            г. Уфа, ул. Чернышевского, 75, Галерея Арт
          </div>
          <a
            href="https://yandex.ru/maps/?text=Уфа, Чернышевского 75"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-tiffany-blue"
          >
            Открыть в Яндекс.Картах
          </a>
        </DialogContent>
      </Dialog>

      {/* Модальное окно мобильного меню */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* затемнение */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          {/* панель меню */}
          <div className="relative bg-white w-72 max-w-full h-full shadow-lg z-50 animate-slide-in-left flex flex-col">
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-1 mt-16 px-6 pb-8 overflow-y-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-3 text-lg font-medium rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `py-3 text-lg font-medium rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Каталог
              </NavLink>
              <div className="border-t my-2"></div>
              <span className="text-xs text-gray-400 mt-2 mb-1">Категории</span>
              <NavLink
                to="/categories/jewelry"
                className={({ isActive }) =>
                  `py-2 pl-2 text-base rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ювелирные изделия
              </NavLink>
              <NavLink
                to="/categories/watches"
                className={({ isActive }) =>
                  `py-2 pl-2 text-base rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Часы
              </NavLink>
              <div className="border-t my-2"></div>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-3 text-lg font-medium rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О компании
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-3 text-lg font-medium rounded ${isActive ? 'text-tiffany-blue' : 'text-gray-900 hover:text-tiffany-blue'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </NavLink>
              <button
                type="button"
                className="py-3 text-lg font-medium rounded text-gray-900 hover:text-tiffany-blue transition-colors text-left"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setIsConsultOpen(true)
                  setIsMobileMenuOpen(false)
                }}
              >
                Консультация
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Мобильная нижняя навигация */}
      <div className="md:hidden mobile-footer-buttons">
        <button onClick={() => navigate('/')} className="flex flex-col items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs">Главная</span>
        </button>
        <button onClick={() => navigate('/products')} className="flex flex-col items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-xs">Каталог</span>
        </button>
        <button
          onClick={() => navigate('/favorites')}
          className="flex flex-col items-center p-2 relative"
        >
          <Heart className="h-6 w-6" />
          {totalFavorites > 0 && (
            <span className="absolute top-0 right-0 bg-tiffany-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalFavorites}
            </span>
          )}
          <span className="text-xs">Избранное</span>
        </button>
        <button
          onClick={() => navigate('/cart')}
          className="flex flex-col items-center p-2 relative"
        >
          <ShoppingBag className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-tiffany-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="text-xs">Корзина</span>
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex flex-col items-center p-2"
        >
          <Menu className="h-6 w-6" />
          <span className="text-xs">Меню</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="md:mb-0 mobile-footer-space">
        <div key={location.pathname} className="route-fade">
          <Outlet
            context={{
              openCallModal: () => setIsCallOpen(true),
              openConsultModal: () => setIsConsultOpen(true),
              openDeliveryModal: () => setIsDeliveryOpen(true),
            }}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="mb-8 sm:mb-0">
              <h3 className="text-sm font-medium text-black mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="font-semibold">HIT SILVER GALLERY</span>
                </li>
                <li>г. Уфа, ул. Чернышевского, 75, Галерея Арт</li>
                <li>
                  <a href="mailto:info@hitsilver.ru" className="hover:text-tiffany-blue block py-1">
                    info@hitsilver.ru
                  </a>
                </li>
                <li>
                  <a href="tel:+79000000000" className="hover:text-tiffany-blue block py-1">
                    +7 (900) 000-00-00
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 sm:mb-0">
              <h3 className="text-sm font-medium text-black mb-4">О галерее</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/about" className="hover:text-tiffany-blue block py-1">
                    Украшения из серебра 925 пробы
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-tiffany-blue block py-1">
                    Современные и классические коллекции
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-tiffany-blue block py-1">
                    Индивидуальный подход
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8 sm:mb-0">
              <h3 className="text-sm font-medium text-black mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/about" className="hover:text-tiffany-blue block py-1">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-tiffany-blue block py-1">
                    Каталог
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-tiffany-blue block py-1 focus:outline-none"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsCallOpen(true)}
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-4">Новости и акции</h3>
              <p className="text-sm text-gray-600 mb-4">
                Подпишитесь, чтобы быть в курсе новых поступлений и специальных предложений.
              </p>
              <div className="flex min-w-0">
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                />
                <Button
                  className="bg-tiffany-blue/80 text-white rounded-l-none hover:bg-tiffany-blue transition-colors whitespace-nowrap"
                  type="button"
                  onClick={() => setIsSubscribeOpen(true)}
                >
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">© 2025 HIT SILVER GALLERY</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Обертка для провайдера cookie-согласия
const AppWithProviders = () => (
  <CookieConsentProvider>
    <App />
    <CookieConsentBanner />
  </CookieConsentProvider>
)

export default AppWithProviders
