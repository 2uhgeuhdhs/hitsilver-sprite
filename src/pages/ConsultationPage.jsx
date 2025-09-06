import React from 'react';
import { Helmet } from 'react-helmet';

const ConsultationPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Консультации | HIT SILVER GALLERY</title>
        <meta name="description" content="Запишитесь на персональную консультацию с экспертами HIT SILVER GALLERY." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Персональные консультации</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Наши эксперты готовы помочь вам с выбором идеального украшения для любого случая.
            Запишитесь на персональную консультацию в нашем салоне или онлайн.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Виды консультаций</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">В салоне</h3>
              <p className="mb-3">
                Посетите наш салон для персональной встречи с ювелирным консультантом.
                Вы сможете примерить украшения и получить профессиональные рекомендации.
              </p>
              <p className="font-medium">Продолжительность: 45-60 минут</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Онлайн</h3>
              <p className="mb-3">
                Удобная альтернатива для тех, кто не может посетить салон.
                Консультация проводится через видеосвязь с нашим экспертом.
              </p>
              <p className="font-medium">Продолжительность: 30-45 минут</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Как записаться</h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">Выберите удобный для вас формат консультации</li>
            <li className="mb-2">Заполните форму ниже или позвоните нам</li>
            <li className="mb-2">Выберите удобную дату и время</li>
            <li className="mb-2">Получите подтверждение записи на электронную почту</li>
          </ol>
          
          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-medium mb-4">Запись на консультацию</h3>
            <p className="mb-4">Заполните форму ниже, и наш менеджер свяжется с вами в ближайшее время для подтверждения записи.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="consultationType" className="block mb-1 font-medium">Тип консультации</label>
                <select 
                  id="consultationType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Выберите тип консультации</option>
                  <option value="inStore">В салоне</option>
                  <option value="online">Онлайн</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Сообщение (необязательно)</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Укажите дополнительную информацию, если необходимо"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage; 