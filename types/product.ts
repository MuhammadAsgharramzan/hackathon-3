export interface Product {
    imageUrl: any;
    rating: any;
    discount: any;
    slug: any;
    _id: string;
    _type: "product";
    productName: string;
    description: string;
    price: number;
    inventory: number;
    colors: string;
    status: string;
    image: { asset: { _ref: string } };
  }