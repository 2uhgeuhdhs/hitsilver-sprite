import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [totalFavorites, setTotalFavorites] = useState(0);

  // Загружаем избранное из localStorage при инициализации
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  // Сохраняем избранное в localStorage и обновляем счётчик
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      localStorage.removeItem('favorites');
    }
    setTotalFavorites(favorites.length);
  }, [favorites]);

  // Добавить в избранное
  const addToFavorites = (product) => {
    setFavorites(prev => {
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Удалить из избранного
  const removeFromFavorites = (productId) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  };

  // Проверить, есть ли товар в избранном
  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  // Получить количество избранных
  const getFavoritesCount = () => favorites.length;

  const value = {
    favorites,
    totalFavorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}; 