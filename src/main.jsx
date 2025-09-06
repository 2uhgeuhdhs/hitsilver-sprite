import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CarePage from './pages/CarePage.jsx'
import ConsultationPage from './pages/ConsultationPage.jsx'
import ShippingReturnsPage from './pages/ShippingReturnsPage.jsx'
import GiftCardsPage from './pages/GiftCardsPage.jsx'
import SustainabilityPage from './pages/SustainabilityPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import RegistryPage from './pages/RegistryPage.jsx'
import BusinessPage from './pages/BusinessPage.jsx'
import PressPage from './pages/PressPage.jsx'
import FoundationPage from './pages/FoundationPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import CartPage from './pages/CartPage.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastProvider } from './components/ui/use-toast'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
      { path: 'categories/:categoryId', element: <CategoryPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'care', element: <CarePage /> },
      { path: 'consultation', element: <ConsultationPage /> },
      { path: 'shipping-returns', element: <ShippingReturnsPage /> },
      { path: 'gift-cards', element: <GiftCardsPage /> },
      { path: 'sustainability', element: <SustainabilityPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'registry', element: <RegistryPage /> },
      { path: 'business', element: <BusinessPage /> },
      { path: 'press', element: <PressPage /> },
      { path: 'foundation', element: <FoundationPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'cart', element: <CartPage /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <FavoritesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FavoritesProvider>
    </ToastProvider>
  </StrictMode>,
)
