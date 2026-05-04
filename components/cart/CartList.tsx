import { useAuth } from "@/hooks/useAuth";
import { useProducts } from "@/hooks/useProducts";
import { useMemo } from "react";
import { Text } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { CartCard } from "./CartCard";

export function CartList() {
  const { user, loading } = useAuth();
  const { products } = useProducts();

  const cartItems = useMemo(() => {
    return user?.cart || [];
  }, [user?.cart]);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }, [cartItems, products]);

  if (loading) {
    return (
      <ThemedView>
        <ThemedText>Loading products...</ThemedText>
      </ThemedView>
    );
  } else if (!user) {
    return (
      <ThemedView>
        <ThemedText>Error loading cart: User not found</ThemedText>
      </ThemedView>
    );
  }
  return (
    <ThemedView className="w-full justify-between gap-y-6">
      {cartItems.length === 0 ? (
        <ThemedText>Your cart is empty.</ThemedText>
      ) : (
        <ThemedView className="w-full gap-y-4">
          {cartItems.map((item) => (
            <CartCard key={item.productId} cartItem={item} />
          ))}
          <ThemedView className="flex flex-col gap-4 items-end text-lg font-semibold">
            {user.discount > 0 && (
              <Text className="text-green-500">
                {user.discount}% discount applied!{" "}
              </Text>
            )}
            <ThemedText>
              Total: ₱{(total * (1 - user.discount / 100)).toFixed(2)}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  );
}
