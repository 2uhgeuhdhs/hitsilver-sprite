import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import hitSilverLogo from '../assets/hit_silver_logo.png'

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // В реальном приложении здесь будет обработка формы
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={hitSilverLogo} alt="HIT SILVER GALLERY logo" className="mx-auto mb-4 w-20 h-20 object-contain rounded-full shadow border border-gray-200" />
          <h1 className="text-3xl font-bold mb-2 tracking-wider">HIT SILVER GALLERY</h1>
          <p className="text-lg text-gray-700 mb-4">Галерея украшений из серебра 925 пробы</p>
          <div className="mb-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-gray-700 justify-center">
              <MapPin className="w-5 h-5 text-tiffany-blue" />
              <span>г. Уфа, ул. Чернышевского, 75, Галерея Арт</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 justify-center">
              <Mail className="w-5 h-5 text-tiffany-blue" />
              <a href="mailto:info@hitsilver.ru" className="hover:underline text-tiffany-blue">info@hitsilver.ru</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700 justify-center">
              <span className="font-semibold">Телефон:</span>
              <a href="tel:+79000000000" className="hover:underline text-tiffany-blue">+7 (900) 000-00-00</a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700 justify-center mb-2">
            <Clock className="w-5 h-5 text-tiffany-blue" />
            <span>Пн–Вс: 10:00–21:00</span>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Свяжитесь с нами</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto">
            <div>
              <label className="block mb-1 font-medium">Ваше имя</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Введите имя" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Ваш email" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Сообщение</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="4" placeholder="Ваш вопрос или сообщение"></textarea>
            </div>
            <button type="submit" className="w-full bg-tiffany-blue text-white py-2 rounded hover:bg-tiffany-blue-dark transition">Отправить</button>
          </form>
        </div>
      </section>
    </div>
  )
} 