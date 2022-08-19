export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
}

export interface ProductList {
  products: Product[];
}
