
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import WhyUs from './WhyUs';
import { products } from '../constants';

const Shop: React.FC = () => {
    return (
        <section id="shop" className="py-10 md:py-16" aria-label="المتجر">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">جديد المتجر</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <WhyUs />
        </section>
    );
};

export default Shop;
