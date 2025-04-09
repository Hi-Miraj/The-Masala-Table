
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Get category details
  const category = categories.find(c => c.id === categoryId);
  
  // Get recipes in this category
  const categoryRecipes = recipes.filter(
    recipe => category && recipe.category === category.name
  );
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container my-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Category not found</h2>
          <p className="mt-4 mb-6">We couldn't find the category you're looking for.</p>
          <Button asChild>
            <Link to="/categories">Back to Categories</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back navigation */}
        <div className="container mt-6">
          <Link to="/categories" className="inline-flex items-center text-masala-600 hover:text-masala-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to categories
          </Link>
        </div>
        
        {/* Category Hero */}
        <section className="bg-masala-50 spice-pattern py-12 mt-6">
          <div className="container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-2">
              {category.name}
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto">
              {category.description}
            </p>
          </div>
        </section>
        
        {/* Recipes List */}
        <section className="container my-12">
          <h2 className="font-serif text-2xl font-semibold mb-6">
            {categoryRecipes.length > 0 
              ? `${categoryRecipes.length} Recipes` 
              : "No recipes found in this category"}
          </h2>
          
          {categoryRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryRecipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-600 mb-4">
                We're still working on adding recipes to this category. Check back soon!
              </p>
              <Button asChild>
                <Link to="/recipes">Browse All Recipes</Link>
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
