import React, { useState } from 'react';

/**
 * The Contact section component.
 * It includes contact information, a contact form that opens a pre-filled WhatsApp chat,
 * and an embedded Google Map showing the business location.
 * @returns {JSX.Element} The contact section.
 */
const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    /**
     * Handles the form submission by constructing a WhatsApp URL
     * with a pre-filled message and opening it in a new tab.
     * @param {React.FormEvent} e - The form submission event.
     */
    const sendWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `مرحبًا Woma، لدي استفسار/طلب:\n- الاسم: ${name.trim()}\n- الهاتف: ${phone.trim()}\n- الرسالة: ${message.trim()}`;
        const url = `https://wa.me/201099819017?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        // Reset form fields after submission
        setName('');
        setPhone('');
        setMessage('');
    };

    return (
        <section id="contact" className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6" aria-label="تواصل معنا">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">تواصل معنا</h2>
                <p className="text-gray-500 mt-1">📍 حلوان – القاهرة | 📦 شحن لجميع المحافظات</p>
                <p className="mt-4"><strong>الهاتف & واتساب:</strong> <a href="tel:01099819017" className="hover:text-black transition-colors">01099819017</a> — <a href="https://wa.me/201099819017" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">مراسلة واتساب</a></p>
                <p><strong>إنستجرام:</strong> <a href="https://www.instagram.com/woma.eg/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">@woma.eg</a></p>
                <form id="contactForm" onSubmit={sendWhatsApp} className="grid gap-4 mt-6">
                    <label className="flex flex-col gap-1.5">الاسم
                        <input type="text" name="name" placeholder="اسمك الكامل" required value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-xl p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300" />
                    </label>
                    <label className="flex flex-col gap-1.5">رقم الهاتف
                        <input type="tel" name="phone" placeholder="مثال: 0100xxxxxxx" required value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-xl p-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300" />
                    </label>
                    <label className="flex flex-col gap-1.5">رسالتك
                        <textarea name="message" placeholder="اكتب تفاصيل المنتج/المقاس/اللون المطلوب" required value={message} onChange={(e) => setMessage(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-xl p-3 text-gray-900 placeholder:text-gray-400 min-h-[120px] resize-vertical focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300"></textarea>
                    </label>
                    <button type="submit" className="bg-black text-white border-0 rounded-xl p-3 font-bold hover:bg-gray-800 transition-all duration-300">إرسال عبر واتساب</button>
                </form>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50" aria-label="الموقع التقريبي">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">موقعنا</h2>
                <p className="text-gray-500 mt-1">حلوان – القاهرة (استلام/تجربة حسب التوفر)</p>
                <iframe title="خريطة حلوان - القاهرة" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Helwan,Cairo&output=embed" className="w-full h-[280px] border-0 rounded-xl mt-4"></iframe>
            </div>
        </section>
    );
};

export default Contact;