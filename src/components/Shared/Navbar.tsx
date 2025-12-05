"use client";
import { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import Logo from "@/app/assets/svg/Logo";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [showSearch, setShowSearch] = useState(false); // mobile search
  const { user, setIsLoading } = useUser();
  const handleLogout = () => {
    console.log("object");
    logout();
    setIsLoading(true);
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Logo />
          </Link>

          {/* Desktop Search Field */}
          <div className="hidden md:flex items-center w-1/2">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                0
              </span>
            </div>
            {user ? (
              <>
                <Link href={"/create-shop"}>
                  <Button className="rounded-full" variant="destructive">
                    Create Shop
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      My Shop
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer"
                    >
                      <LogOut /> <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link href={"/login"}>
                <Button className="rounded-full" variant="destructive">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center md:hidden gap-4">
            <Search
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />

            <button onClick={() => setOpen(!open)}>
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Field */}
      {showSearch && (
        <div className="md:hidden px-4 pb-3 bg-white border-b">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-3 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-4 py-3 border-b hover:bg-gray-50">
            Home
          </Link>
          <Link
            href="/shop"
            className="block px-4 py-3 border-b hover:bg-gray-50"
          >
            Shop
          </Link>
          <Link
            href="/categories"
            className="block px-4 py-3 border-b hover:bg-gray-50"
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-3 border-b hover:bg-gray-50"
          >
            Contact
          </Link>

          <div className="flex items-center gap-5 px-4 py-4">
            <ShoppingCart className="w-6 h-6 hover:text-blue-600" />
            <User className="w-6 h-6 hover:text-blue-600" />
          </div>
        </div>
      )}
    </nav>
  );
}
