import { CartItem } from "@/domain/user/user.types";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/hooks/useProduct";
import { Pressable } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { Card, ImageCard } from "../ui/Card";
import { IconSymbol } from "../ui/icon-symbol";

export function CartCard({ cartItem }: { cartItem: CartItem }) {
  const { user } = useAuth();
  const { product } = useProduct(cartItem.productId);
  const { addToCart, removeFromCart } = useCart();

  async function handleAdd() {
    if (!user) return;
    await addToCart(user.username, cartItem.productId, 1);
  }

  async function handleSubtract() {
    if (!user) return;
    await removeFromCart(user.username, cartItem.productId, 1);
  }

  async function handleRemove() {
    if (!user) return;
    await removeFromCart(user.username, cartItem.productId, cartItem.quantity);
  }

  if (!product) {
    return (
      <Card>
        <ThemedText>Loading product...</ThemedText>
      </Card>
    );
  }
  return (
    <Card>
      <ThemedView className="flex-row items-center gap-4">
        <ImageCard
          className="h-32 aspect-square "
          imageClassName="h-full w-full"
          source={require("@/assets/images/product-default.png")}
          alt={product.productName || "Product Image"}
        />
        <ThemedView className="flex flex-row flex-1 justify-between">
          <ThemedView>
            <ThemedText>{product.productName || "Product Name"}</ThemedText>
            <ThemedText>
              ₱{product ? product.price.toFixed(2) : "0.00"}
            </ThemedText>
            <ThemedText>Qty: {cartItem.quantity}</ThemedText>
          </ThemedView>
          <ThemedView className="items-end px-3 gap-y-4">
            <Pressable onPress={handleRemove}>
              <IconSymbol name="trash.fill" size={20} color="#e54949" />
            </Pressable>
            <ThemedText>
              ₱
              {product
                ? (product.price * cartItem.quantity).toFixed(2)
                : "0.00"}
            </ThemedText>
            <ThemedView className="flex-row items-center gap-2">
              <Pressable
                onPress={handleSubtract}
                disabled={cartItem.quantity <= 1}
              >
                <IconSymbol
                  name="minus.circle.fill"
                  size={24}
                  color={cartItem.quantity > 1 ? "#49b8e8" : "#ccc"}
                />
              </Pressable>
              <Pressable onPress={handleAdd}>
                <IconSymbol name="plus.circle.fill" size={24} color="#49b8e8" />
              </Pressable>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </Card>
  );
}
