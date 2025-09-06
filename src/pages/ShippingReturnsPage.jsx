import React from "react";

const ShippingReturnsPage = () => (
  <div className="container mx-auto py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Доставка и возврат</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Доставка</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>Бесплатная доставка по всей России при заказе от 10 000 ₽</li>
        <li>Курьерская доставка по Москве и Санкт-Петербургу — 1-2 дня</li>
        <li>Доставка в другие регионы — 3-7 дней</li>
        <li>Возможность самовывоза из бутиков</li>
      </ul>
      <p className="text-gray-600">После оформления заказа вы получите SMS и email с подтверждением и трек-номером для отслеживания посылки.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Условия возврата</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>Возврат и обмен возможен в течение 30 дней с момента покупки</li>
        <li>Товар должен быть в идеальном состоянии, с бирками и в оригинальной упаковке</li>
        <li>Средства возвращаются тем же способом, которым была произведена оплата</li>
      </ul>
      <p className="text-gray-600">Для оформления возврата обратитесь в наш сервисный центр или заполните онлайн-заявку.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Контакты для возврата</h2>
      <p>Телефон: <a href="tel:+78001234567" className="text-tiffany-blue hover:underline">8 800 123-45-67</a></p>
      <p>Email: <a href="mailto:returns@jewelry.com" className="text-tiffany-blue hover:underline">returns@jewelry.com</a></p>
      <p>Адрес для возврата: г. Москва, ул. Престижная, 10, ТЦ "Luxury Plaza" (отдел возвратов)</p>
    </section>
  </div>
);

export default ShippingReturnsPage; 