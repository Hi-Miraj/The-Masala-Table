
import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-masala-800">
                  The Masala Table
                </SheetTitle>
                <SheetDescription>
                  Explore the flavors of India
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                <Link to="/" className="py-2 text-lg hover:text-masala-500">
                  Home
                </Link>
                <Link to="/recipes" className="py-2 text-lg hover:text-masala-500">
                  All Recipes
                </Link>
                <Link to="/categories" className="py-2 text-lg hover:text-masala-500">
                  Categories
                </Link>
                <Link to="/about" className="py-2 text-lg hover:text-masala-500">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className="hidden md:block">
            <h1 className="font-serif text-2xl font-bold text-masala-800">
              The Masala Table
            </h1>
          </Link>
          <Link to="/" className="md:hidden">
            <h1 className="font-serif text-xl font-bold text-masala-800">
              Masala Table
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-masala-500">
            Home
          </Link>
          <Link to="/recipes" className="text-sm font-medium transition-colors hover:text-masala-500">
            All Recipes
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-masala-500">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-masala-500">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
