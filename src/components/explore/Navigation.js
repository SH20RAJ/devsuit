"use client";

import { signOut } from "@/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  Input,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function AppNavbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); // State for search input
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  console.log("session", session);
  return (
    <Navbar isBordered>
      {/* Brand Section */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-lg font-bold">
            DevSuit
          </Link>
        </NavbarBrand>
        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Larger Search Box */}
      <NavbarContent className="flex-1 justify-center">
        <Input
          clearable
          underlined
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          width="500px" // Increase the width to make it bigger
        />
      </NavbarContent>

      {/* Right Section: Avatar or Login/Sign-Up */}
      <div className="">
        <NavbarContent className="flex items-center justify-end space-x-4">
          {session?.user ? (
            <Dropdown placement="bottom-right">
              <DropdownTrigger>
                <Avatar
                  bordered
                  as="button"
                  size="lg" // Make avatar larger
                  src={session?.user?.image}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu actions">
                <DropdownItem key="profile" css={{ height: "$18" }}>
                  <Link href="/user">Profile</Link>
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="error">
                  <Button auto flat>
                    Logout
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <NavbarItem>
                <Button as={Link} href="/join" variant="flat">
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} href="/join" color="primary">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </div>
      {/* Mobile Menu Section */}
      <NavbarMenu isOpen={isMenuOpen} className="sm:hidden ">
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
        {session?.user ? (
          <>
            <NavbarMenuItem>
              <Link href="/user">Profile</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button onClick={() => signOut()} variant="flat">
                Logout
              </Button>
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <Button as={Link} href="/join" variant="flat">
                Login
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button as={Link} href="/join" color="primary">
                Sign Up
              </Button>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
