import React from "react";

const RegistryPage = () => (
  <div className="container mx-auto py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Свадебный и подарочный реестр</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Создайте свой идеальный список подарков</h2>
      <p className="mb-2">Планируете свадьбу или важное событие? Наш реестр подарков поможет вашим близким выбрать идеальный подарок из коллекции украшений и аксессуаров.</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Лёгкое создание и управление списком онлайн</li>
        <li>Возможность делиться реестром с гостями</li>
        <li>Персональные рекомендации от наших консультантов</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Как это работает?</h2>
      <ol className="list-decimal pl-6 text-gray-700 mb-2">
        <li>Зарегистрируйтесь на сайте или в бутике</li>
        <li>Выберите понравившиеся украшения и аксессуары</li>
        <li>Отправьте ссылку на реестр гостям</li>
        <li>Получайте уведомления о выбранных подарках</li>
      </ol>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Связаться с консультантом</h2>
      <p>Наши специалисты помогут подобрать подарки для любого события. Телефон: <a href="tel:+78001234567" className="text-tiffany-blue hover:underline">8 800 123-45-67</a></p>
    </section>
  </div>
);

export default RegistryPage; 