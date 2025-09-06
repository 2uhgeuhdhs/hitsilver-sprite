import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Загружаем корзину из localStorage при инициализации
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (error) {
        console.error('Ошибка при загрузке корзины:', error)
        setCartItems([])
      }
    }
  }, [])

  // Обновляем localStorage при изменении корзины
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } else {
      localStorage.removeItem('cart')
    }

    // Обновляем общее количество товаров и общую стоимость
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const price = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    setTotalItems(itemCount)
    setTotalPrice(price)
  }, [cartItems])

  // Добавить товар в корзину
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingItemIndex >= 0) {
        // Если товар уже есть, увеличиваем количество
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return updatedItems
      } else {
        // Если товара нет, добавляем новый
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  // Удалить товар из корзины
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Изменить количество товара в корзине
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }

  // Очистить корзину
  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  // Проверить, есть ли товар в корзине
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId)
  }

  // Получить количество конкретного товара в корзине
  const getItemQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  const value = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContext
