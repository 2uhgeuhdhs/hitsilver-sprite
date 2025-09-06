import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>О нас | HIT SILVER GALLERY</title>
        <meta name="description" content="Информация о компании, истории и ценностях HIT SILVER GALLERY." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">О нашей компании</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Мы являемся ведущим ювелирным брендом, специализирующимся на создании уникальных украшений высочайшего качества.
            Наша история началась более 20 лет назад, и с тех пор мы стремимся к совершенству в каждой детали.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Наша история</h2>
          <p className="mb-4">
            Основанная в начале 2000-х годов, наша компания быстро завоевала репутацию благодаря непревзойденному мастерству
            и инновационному дизайну. Мы гордимся тем, что сочетаем традиционные техники с современными технологиями.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Наши ценности</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">Качество без компромиссов</li>
            <li className="mb-2">Инновации и творческий подход</li>
            <li className="mb-2">Этичное производство</li>
            <li className="mb-2">Внимание к каждому клиенту</li>
            <li className="mb-2">Устойчивое развитие</li>
          </ul>
          
          <p className="italic text-gray-600 mt-8">
            "Наша миссия — создавать украшения, которые становятся частью важных моментов вашей жизни."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 