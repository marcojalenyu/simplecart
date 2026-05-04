import { useProducts } from "@/hooks/useProducts";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <ThemedView>
        <ThemedText>Loading products...</ThemedText>
      </ThemedView>
    );
  } else if (error) {
    return (
      <ThemedView>
        <ThemedText>Error loading products: {error}</ThemedText>
      </ThemedView>
    );
  }
  return (
    <ThemedView className="flex-row flex-wrap justify-between gap-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ThemedView>
  );
}
