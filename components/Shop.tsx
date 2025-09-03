
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import { products } from '../constants';

const Shop: React.FC = () => {
    return (
        <section id="shop" className="py-10 md:py-16" aria-label="المتجر">
            <div className="text-center">
                 <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">جديد المتجر</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                    أحدث التصميمات والمنتجات التي وصلت حديثًا. جودة عالية وتصاميم عصرية تناسب ذوقك.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;
