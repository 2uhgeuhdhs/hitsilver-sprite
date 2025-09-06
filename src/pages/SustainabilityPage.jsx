import React from 'react'

const SustainabilityPage = () => (
  <div className="container mx-auto py-8 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Устойчивое развитие</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Экологическая ответственность</h2>
      <p className="mb-2">
        Мы стремимся минимизировать воздействие на окружающую среду на всех этапах производства.
        Используем только сертифицированные материалы и внедряем экологичные технологии.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Использование переработанного золота и серебра</li>
        <li>Сертификация бриллиантов по стандарту Kimberley</li>
        <li>Экологичная упаковка из перерабатываемых материалов</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Социальные инициативы</h2>
      <p className="mb-2">
        Мы поддерживаем местные сообщества, развиваем программы обучения и заботимся о благополучии
        сотрудников.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Благотворительные проекты и поддержка фондов</li>
        <li>Справедливые условия труда и равные возможности</li>
        <li>Обучение молодых специалистов ювелирному делу</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Будущее с заботой</h2>
      <p>
        Мы верим, что роскошь может быть этичной. Каждый ваш выбор — вклад в лучшее будущее для
        планеты и общества.
      </p>
    </section>
  </div>
)

export default SustainabilityPage
