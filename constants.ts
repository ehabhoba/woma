// FIX: Import Product and GalleryImage types to support new constants.
import type { WhyUsPoint, Product, GalleryImage } from './types';

/**
 * A list of key selling points for the "Why Us" section.
 * @type {WhyUsPoint[]}
 */
export const whyUsPoints: WhyUsPoint[] = [
    {
        title: 'جودة خامات ممتازة',
        description: 'اختيار دقيق للخامات لضمان راحة ومتانة.',
    },
    {
        title: 'أسعار مناسبة',
        description: 'قيمة عالية مقابل السعر مع عروض مستمرة.',
    },
    {
        title: 'شحن سريع',
        description: 'نوصل لأي محافظة في مصر حتى باب البيت.',
    },
    {
        title: 'دعم سريع',
        description: 'تواصل مباشر عبر واتساب للاستفسار والطلب.',
    },
];

// FIX: Added missing 'products' export to resolve the error in components/Shop.tsx.
/**
 * A list of products for the shop.
 * @type {Product[]}
 */
export const products: Product[] = [
    {
        id: 1,
        name: "تيشيرت أساسي",
        price: 250,
        image: "https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg",
        isNew: true,
    },
    {
        id: 2,
        name: "قميص كاجوال",
        price: 350,
        image: "https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg",
        isNew: true,
    },
    {
        id: 3,
        name: "بنطلون جينز",
        price: 450,
        image: "https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg",
        isNew: false,
    },
    {
        id: 4,
        name: "جاكيت خفيف",
        price: 600,
        image: "https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg",
        isNew: false,
    },
];

// FIX: Added missing 'galleryImages' export to resolve the error in components/Gallery.tsx.
/**
 * A list of images for the gallery section.
 * @type {GalleryImage[]}
 */
export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 1' },
  { id: 2, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 2' },
  { id: 3, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 3' },
  { id: 4, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 4' },
  { id: 5, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 5' },
  { id: 6, src: 'https://i.postimg.cc/BZFRxMSr/11f8dc34-5ecb-4bb5-8e7f-9f34c6ae074d.jpg', alt: 'Woma outfit inspiration 6' },
];
