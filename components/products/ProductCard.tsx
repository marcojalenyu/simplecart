import { Product } from "@/domain/product/product.types";
import { useAuth } from "@/hooks/useAuth";
import { userService } from "@/services/user.service";
import { Pressable } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { Card, ImageCard } from "../ui/Card";

export function ProductCard({ product }: { product: Product }) {
  const { user, setUser } = useAuth();

  const handleAddToCart = async () => {
    if (!user) return;
    const updatedUser = await userService.addToCart(
      user.username,
      product.id,
      1,
    );
    setUser(updatedUser);
    alert(`${product.productName} added to cart!`);
  };

  return (
    <Card className="gap-1 w-[48%]">
      <ImageCard
        source={require("@/assets/images/product-default.png")}
        alt={product.productName}
      />
      <ThemedView className="flex flex-row p-2 justify-between">
        <ThemedView className="flex flex-col">
          <ThemedText type="defaultSemiBold">{product.productName}</ThemedText>
          <ThemedText type="default">₱{product.price.toFixed(2)}</ThemedText>
        </ThemedView>
        <Pressable onPress={handleAddToCart}>
          <ThemedText type="title">+</ThemedText>
        </Pressable>
      </ThemedView>
    </Card>
  );
}
