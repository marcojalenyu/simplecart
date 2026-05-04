import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAuth } from "@/hooks/useAuth";
import { useDiscount } from "@/hooks/useDiscount";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const { applyDiscount } = useDiscount();
  const [discountCode, setDiscountCode] = useState("");
  const [discountMsg, setMsg] = useState<string | null>(null);

  async function handleSignOut() {
    await signOut();
  }

  async function handleApplyDiscount() {
    if (!discountCode) {
      setMsg("Please enter a discount code.");
      return;
    }
    setMsg(null);
    const response = await applyDiscount(user?.username || "", discountCode);
    setMsg(response);
    setDiscountCode("");
  }

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView className="flex-1 py-16 px-6 gap-4 justify-between">
          <ThemedView className="flex-1">
            <ThemedText type="title">{user?.username}</ThemedText>
            <ThemedView className="my-auto gap-4">
              <ThemedText type="defaultSemiBold">
                Apply Discount Code
              </ThemedText>
              <TextInput
                placeholder="Discount Code"
                value={discountCode}
                onChangeText={setDiscountCode}
                className="border border-gray-300 dark:text-white rounded-md p-4"
              />
              <Text className="text-red-500">{discountMsg}</Text>
              <Pressable
                onPress={handleApplyDiscount}
                className="w-32 bg-green-700 rounded-md p-3 mx-auto items-center"
              >
                <ThemedText type="defaultSemiBold" className="text-white">
                  Apply
                </ThemedText>
              </Pressable>
            </ThemedView>
          </ThemedView>
          <Pressable
            onPress={handleSignOut}
            className="w-32 bg-blue-500 rounded-md my-3 py-3 mx-auto items-center"
          >
            <ThemedText type="defaultSemiBold" className="text-white">
              Logout
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
