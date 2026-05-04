import { ScrollView } from "react-native";

import { ProductList } from "@/components/products/ProductList";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ImageCard } from "@/components/ui/Card";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView className="flex-1 py-16 px-6 gap-4">
          <ThemedText type="subtitle">Welcome back!</ThemedText>
          <ImageCard
            source={require("@/assets/images/home-banner.png")}
            alt="Welcome Image"
          />
          <ThemedText type="subtitle">Available Items</ThemedText>
          <ProductList />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
