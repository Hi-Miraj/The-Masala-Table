
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-masala-50 spice-pattern py-12">
          <div className="container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-2">
              Recipe Categories
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto">
              Browse our recipes by category to find exactly what you're looking for
            </p>
          </div>
        </section>
        
        <section className="container my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-medium z-20">
                    {category.recipeCount} recipes
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h2 className="font-serif text-xl font-semibold mb-2 group-hover:text-masala-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                <div className="px-5 pb-5">
                  <div className="text-masala-600 text-sm font-medium group-hover:text-masala-800 transition-colors">
                    Explore recipes →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
