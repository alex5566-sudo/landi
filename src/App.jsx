import React from 'react';
import CircuitBackground from './CircuitBackground';
import Header from "./components/Header";
import './App.css'; // если нужно

function App() {
  return (
    <div className="App relative min-h-screen">
      {/* 1. Фон с токами — на весь экран, самый нижний слой */}
      <CircuitBackground />

      {/* 2. Всё остальное — поверх фона */}
      <div className="relative z-10"> {/* z-10 чтобы точно поверх SVG */}
      <Header />

        <main className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white drop-shadow-2xl mb-4">
              Покажи свои идеи миллионам-
            </h2>
            <p className="text-xl text-white/90 drop-shadow-lg">
              размести сайт в глобальной сети
            </p>
          </div>

    

        


          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Быстрый и удобный формат донесения информации", "Моментальная обратная связь", "Возможность легко исправлять и корректировать"].map((plan, i) => (
              <div
                key={i}
                className={`hologram backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-3 border border-white/20 ${
                  i === 1 ? 'ring-4 ring-purple-500 ring-offset-4 ring-offset-transparent' : ''
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{plan}</h3>
              


              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;