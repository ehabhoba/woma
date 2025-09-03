import React from 'react';
import { galleryImages } from '../constants';

/**
 * The Gallery section component.
 * It displays a collection of images in a responsive, masonry-style grid
 * to showcase the brand's aesthetic.
 * @returns {JSX.Element} The gallery section.
 */
const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-10 md:py-16" aria-label="معرض الصور">
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">استكشف أسلوبنا</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                    نحن نؤمن بأن الأناقة تكمن في التفاصيل. تصفح معرضنا لإلقاء نظرة على أحدث تشكيلاتنا واستلهم إطلالتك القادمة.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {galleryImages.map((image, index) => {
                    let itemClass = 'col-span-1 row-span-1';
                    // Make specific images larger for a more dynamic layout
                    if (index === 0) itemClass = 'md:col-span-2 md:row-span-2 col-span-2 row-span-2 !auto-rows-[416px]';
                    if (index === 3) itemClass = 'md:col-span-2 md:row-span-1 col-span-2';
                    
                    return (
                        <div key={image.id} className={`overflow-hidden rounded-2xl group relative shadow-xl shadow-gray-200/50 bg-white p-4 ${itemClass}`}>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                loading="lazy" 
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Gallery;