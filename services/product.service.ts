import { Product } from "@/domain/product/product.types";
import { mockProducts } from "@/mock/product.mock";

export const productService = {
  async fetchProducts(): Promise<Product[]> {
    return mockProducts;
  },

  async fetchProductById(id: string): Promise<Product | null> {
    const product = mockProducts.find((p) => p.id === id);
    return product || null;
  },
};
