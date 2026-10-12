const Background3 = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* Основной фон */}
      <img
        src="/bg3.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Размытая зона перехода */}
      <div
        className="absolute top-0 left-0 right-0 h-64 backdrop-blur-xl"
        style={{
          maskImage:
            'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
        }}
      />

    </div>
  );
};

export default Background3;