"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Privacy Policy", link: "privacy" },
    { name: "Our Services", link: "Services" },
    { name: "AboutUs", link: "/" },
    { name: "FAQ", link: "faq" },
    { name: "Help & Contact", link: "Help" },
  ];

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">Kumar PolyClinic</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="Services">
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="Help">
            Help & Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Sheet>
            <SheetTrigger asChild>
              <Button color="primary" variant="flat">
                Book Appointment
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Book Appointment</SheetTitle>
                <SheetDescription>
                  Please choose an option
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button as={Link} color="primary" href="/signup" variant="flat">
                  Login/Signup
                </Button>
                <Button as={Link} className="text-pink-600 bg-pink-300" href="/Help" variant="flat">
           Quick Appointment
            </Button>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="button" >Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
  {menuItems.map((item, index) => (
    <NavbarMenuItem key={`${item.name}-${index}`}>
      <Link
        color="foreground" 
        className="w-full"
        href={item.link}
        size="lg"
      >
        {item.name}
      </Link>
    </NavbarMenuItem>
  ))}
</NavbarMenu>
    </Navbar>
  );
}