import { User } from "./user.types";

export function addItem(user: User, productId: string, quantity: number): User {
  const existingItem = user.cart.find((item) => item.productId === productId);
  if (existingItem) {
    const updatedCart = user.cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
    return { ...user, cart: updatedCart };
  } else {
    return { ...user, cart: [...user.cart, { productId, quantity }] };
  }
}

export function removeItem(
  user: User,
  productId: string,
  quantity: number,
): User {
  const existingItem = user.cart.find((item) => item.productId === productId);
  if (!existingItem) return user; // Item not in cart, no change
  const updatedCart = user.cart
    .map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity - quantity }
        : item,
    )
    .filter((item) => item.quantity > 0); // Remove if quantity is 0
  return {
    ...user,
    cart: updatedCart,
  };
}

export function setDiscount(user: User, discount: number): User {
  return {
    ...user,
    discount,
  };
}
