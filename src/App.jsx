import React, { useEffect, useState } from 'react';
import CircuitBackground from './CircuitBackground';
import Background2 from './bg2';
import Header from "./components/Header";
import './App.css';


function App() {

  // Прозрачность второго фона
  const [background2Opacity, setBackground2Opacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main section');
      const section3 = sections[2];
  
      if (!section3) return;
  
      const section3Top = section3.offsetTop;
      const section3Height = section3.offsetHeight;
  
      const distance = window.scrollY - section3Top;
  
      let opacity = distance / (section3Height*0.05);
  
      opacity = Math.max(0, Math.min(1, opacity));
  
      setBackground2Opacity(opacity);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App relative min-h-screen">

      {/* ============================ */}
      {/* ФОН №1 — первые две секции */}
      {/* ============================ */}

      <div
        className="background-layer"
        style={{
          opacity: 1 - background2Opacity
        }}
      >
        <CircuitBackground />
      </div>


      {/* ============================ */}
      {/* ФОН №2 — третья и четвёртая */}
      {/* ============================ */}

      <div
        className="background-layer"
        style={{
          opacity: background2Opacity
        }}
      >
        <Background2 />
      </div>


      {/* ============================ */}
      {/* ВЕСЬ КОНТЕНТ */}
      {/* ============================ */}

      <div className="relative z-10">

        <Header />

        <main>


          {/* ==================== */}
          {/* 1. HERO */}
          {/* ==================== */}

          <section className="min-h-screen flex items-center">

            <div className="container mx-auto px-6">

              <div className="text-center">

                <h2 className="text-5xl font-black text-white drop-shadow-2xl mb-4">
                  Покажи свои идеи миллионам-
                </h2>

                <p className="text-xl text-white/90 drop-shadow-lg">
                  размести сайт в глобальной сети
                </p>

              </div>

            </div>

          </section>


          {/* ==================== */}
          {/* 2. ВОЗМОЖНОСТИ */}
          {/* ==================== */}

          <section className="min-h-screen flex items-center">

            <div className="container mx-auto px-6">

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                {[
                  "Быстрый и удобный формат донесения информации",
                  "Моментальная обратная связь",
                  "Возможность легко исправлять и корректировать"
                ].map((plan, i) => (

                  <div
                    key={i}
                    className={`hologram backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-3 border border-white/20 ${
                      i === 1
                        ? 'ring-4 ring-purple-500 ring-offset-4 ring-offset-transparent'
                        : ''
                    }`}
                  >

                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                      {plan}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* ==================== */}
           {/* 3. ОТЗЫВЫ */} 
           {/* ==================== */}
            <section className="min-h-screen flex items-center">
               <div className="container mx-auto px-6"> 
                <h2 className="text-5xl font-black text-white text-center mb-10"> Отзывы </h2> 
                <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                   {[ { 
                        text: "Все понравилось, обратимся еще", 
                        image: "/client1.jpg" 
                      }, 
                      { 
                        text: "Было мало попкорна", 
                        image: "/client2.jpg" 
                      }, 
                      { 
                        text: "Я так ничего и не понял", 
                        image: "/client3.jpg" 
                      }, 
                      { 
                        text: "Профессионально! Рекомендую", 
                        image: "/client4.jpg" 
                      } ].map((review, i) => ( 
                      
                            <div key={i} className="cardreview backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-3 border border-white/20 flex flex-col items-center" > 
                      
                             {/* Изображение */} 
                             <img src={review.image} alt="" className="w-32 h-32 object-cover rounded-2xl mb-6" /> 
                             {/* Текст */} 
                             <h3 className="text-2xl font-bold text-cyan-400 text-center break-words"> {review.text} </h3> 
                             </div> ))} 
                </div> 
              </div> 
            </section>


          {/* ==================== */}
          {/* 4. КОНТАКТЫ */}
          {/* ==================== */}

          <section className="min-h-screen flex items-center">

            <div className="container mx-auto px-6">

              <h2 className="text-5xl font-black text-white text-center">
                Контакты
              </h2>

            </div>

          </section>


        </main>

      </div>

    </div>
  );
}


export default App;