export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'helados' | 'snacks' | 'dulces' | 'pasapalos';
}

export interface CartItem {
  product: Product;
  quantity: number;
}