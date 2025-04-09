
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { recipes } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);
  
  // Get related recipes from the same category (up to 3)
  const relatedRecipes = recipes
    .filter(r => r.category === recipe?.category && r.id !== recipe?.id)
    .slice(0, 3);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container my-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Recipe not found</h2>
          <p className="mt-4 mb-6">We couldn't find the recipe you're looking for.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
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
          <Link to="/" className="inline-flex items-center text-masala-600 hover:text-masala-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to recipes
          </Link>
        </div>
        
        {/* Recipe Hero */}
        <section className="container mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-masala-100 text-masala-800 hover:bg-masala-200">{recipe.category}</Badge>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {recipe.title}
              </h1>
              <p className="text-gray-700 text-lg mb-6">{recipe.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-masala-50 rounded-lg text-center">
                  <Clock className="h-5 w-5 mx-auto mb-2 text-masala-600" />
                  <p className="text-sm text-gray-500">Prep Time</p>
                  <p className="font-medium">{recipe.prepTime}</p>
                </div>
                <div className="p-4 bg-masala-50 rounded-lg text-center">
                  <Clock className="h-5 w-5 mx-auto mb-2 text-masala-600" />
                  <p className="text-sm text-gray-500">Cook Time</p>
                  <p className="font-medium">{recipe.cookTime}</p>
                </div>
                <div className="p-4 bg-masala-50 rounded-lg text-center">
                  <Users className="h-5 w-5 mx-auto mb-2 text-masala-600" />
                  <p className="text-sm text-gray-500">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <ChefHat className="h-5 w-5 text-masala-600 mr-2" />
                <span className="font-medium">Difficulty:</span>
                <span className="ml-2">{recipe.difficulty}</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={recipe.imageSrc} 
                alt={recipe.title}
                className="w-full h-80 lg:h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        
        {/* Ingredients and Instructions */}
        <section className="container my-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h2 className="font-serif text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-masala-500 mt-2 mr-2"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-masala-100 text-masala-800 font-semibold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        
        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="container my-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
