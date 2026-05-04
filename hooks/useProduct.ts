import { Product } from "@/domain/product/product.types";
import { productService } from "@/services/product.service";
import { useEffect, useState } from "react";

export function useProduct(productId: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  async function fetchProduct() {
    try {
      setIsLoading(true);
      setError(null);
      const product = await productService.fetchProductById(productId);
      setProduct(product);
    } catch {
      setError("Failed to fetch product");
    } finally {
      setIsLoading(false);
    }
  }

  return { product, isLoading, error };
}
