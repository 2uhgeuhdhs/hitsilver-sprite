import React from 'react'

const PressPage = () => (
  <div className="container mx-auto py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Пресса</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Пресс-релизы и новости</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>
          <b>Май 2024:</b> Открытие нового бутика в Санкт-Петербурге
        </li>
        <li>
          <b>Апрель 2024:</b> Запуск коллекции "Морское чудо"
        </li>
        <li>
          <b>Март 2024:</b> Победа в конкурсе "Лучший ювелирный бренд года"
        </li>
      </ul>
      <p className="text-gray-600">
        Следите за нашими новостями и событиями в социальных сетях и на сайте.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Контакты для СМИ</h2>
      <p>
        Для получения пресс-материалов, организации интервью и сотрудничества обращайтесь по email:{' '}
        <a href="mailto:press@jewelry.com" className="text-tiffany-blue hover:underline">
          press@jewelry.com
        </a>
      </p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Медиа-галерея</h2>
      <p>Фотографии и логотипы доступны по запросу для публикаций и анонсов.</p>
    </section>
  </div>
)

export default PressPage
