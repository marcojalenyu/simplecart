import { Product } from "@/domain/product/product.types";

export const mockProducts: Product[] = [
  {
    id: "1",
    productName: "Shampoo",
    description: "A nice shampoo for your hair.",
    price: 205.0,
  },
  {
    id: "2",
    productName: "Soap",
    description: "A nice bar of soap for your skin.",
    price: 40.0,
  },
  {
    id: "3",
    productName: "Conditioner",
    description: "A moisturizing conditioner for your hair.",
    price: 180.0,
  },
  {
    id: "4",
    productName: "Toothpaste",
    description: "A fluoride toothpaste for your teeth.",
    price: 79.0,
  },
];
