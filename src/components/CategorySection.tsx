
import React from "react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  imageSrc: string;
  recipeCount: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
          <img
            src={category.imageSrc}
            alt={category.name}
            className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <h3 className="font-serif text-lg md:text-xl font-medium text-center">
              {category.name}
            </h3>
            <p className="text-xs opacity-90">{category.recipeCount} recipes</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
