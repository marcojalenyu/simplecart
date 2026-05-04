import { ScrollView } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView className="flex-1 py-16 px-4">
          <ThemedText type="subtitle">Welcome back!</ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
