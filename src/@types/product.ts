// types/Product.ts
export interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
    brand: string;
    sku: string;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
  }
  
  export interface Review {
    reviewerName: string;
    comment: string;
    rating: number;
    date: string;
  }
  
  export interface RelatedProduct {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
  }
  