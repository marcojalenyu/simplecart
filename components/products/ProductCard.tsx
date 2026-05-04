import { Product } from "@/domain/product/product.types";
import { Pressable } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { Card, ImageCard } from "../ui/Card";

export function ProductCard({ product }: { product: Product }) {
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
        <Pressable
          onPress={() => {
            console.log("Add to cart:", product.id);
          }}
        >
          <ThemedText type="title">+</ThemedText>
        </Pressable>
      </ThemedView>
    </Card>
  );
}
