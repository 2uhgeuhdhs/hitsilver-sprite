import React from 'react';
import { Helmet } from 'react-helmet-async';

const CarePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Уход за украшениями | HIT SILVER GALLERY</title>
        <meta name="description" content="Советы по уходу за ювелирными изделиями HIT SILVER GALLERY." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Уход за украшениями</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Правильный уход за ювелирными изделиями поможет сохранить их красоту и блеск на долгие годы. 
            Мы подготовили для вас полезные советы и рекомендации.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Общие рекомендации</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">Храните украшения отдельно друг от друга, чтобы избежать царапин</li>
            <li className="mb-2">Снимайте украшения перед сном, занятиями спортом и домашними делами</li>
            <li className="mb-2">Избегайте контакта с парфюмерией, косметикой и химическими средствами</li>
            <li className="mb-2">Регулярно очищайте изделия мягкой тканью</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Уход за золотыми изделиями</h2>
          <p className="mb-4">
            Золотые украшения можно очищать мягким мыльным раствором с помощью мягкой щетки. 
            После очистки тщательно промойте изделие в теплой воде и высушите мягкой тканью.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Уход за серебряными изделиями</h2>
          <p className="mb-4">
            Серебро имеет свойство темнеть со временем. Для очистки используйте специальные средства для серебра 
            или мягкую ткань, пропитанную раствором пищевой соды и воды.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Профессиональная чистка</h2>
          <p className="mb-4">
            Мы рекомендуем проводить профессиональную чистку ваших украшений не реже одного раза в год. 
            Наши специалисты помогут вернуть изделиям первоначальный блеск и проверят надежность креплений.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="font-medium">
              Для получения индивидуальной консультации по уходу за вашими украшениями, 
              пожалуйста, свяжитесь с нашими специалистами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePage; 