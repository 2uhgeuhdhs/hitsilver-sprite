import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const GiftCardsPage = () => {
  const giftCardOptions = [
    { id: 1, name: 'Классическая', price: '5 000 ₽', image: '/images/gift-cards/classic.jpg' },
    { id: 2, name: 'Премиум', price: '10 000 ₽', image: '/images/gift-cards/premium.jpg' },
    { id: 3, name: 'Люкс', price: '25 000 ₽', image: '/images/gift-cards/luxury.jpg' },
    { id: 4, name: 'Эксклюзив', price: '50 000 ₽', image: '/images/gift-cards/exclusive.jpg' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Подарочные карты | HIT SILVER GALLERY</title>
        <meta
          name="description"
          content="Подарочные карты HIT SILVER GALLERY — идеальный подарок для ценителей ювелирных изделий."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Подарочные карты</h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Подарочная карта — идеальный подарок для тех, кто ценит возможность самостоятельного
            выбора. Наши подарочные карты доступны в различных номиналах и могут быть использованы
            для покупки любых товаров в нашем магазине.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Преимущества подарочных карт</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Действительны в течение 12 месяцев с момента покупки</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Могут быть использованы как в магазине, так и онлайн</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Элегантная упаковка в фирменном стиле</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Возможность добавить персональное сообщение</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Доставка по всей России</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Возможность проверки баланса онлайн</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Выберите подарочную карту</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {giftCardOptions.map((card) => (
            <div
              key={card.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Изображение подарочной карты</div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{card.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{card.price}</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Выбрать
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Как использовать подарочную карту</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>При покупке в магазине предъявите карту консультанту</li>
            <li>
              При покупке онлайн введите номер карты и PIN-код в соответствующее поле при оформлении
              заказа
            </li>
            <li>
              Если сумма покупки превышает номинал карты, разницу можно оплатить любым доступным
              способом
            </li>
            <li>Если сумма покупки меньше номинала карты, остаток сохраняется на карте</li>
          </ol>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Остались вопросы?</h2>
          <p className="mb-4">
            Свяжитесь с нами для получения дополнительной информации о подарочных картах
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GiftCardsPage
