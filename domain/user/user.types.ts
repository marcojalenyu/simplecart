
export interface CartItem {
  productId: string;
  quantity: number;
}

export interface User {
  username: string;
  password: string; // For demo purposes only. Hashed in real apps.
  cart: CartItem[];
  discount: number;
}
