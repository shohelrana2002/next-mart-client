export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "User" | "Admin";
  iat?: number;
  exp?: number;
}
