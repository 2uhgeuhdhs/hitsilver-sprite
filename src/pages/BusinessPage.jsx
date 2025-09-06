import React from "react";

const BusinessPage = () => (
  <div className="container mx-auto py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Бизнес-клиентам</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Корпоративные подарки</h2>
      <p className="mb-2">Мы предлагаем эксклюзивные решения для корпоративных клиентов: подарочные наборы, брендированные украшения и аксессуары для ваших партнёров и сотрудников.</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Индивидуальный подбор подарков</li>
        <li>Гравировка логотипа компании</li>
        <li>Подарочная упаковка с фирменным стилем</li>
        <li>Скидки на крупные заказы</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Партнёрские программы</h2>
      <p className="mb-2">Станьте нашим партнёром и получите доступ к специальным условиям сотрудничества, обучающим материалам и поддержке персонального менеджера.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Связаться с отделом B2B</h2>
      <p>Для консультации и расчёта индивидуального предложения напишите на <a href="mailto:b2b@jewelry.com" className="text-tiffany-blue hover:underline">b2b@jewelry.com</a> или позвоните по телефону <a href="tel:+78001234567" className="text-tiffany-blue hover:underline">8 800 123-45-67</a></p>
    </section>
  </div>
);

export default BusinessPage; 