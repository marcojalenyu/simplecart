import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ThemedView>
        <ThemedText type="title">Cart</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
