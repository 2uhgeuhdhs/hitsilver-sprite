import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);

  if (!cartItems.length) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>
        <p className="text-gray-600">Ваша корзина пуста.</p>
        <Link to="/products" className="text-tiffany-blue underline">Перейти в каталог</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Корзина</h1>
      <div className="space-y-6 mb-8">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <img src={item.images?.[0]} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <Link to={`/products/${item.slug}`} className="font-medium hover:underline">{item.name}</Link>
              <div className="text-gray-500 text-sm">{item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-100 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-100 rounded">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:underline">Удалить</button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-semibold">Итого:</div>
        <div className="text-2xl font-bold text-tiffany-blue">{totalPrice.toLocaleString('ru-RU')} ₽</div>
      </div>
      <Button className="bg-tiffany-blue text-white w-full" onClick={() => setCheckoutOpen(true)}>Оформить заказ</Button>
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent>
          <h2 className="text-xl font-semibold mb-4">Оформление заказа</h2>
          <p className="mb-6">Сайт находится в демо-версии, оформление заказа временно недоступно.<br/>Пожалуйста, свяжитесь с нами для оформления покупки.</p>
          <Button className="bg-tiffany-blue text-white w-full" onClick={() => setCheckoutOpen(false)}>Закрыть</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
} 