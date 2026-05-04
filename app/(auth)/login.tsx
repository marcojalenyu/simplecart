import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useAuth } from "@/hooks/useAuth";
import { userService } from "@/services/user.service";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const router = useRouter();

  async function handleLogin() {
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    try {
      const user = await userService.login(username, password);
      await setUser(user);
      router.replace("/(tabs)");
    } catch {
      setError("Invalid username or password.");
    } finally {
      setUsername("");
      setPassword("");
    }
  }

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}
      >
        <ThemedView className="flex-1 px-16 justify-center gap-y-12">
          <ThemedView className="items-center gap-2">
            <IconSymbol name="cart.fill" size={64} color="#49b8e8" />
            <ThemedText type="title" className="text-center">
              SimpleCart
            </ThemedText>
          </ThemedView>
          <ThemedView className="gap-6">
            <ThemedView className="gap-4">
              <ThemedText type="defaultSemiBold">Username</ThemedText>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                className="border border-gray-300 dark:text-white rounded-md p-4"
              />
              <ThemedText type="defaultSemiBold">Password</ThemedText>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="border border-gray-300 dark:text-white rounded-md p-4"
              />
              <Text className="text-red-500">{error}</Text>
            </ThemedView>
            <Pressable
              onPress={handleLogin}
              className="w-32 bg-blue-500 rounded-md my-3 py-3 mx-auto items-center"
            >
              <ThemedText type="defaultSemiBold" className="text-white">
                Log In
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
