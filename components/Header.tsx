
import React, { useState, useEffect } from 'react';

/**
 * A reusable SVG icon component for WhatsApp.
 * @returns {JSX.Element} The WhatsApp SVG icon.
 */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px]">
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.15 1.61 5.96L0 24l6.2-1.6A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.09-1.42l-.36-.21-3.64.94.97-3.54-.23-.37A9.94 9.94 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.48-7.75c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.2.3-.75.97-.92 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5a9.04 9.04 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.03-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.56-.35Z" />
  </svg>
);

/**
 * The main header component for the website.
 * It includes the brand logo, navigation links, a call-to-action button,
 * and a responsive mobile menu.
 * @returns {JSX.Element} The sticky header element.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#shop", text: "المتجر" },
    { href: "#gallery", text: "معرضنا" },
    { href: "#about", text: "من نحن" },
    { href: "#contact", text: "تواصل" },
  ];

  return (
    <header aria-label="رأس الصفحة" className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="nav max-w-[1200px] mx-auto flex items-center gap-4 px-4 py-2.5" aria-label="التنقل الرئيسي">
        <a className="flex items-center gap-2.5 font-bold text-black" href="#home" aria-label="Woma الصفحة الرئيسية">
          <img src="https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg" alt="شعار Woma" className="w-[42px] h-[42px] rounded-full object-cover border border-gray-200" />
          <span className="tracking-wider">Woma</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <a key={link.href} className="link px-3.5 py-2.5 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-100 transition-all duration-300" href={link.href}>{link.text}</a>
            ))}
        </div>

        <div className="flex-1"></div>

        {/* CTA Button */}
        <a className="hidden sm:inline-flex items-center gap-2 bg-black text-white px-3.5 py-2.5 rounded-2xl font-bold shadow-lg shadow-gray-300/50 transition-all duration-300 hover:bg-gray-800 hover:shadow-gray-400/50" href="https://wa.me/201099819017" target="_blank" rel="noopener noreferrer" aria-label="اطلب عبر واتساب">
          <WhatsAppIcon />
          اطلب الآن
        </a>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-md transition-colors hover:bg-gray-200"
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div id="mobile-menu" className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-[120%]'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center gap-4 p-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold w-full text-center py-3 rounded-lg hover:bg-gray-100 transition-colors">{link.text}</a>
          ))}
          <a className="inline-flex items-center justify-center w-full gap-2 bg-black text-white px-4 py-3 mt-4 rounded-2xl font-bold shadow-lg shadow-gray-300/50 transition-colors hover:bg-gray-800" href="https://wa.me/201099819017" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            اطلب عبر واتساب
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
