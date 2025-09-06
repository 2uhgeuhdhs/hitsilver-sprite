import React from 'react'

const user = {
  name: 'Алексей Иванов',
  email: 'alexey.ivanov@example.com',
  phone: '+7 (999) 123-45-67',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  city: 'Уфа',
  address: 'ул. Чернышевского, 75, Галерея Арт',
}

const ProfilePage = () => (
  <div className="max-w-xl mx-auto py-12 px-4">
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-8">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-4 border-4 border-tiffany-blue object-cover"
      />
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <div className="text-gray-600 mb-1">{user.email}</div>
      <div className="text-gray-600 mb-1">{user.phone}</div>
      <div className="text-gray-500 text-sm mb-4">
        {user.city}, {user.address}
      </div>
      <div className="bg-tiffany-blue/10 text-tiffany-blue px-4 py-2 rounded text-center text-sm">
        Демо-режим: профиль не редактируется
      </div>
    </div>
  </div>
)

export default ProfilePage
