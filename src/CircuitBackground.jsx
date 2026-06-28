import React, { useEffect, useRef } from 'react';
import './CircuitBackground.css'; 

const CircuitBackground = () => {
  const svgRef = useRef(null);

 

  return (
    <div className="circuit-container">
      {/* Фон — картинка */}
      <img 
        src="/circuit-bg.webp" 
        alt="Circuit board background"
        className="circuit-bg"
      />
      
      {/* SVG с бегущими токами */} 
       <svg
          ref={svgRef}
          viewBox="0 0 1920 1080"
          className="circuit-svg"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"  //относительные кооординаты
        >
        <defs>
       

     

          {/* <!-- Градиент для яркой точки --> */}
          <radialGradient id="sparkGradient">
          <stop offset="0%" stop-color="#ffffff" />
              <stop offset="40%" stop-color="#a0e9ff" />
              <stop offset="100%" stop-color="#0088ff" />
            </radialGradient>

            
        </defs>


        <circle className="spark-dot spark-one" r="6" fill="url(#sparkGradient)" />
        <circle className="spark-dot spark-two" r="5" fill="url(#sparkGradient)" />
        

       
        
        

      </svg>
    </div>
  );
};

export default CircuitBackground;