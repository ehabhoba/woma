import React from 'react';
import { whyUsPoints } from '../data';

/**
 * The Why Us section component.
 * It highlights the key value propositions of the Woma brand, such as quality,
 * pricing, shipping, and customer support, in a clean, card-based layout.
 * @returns {JSX.Element} The "Why Us" section.
 */
const WhyUs: React.FC = () => {
    return (
        <section id="why-us" className="py-10 md:py-16">
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">لماذا تختار Woma؟</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                    نحن نلتزم بتقديم أفضل تجربة لعملائنا من خلال الجمع بين الجودة العالية، الأسعار التنافسية، والخدمة الممتازة.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyUsPoints.map((point, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50 text-center">
                        <strong className="text-lg font-bold text-black">{point.title}</strong>
                        <p className="text-gray-500 mt-2 text-sm">{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;