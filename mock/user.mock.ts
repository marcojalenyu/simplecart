import { User } from "@/domain/user/user.types";

export const mockUsers: User[] = [
  {
    username: "john_doe",
    password: "password",
    cart: [],
    discount: 0,
  },
  {
    username: "jane_smith",
    password: "12345",
    cart: [],
    discount: 0,
  },
];
