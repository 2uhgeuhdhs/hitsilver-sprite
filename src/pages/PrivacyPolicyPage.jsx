import React from "react";

const PrivacyPolicyPage = () => (
  <div className="container mx-auto py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Сбор и обработка данных</h2>
      <p className="mb-2">Мы собираем только те данные, которые необходимы для оформления заказов, обратной связи и улучшения качества сервиса. Ваши данные не передаются третьим лицам без вашего согласия.</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Имя, телефон, email — для связи и доставки</li>
        <li>История заказов — для персональных предложений</li>
        <li>Cookies — для аналитики и улучшения сайта</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Безопасность</h2>
      <p className="mb-2">Мы используем современные технологии защиты информации: SSL-шифрование, двухфакторная аутентификация для сотрудников, регулярные аудиты безопасности.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Права пользователя</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>Вы можете запросить удаление или изменение своих данных</li>
        <li>Вы вправе отказаться от рассылок в любой момент</li>
        <li>Для любых вопросов обращайтесь по email: <a href="mailto:privacy@jewelry.com" className="text-tiffany-blue hover:underline">privacy@jewelry.com</a></li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Изменения политики</h2>
      <p>Мы можем обновлять политику конфиденциальности. Все изменения публикуются на этой странице. Дата последнего обновления: 1 июня 2024 г.</p>
    </section>
  </div>
);

export default PrivacyPolicyPage; 