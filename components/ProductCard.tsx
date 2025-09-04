import React from 'react';
import type { Product } from '../data';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const buyNow = (productName: string, price: number) => {
        const msg = `مرحبًا Woma 👋\nأرغب بطلب المنتج:\n- الاسم: ${productName}\n- السعر: ${price} ج.م\nالرجاء التواصل لإتمام الطلب.`;
        const url = `https://wa.me/201099819017?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <article className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl shadow-gray-200/50 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" role="listitem">
            {product.isNew && (
                <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1.5 rounded-full z-10">جديد</span>
            )}
            <div className="overflow-hidden rounded-xl mb-4">
                <img loading="lazy" src={product.image} alt={product.name} className="aspect-[1/1.1] object-cover w-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-gray-800 my-1">{product.name}</h3>
                    <div className="font-bold text-black">
                        <span>{product.price}</span>
                        <span> ج.م</span>
                    </div>
                </div>
                <button
                    className="inline-flex gap-2 items-center bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-sm"
                    onClick={() => buyNow(product.name, product.price)}
                    aria-label={`اطلب ${product.name}`}
                >
                    اطلب الآن
                </button>
            </div>
        </article>
    );
};

export default ProductCard;