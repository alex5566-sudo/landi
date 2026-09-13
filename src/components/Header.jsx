import { useState, useRef, useEffect, Fragment } from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "ua", label: "UA" },
  { code: "en", label: "EN" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const languageRef = useRef(null);
  const [langOpen, setLangOpen] = useState(false);
  const navLink =  "inline-block text-gray-600 transition-all duration-300 ease-out hover:text-purple-600 hover:scale-110";
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
  
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLangOpen(false);
      }
  
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
  
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  
  }, []);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };
  
  const toggleLanguageMenu = () => {
    setLangOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[clamp(60px,6vh,80px)] bg-white/10 backdrop-blur-md border-gray-100">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
          <img src={logo} alt="Landify Logo" className="w-8 h-8" />
           <span className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
              Landify
           </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#features" className={navLink}>{t("header.opportunities")}</a>
          <a href="#pricing" className={navLink}>{t("header.benefits")}</a>
          <a href="#reviews" className={navLink}>{t("header.reviews")}</a>
          <a href="#faq" className={navLink}>{t("header.contact")}</a>
        </nav>

           {/* Language switcher*/}
        <div className="hidden md:flex items-center text-sm font-semibold">
         {LANGUAGES.map((lang, index) => (
             <Fragment key={lang.code}>
                <button
                  onClick={() => i18n.changeLanguage(lang.code)}
                   className={`transition-all duration-300 ${
                   i18n.resolvedLanguage === lang.code
                       ? "text-teal-400 scale-110"
                       : "text-gray-400 hover:text-teal-300 hover:scale-105"
                         }`}
      >
                      {lang.label}
                   </button>

                {index < LANGUAGES.length - 1 && (
                   <span className="mx-2 text-gray-500">│</span>
                    )}
                 </Fragment>
                      ))}
              </div>

        {/* Right side CTA */}
        <div className="hidden md:flex items-center gap-4">
     

          <a href="#signup" className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
            {t("cta")}
          </a>
        </div>

          
          
          {/* Мобильные переключатели */}

          <div className="flex items-center gap-4 md:hidden">


            {/* Мобильный выбор языка */}

            <div ref={languageRef} className="relative">

       <button onClick={toggleLanguageMenu} className="font-semibold text-gray-700 text-sm">
    {i18n.resolvedLanguage.toUpperCase()}
    {langOpen ? " ▴" : " ▾"}
        </button>

      {langOpen && (

         <div className="absolute right-0 mt-2 w-20 rounded-xl bg-white shadow-lg overflow-hidden border border-gray-100">

          {LANGUAGES
           .filter(lang => lang.code !== i18n.resolvedLanguage)
           .map(lang => (

          <button
            key={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              setLangOpen(false);
            }}
            className="block w-full px-3 py-2 text-center hover:bg-gray-100 transition"
          >
            {lang.label}
          </button>

        ))}

    </div>

  )}

</div>

        {/* Burger */}

     <button className="text-2xl text-gray-700" onClick={toggleMenu}>☰
     </button>

        </div>
      </div>

      {/* Мобильное бургер-меню */}
      {open && (
        <div
          ref={burgerRef}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4"
        >
          <a href="#features" className="block text-gray-700">{t("header.opportunities")}</a>
          <a href="#pricing" className="block text-gray-700">{t("header.benefits")}</a>
          <a href="#reviews" className="block text-gray-700">{t("header.reviews")}</a>
          <a href="#faq" className="block text-gray-700">{t("header.contact")}</a>
          <hr className="border-gray-200" />
          <a href="#signup" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-black text-white py-3 hover:bg-gray-800 transition">
          {t("cta")}
        </a>

          
        </div>
      )}
    </header>
  );
}