import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1">
      <ThemedView>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
