
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedRecipe from "@/components/FeaturedRecipe";
import RecipeCard from "@/components/RecipeCard";
import CategorySection from "@/components/CategorySection";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { ChefHat, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);
  const latestRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {featuredRecipes.length > 0 && (
            <FeaturedRecipe {...featuredRecipes[0]} />
          )}
        </section>

        {/* Search Section */}
        <section className="container my-12 max-w-3xl mx-auto">
          <div className="bg-masala-50 rounded-lg p-6 md:p-8 relative overflow-hidden spice-pattern">
            <div className="absolute inset-0 bg-gradient-to-r from-curry-500/5 to-masala-400/5"></div>
            <div className="relative z-10">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-center mb-4">
                Discover Your Next Favorite Recipe
              </h2>
              <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto">
                Explore our collection of authentic Indian recipes and bring the flavors of India to your kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search for recipes, ingredients..." 
                    className="pl-10 py-6 bg-white border-masala-200"
                  />
                </div>
                <Button className="bg-masala-500 hover:bg-masala-600 text-white">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container my-16">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">Recipe Categories</h2>
              <p className="text-gray-600">Explore recipes by category</p>
            </div>
            <Button variant="link" asChild className="text-masala-600 hover:text-masala-800">
              <Link to="/categories">View All →</Link>
            </Button>
          </div>
          <CategorySection categories={categories.slice(0, 4)} />
        </section>

        {/* Latest Recipes */}
        <section className="container my-16">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">Latest Recipes</h2>
              <p className="text-gray-600">Fresh from our kitchen to yours</p>
            </div>
            <Button variant="link" asChild className="text-masala-600 hover:text-masala-800">
              <Link to="/recipes">View All →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestRecipes.map(recipe => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-curry-50 py-12 my-16">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <ChefHat className="text-curry-600 h-8 w-8 mr-2" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                Join Our Culinary Community
              </h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Subscribe to receive new recipes, cooking tips, and exclusive content straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-curry-200 flex-grow"
              />
              <Button className="bg-curry-600 hover:bg-curry-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
