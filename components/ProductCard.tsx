import React from 'react';
import type { Product } from '../types';

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
        <article className="bg-[#1A1A1D] border border-[#333336] rounded-2xl p-4 shadow-2xl shadow-black/25 relative overflow-hidden" role="listitem">
            {product.isNew && (
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-gray-100 text-xs px-3 py-1.5 rounded-full">جديد</span>
            )}
            <img loading="lazy" src={product.image} alt={product.name} className="rounded-xl aspect-[1/1.1] object-cover w-full border border-[#333336]" />
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h3 className="font-semibold text-gray-100 my-1">{product.name}</h3>
                    <div className="font-extrabold text-[#d4af37]">
                        <span>ج.م </span>
                        <span>{product.price}</span>
                    </div>
                </div>
                <button
                    className="inline-flex gap-2 items-center border border-[#444] px-4 py-2 rounded-xl hover:bg-[#222] transition-colors"
                    onClick={() => buyNow(product.name, product.price)}
                    aria-label={`اطلب ${product.name}`}
                >
                    اطلب
                </button>
            </div>
        </article>
    );
};

export default ProductCard;