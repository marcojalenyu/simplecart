import { CartList } from "@/components/cart/CartList";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView className="flex-1 py-16 px-6 gap-4">
          <ThemedText type="title">My Cart</ThemedText>
          <CartList />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
