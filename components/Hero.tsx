import React from 'react';

/**
 * A reusable card component with a consistent style.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @param {boolean} [props['aria-hidden']] - Optional accessibility attribute.
 * @returns {JSX.Element} A styled card element.
 */
const Card: React.FC<{ children: React.ReactNode, className?: string, 'aria-hidden'?: boolean }> = ({ children, className, ...props }) => (
    <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50 ${className}`} {...props}>
        {children}
    </div>
);

/**
 * The Hero section component.
 * It serves as the main introduction to the brand, featuring a headline,
 * description, key selling points, and primary calls-to-action.
 * @returns {JSX.Element} The hero section.
 */
const Hero: React.FC = () => {
    return (
        <section id="home" className="py-10 md:py-16" aria-label="قسم تعريفي">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
                <div className="lg:col-span-3">
                    <Card>
                        <div className="flex gap-3 items-center">
                            <img src="https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg" alt="شعار Woma" width="56" height="56" className="rounded-xl border border-gray-200" />
                            <small className="text-gray-500">براند ملابس رجالي – حلوان، القاهرة</small>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mt-4 mb-3">ستايل رجالي عصري يوصل لحد باب بيتك</h1>
                        <p className="text-gray-600 text-base lg:text-lg">تيشيرتات، قمصان، بناطيل، جاكيتات بجودة عالية وأسعار مناسبة — <strong>شحن لجميع المحافظات</strong> والدفع عند الاستلام.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                            <div className="border border-gray-200 rounded-full py-2.5 px-3 text-center text-gray-500 text-sm">شحن لكل المحافظات</div>
                            <div className="border border-gray-200 rounded-full py-2.5 px-3 text-center text-gray-500 text-sm">خامات ممتازة</div>
                            <div className="border border-gray-200 rounded-full py-2.5 px-3 text-center text-gray-500 text-sm col-span-2 md:col-span-1">تواصل سريع واتساب</div>
                        </div>
                        <div className="flex gap-3 flex-wrap mt-5">
                            <a className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-2xl font-bold shadow-lg shadow-gray-300/50 transition-all duration-300 hover:bg-gray-800 hover:shadow-gray-400/50" href="https://wa.me/201099819017?text=%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20Woma" target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
                            <a className="border border-dashed border-gray-400 rounded-2xl px-4 py-2.5 hover:bg-gray-200 transition-all duration-300" href="https://www.instagram.com/woma.eg/" target="_blank" rel="noopener noreferrer" aria-label="حساب Woma على إنستجرام">تابعنا على إنستجرام</a>
                        </div>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card aria-hidden={true} className="flex items-center justify-center p-8 h-full">
                        <img src="https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg" alt="شعار Woma" className="rounded-xl object-contain w-full max-w-[250px]" loading="lazy" />
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Hero;