import { userService } from "@/services/user.service";
import { useState } from "react";
import { useAuth } from "./useAuth";

export function useCart() {
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function addToCart(
    username: string,
    productId: string,
    quantity: number,
  ) {
    try {
      setIsLoading(true);
      setError(null);
      const updatedUser = await userService.addToCart(
        username,
        productId,
        quantity,
      );
      setUser(updatedUser);
    } catch {
      setError("Failed to add to cart");
    } finally {
      setIsLoading(false);
    }
  }

  async function removeFromCart(
    username: string,
    productId: string,
    quantity: number,
  ) {
    try {
      setIsLoading(true);
      setError(null);
      const updatedUser = await userService.removeFromCart(
        username,
        productId,
        quantity,
      );
      setUser(updatedUser);
    } catch {
      setError("Failed to remove from cart");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    addToCart,
    removeFromCart,
  };
}
