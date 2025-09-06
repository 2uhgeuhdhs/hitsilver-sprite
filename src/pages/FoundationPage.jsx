import React from "react";

const FoundationPage = () => (
  <div className="container mx-auto py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-6">Фонд компании</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">О фонде</h2>
      <p className="mb-2">Фонд нашей компании создан для поддержки социальных, образовательных и экологических инициатив. Мы верим, что бизнес должен приносить пользу обществу и окружающей среде.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Наши проекты</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-2">
        <li>Стипендии для студентов ювелирных специальностей</li>
        <li>Благотворительные аукционы и сборы средств</li>
        <li>Посадки деревьев и поддержка экопроектов</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Как поддержать фонд?</h2>
      <p>Вы можете сделать пожертвование или стать волонтёром. Для этого напишите на <a href="mailto:foundation@jewelry.com" className="text-tiffany-blue hover:underline">foundation@jewelry.com</a> или обратитесь к нашим консультантам в бутиках.</p>
    </section>
  </div>
);

export default FoundationPage; 