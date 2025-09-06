import React from "react";

const FAQPage = () => (
  <div className="bg-white min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-4">Часто задаваемые вопросы</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Ответы на наиболее распространённые вопросы о наших услугах и продуктах.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Как выбрать размер кольца?</h3>
          <p className="text-gray-600">
            Вы можете определить размер кольца, измерив окружность вашего пальца или посетив наш магазин, 
            где наши консультанты помогут вам определить точный размер.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Как ухаживать за ювелирными изделиями?</h3>
          <p className="text-gray-600">
            Мы рекомендуем регулярно чистить ваши украшения мягкой тканью, избегать контакта с химическими 
            веществами и хранить в отдельных футлярах для предотвращения царапин.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Какая гарантия предоставляется на изделия?</h3>
          <p className="text-gray-600">
            Мы предоставляем гарантию на все наши изделия сроком на 2 года с момента покупки. Гарантия 
            распространяется на производственные дефекты и не покрывает повреждения, вызванные неправильным использованием.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Можно ли вернуть или обменять украшения?</h3>
          <p className="text-gray-600">
            Да, вы можете вернуть или обменять изделие в течение 30 дней после покупки при условии, что 
            украшение находится в идеальном состоянии и сохранены все бирки и упаковка.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FAQPage; 