import { addItem, removeItem, setDiscount } from "@/domain/user/user.domain";
import { User } from "@/domain/user/user.types";
import { mockUsers } from "@/mock/user.mock";
import { productService } from "./product.service";

export const userService = {
  async login(username: string, password: string): Promise<User> {
    const user = mockUsers.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) return Promise.reject(new Error("Invalid username or password"));
    return user;
  },

  async addToCart(
    username: string,
    productId: string,
    quantity: number,
  ): Promise<User> {
    const user = mockUsers.find((user) => user.username === username);
    if (!user) return Promise.reject(new Error("User not found"));
    const product = await productService.fetchProductById(productId);
    if (!product) return Promise.reject(new Error("Product not found"));
    const updatedUser = await addItem(user, product.id, quantity);
    return updatedUser;
  },

  async removeFromCart(
    username: string,
    productId: string,
    quantity: number,
  ): Promise<User> {
    const user = mockUsers.find((user) => user.username === username);
    if (!user) return Promise.reject(new Error("User not found"));
    const product = await productService.fetchProductById(productId);
    if (!product) return Promise.reject(new Error("Product not found"));
    const updatedUser = await removeItem(user, product.id, quantity);
    return updatedUser;
  },

  async applyDiscount(username: string, discountCode: string): Promise<User> {
    const user = mockUsers.find((user) => user.username === username);
    if (!user) return Promise.reject(new Error("User not found"));
    // For demo, we just apply 10% discount if code is "discount10"
    if (discountCode === "discount10") return await setDiscount(user, 10);
    return user; // No discount applied
  },
};
