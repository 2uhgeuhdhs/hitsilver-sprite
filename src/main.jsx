import { StrictMode, Suspense, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.jsx'))
const CategoryPage = lazy(() => import('./pages/CategoryPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const CarePage = lazy(() => import('./pages/CarePage.jsx'))
const ConsultationPage = lazy(() => import('./pages/ConsultationPage.jsx'))
const ShippingReturnsPage = lazy(() => import('./pages/ShippingReturnsPage.jsx'))
const GiftCardsPage = lazy(() => import('./pages/GiftCardsPage.jsx'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage.jsx'))
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const RegistryPage = lazy(() => import('./pages/RegistryPage.jsx'))
const BusinessPage = lazy(() => import('./pages/BusinessPage.jsx'))
const PressPage = lazy(() => import('./pages/PressPage.jsx'))
const FoundationPage = lazy(() => import('./pages/FoundationPage.jsx'))
const FAQPage = lazy(() => import('./pages/FAQPage.jsx'))
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'))
const CartPage = lazy(() => import('./pages/CartPage.jsx'))
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
    <HelmetProvider>
      <Suspense fallback={<div style={{padding:20}}>Загрузка...</div>}>
        <ToastProvider>
          <FavoritesProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </FavoritesProvider>
        </ToastProvider>
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
