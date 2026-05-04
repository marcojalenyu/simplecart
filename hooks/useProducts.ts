import { Product } from "@/domain/product/product.types";
import { productService } from "@/services/product.service";
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await productService.fetchProducts();
      setProducts(data);
    } catch {
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }

  return { products, isLoading, error, fetchProducts };
}
