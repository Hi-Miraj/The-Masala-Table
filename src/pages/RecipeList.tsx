
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  
  // Apply filters
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
    const matchesDifficulty = selectedDifficulty ? recipe.difficulty === selectedDifficulty : true;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-masala-50 spice-pattern py-12">
          <div className="container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-2">
              Explore Our Recipes
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
              Discover our collection of authentic Indian recipes for every occasion
            </p>
            
            <div className="max-w-3xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search recipes..." 
                  className="pl-10 bg-white py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="aspect-square h-full">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Recipes</SheetTitle>
                    <SheetDescription>
                      Refine the recipes based on your preferences
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Category</label>
                      <Select 
                        value={selectedCategory} 
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Categories</SelectItem>
                          {categories.map(category => (
                            <SelectItem key={category.id} value={category.name}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Difficulty</label>
                      <Select 
                        value={selectedDifficulty} 
                        onValueChange={setSelectedDifficulty}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any Difficulty</SelectItem>
                          <SelectItem value="Easy">Easy</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      className="w-full bg-masala-500 hover:bg-masala-600 text-white"
                      onClick={() => {
                        setSelectedCategory("");
                        setSelectedDifficulty("");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
        
        <section className="container my-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold">
                {filteredRecipes.length} {filteredRecipes.length === 1 ? "Recipe" : "Recipes"} Found
              </h2>
            </div>
            
            <div className="hidden md:block">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by: Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="easy-hard">Difficulty: Easy to Hard</SelectItem>
                  <SelectItem value="hard-easy">Difficulty: Hard to Easy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any recipes that match your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                  setSelectedDifficulty("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeList;
