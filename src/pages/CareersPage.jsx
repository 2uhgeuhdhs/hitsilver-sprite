import React from "react";

const CareersPage = () => (
  <div className="container mx-auto py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Карьера</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Работа в нашей компании</h2>
      <p className="mb-2">Мы ценим талант, инициативу и стремление к совершенству. Присоединяйтесь к команде профессионалов, создающих ювелирные шедевры!</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Современные условия труда и комфортные офисы</li>
        <li>Корпоративное обучение и развитие</li>
        <li>Скидки на продукцию компании</li>
        <li>Дружный коллектив и поддержка наставников</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Открытые вакансии</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>Ювелир-дизайнер</li>
        <li>Консультант в бутик</li>
        <li>Менеджер по работе с VIP-клиентами</li>
        <li>Маркетолог</li>
        <li>Стажёр (обучение профессии с нуля)</li>
      </ul>
      <p className="text-gray-600">Отправьте резюме на <a href="mailto:hr@jewelry.com" className="text-tiffany-blue hover:underline">hr@jewelry.com</a> или заполните анкету на сайте.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Стажировки и обучение</h2>
      <p>Мы поддерживаем молодых специалистов и предлагаем оплачиваемые стажировки с возможностью дальнейшего трудоустройства.</p>
    </section>
  </div>
);

export default CareersPage; 