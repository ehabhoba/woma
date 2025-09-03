

/**
 * Represents a product in the shop.
 */
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    isNew: boolean;
}

/**
 * Represents a key selling point displayed in the "Why Us" section.
 */
export interface WhyUsPoint {
    title: string;
    description: string;
}

// FIX: Added missing GalleryImage interface for use in constants.ts and Gallery.tsx.
/**
 * Represents an image in the gallery.
 */
export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}
