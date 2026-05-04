import { userService } from "@/services/user.service";
import { useState } from "react";
import { useAuth } from "./useAuth";

export function useDiscount() {
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function applyDiscount(username: string, discountCode: string) {
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await userService.applyDiscount(
        username,
        discountCode,
      );
      setUser(updatedUser);
      const msg = "Discount applied successfully!";
      return msg;
    } catch (err: any) {
      const msg = err?.message || "Failed to apply discount";
      setError(msg);
      return msg;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    applyDiscount,
  };
}
