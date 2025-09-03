import React from 'react';

/**
 * The About section component.
 * It provides details about the Woma brand, its mission, and values.
 * It also includes call-to-action links to WhatsApp and Instagram.
 * @returns {JSX.Element} The about section.
 */
const About: React.FC = () => {
    return (
        <section id="about" className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-5 gap-6" aria-label="من نحن">
            <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">عن Woma</h2>
                <p className="mt-4 text-gray-600">Woma هو براند ملابس رجالي من <strong>حلوان – القاهرة</strong> بنقدّم تشكيلة عصرية تشمل تيشيرتات، قمصان، بناطيل، جاكيتات وإكسسوارات. هدفنا إنك تلاقي لبسك المفضل بسهولة ويوصلك بسرعة لأي محافظة في مصر.</p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
                    <li>ستايل عصري يناسب كل الأذواق.</li>
                    <li>تفاصيل مُتقنة وخامات مُختارة بعناية.</li>
                    <li>سياسة استبدال/استرجاع وفق الحالة خلال 14 يومًا.</li>
                </ul>
                <p className="text-gray-500 mt-4">تابع الجديد أولًا بأول على إنستجرام أو اطلب مباشرة عبر واتساب.</p>
                <div className="flex gap-3 flex-wrap mt-5">
                    <a className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-2xl font-bold shadow-lg shadow-gray-300/50 transition-all duration-300 hover:bg-gray-800 hover:shadow-gray-400/50" href="https://wa.me/201099819017?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20Woma" target="_blank" rel="noopener noreferrer">تواصل واتساب</a>
                    <a className="border border-dashed border-gray-400 rounded-2xl px-4 py-2.5 hover:bg-gray-200 transition-all duration-300" href="https://www.instagram.com/woma.eg/" target="_blank" rel="noopener noreferrer">إنستجرام woma.eg</a>
                </div>
            </div>
            <aside className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-center shadow-xl shadow-gray-200/50" aria-label="صورة تعريفية">
                <img src="https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg" alt="شعار Woma" loading="lazy" className="rounded-xl w-full object-contain max-w-[250px]" />
            </aside>
        </section>
    );
};

export default About;