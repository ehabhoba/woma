import React from 'react';

/**
 * The footer component for the website.
 * It displays copyright information with the current year, the brand logo,
 * and navigation/social media links, styled with a monochrome color scheme.
 * @returns {JSX.Element} The footer element.
 */
const Footer: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 mt-10 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-5 flex flex-wrap gap-4 items-center justify-center sm:justify-between text-gray-600">
                <div className="flex items-center gap-2.5 text-center sm:text-start">
                    <img src="https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg" alt="شعار Woma مصغر" width="32" height="32" className="rounded-lg border border-gray-200" />
                    <span>© {new Date().getFullYear()} Woma. جميع الحقوق محفوظة.</span>
                </div>
                <div className="flex gap-2.5 flex-wrap justify-center">
                    <a href="https://www.instagram.com/woma.eg/" target="_blank" rel="noopener noreferrer" aria-label="إنستجرام" className="border border-gray-300 text-gray-600 rounded-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300">Instagram</a>
                    <a href="https://wa.me/201099819017" target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="border border-gray-300 text-gray-600 rounded-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300">WhatsApp</a>
                    <a href="#about" className="border border-gray-300 text-gray-600 rounded-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300">من نحن</a>
                    <a href="#contact" className="border border-gray-300 text-gray-600 rounded-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300">تواصل</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;