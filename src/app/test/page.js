'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-lg font-bold">
            DevSuit
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        activeColor="primary"
        hideIn="sm"
        className="gap-6 hidden sm:flex"
      >
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/hackathons">Hackathons</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teams">Teams</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/jobs">Jobs</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        <NavbarItem>
          <Button as={Link} href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/signup" color="primary">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen} className="sm:hidden">
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/hackathons">Hackathons</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/teams">Teams</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/jobs">Jobs</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact">Contact</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} href="/login" variant="flat">
            Login
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} href="/signup" color="primary">
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
