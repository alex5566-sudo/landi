import React from 'react';
import CircuitBackground from './CircuitBackground';
import './App.css'; // если нужно

function App() {
  return (
    <div className="App relative min-h-screen">
      {/* 1. Фон с токами — на весь экран, самый нижний слой */}
      <CircuitBackground />

      {/* 2. Всё остальное — поверх фона */}
      <div className="relative z-10"> {/* z-10 чтобы точно поверх SVG */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm"> {/* Полупрозрачный хедер */}
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Landify</h1>
            <nav className="hidden md:flex gap-10 text-gray-700">
              <a href="#" className="hover:text-purple-600 transition">Возможности</a>
              <a href="#" className="hover:text-purple-600 transition">Цены</a>
              <a href="#" className="hover:text-purple-600 transition">Контакты</a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white drop-shadow-2xl mb-4">
              Выберите свой план
            </h2>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Гибкие тарифы под любой бюджет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Стартап", "Команда", "Enterprise"].map((plan, i) => (
              <div
                key={i}
                className={`bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-3 border border-white/20 ${
                  i === 1 ? 'ring-4 ring-purple-500 ring-offset-4 ring-offset-transparent' : ''
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan}</h3>
                <p className="text-5xl font-black mb-6 text-gray-900">
                  {i === 0 ? '₽0' : i === 1 ? '₽990' : 'Договор'}
                  <span className="text-lg font-normal text-gray-500">/{i < 2 ? 'мес' : ''}</span>
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> До 10 проектов</li>
                  <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Неограниченные пользователи</li>
                  <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Поддержка 24/7</li>
                </ul>
                <button
                  className={`w-full py-4 rounded-2xl font-bold transition ${
                    i === 1
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {i === 2 ? 'Связаться' : 'Выбрать'}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;