import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from '@/components/products/product-card';
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx';
import { useFavorites } from '@/context/FavoritesContext';

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toRemoveId, setToRemoveId] = useState(null);

  const handleFavToggle = (product) => {
    setToRemoveId(product.id);
    setConfirmOpen(true);
  };

  const confirmRemove = () => {
    if (toRemoveId !== null) {
      removeFromFavorites(toRemoveId);
    }
    setConfirmOpen(false);
    setToRemoveId(null);
  };

  const cancelRemove = () => {
    setConfirmOpen(false);
    setToRemoveId(null);
  };

  if (!favorites.length) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Избранное</h1>
        <p className="text-gray-600">У вас пока нет избранных товаров.</p>
        <Link to="/products" className="text-tiffany-blue underline">Перейти в каталог</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Избранное</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} isFavorite onFavToggle={() => handleFavToggle(product)} />
        ))}
      </div>
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <h2 className="text-lg font-semibold mb-4">Удалить из избранного?</h2>
          <p className="mb-6">Вы действительно хотите удалить этот товар из избранного?</p>
          <div className="flex gap-4 justify-end">
            <button onClick={cancelRemove} className="px-4 py-2 rounded bg-gray-100 text-gray-700">Отмена</button>
            <button onClick={confirmRemove} className="px-4 py-2 rounded bg-red-500 text-white">Удалить</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 