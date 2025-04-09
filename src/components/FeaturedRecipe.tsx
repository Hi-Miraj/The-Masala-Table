
import React from "react";
import { Link } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedRecipeProps {
  id: string;
  title: string;
  imageSrc: string;
  category: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
}

const FeaturedRecipe: React.FC<FeaturedRecipeProps> = ({
  id,
  title,
  imageSrc,
  category,
  prepTime,
  difficulty,
  description,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-20">
        <Badge className="bg-masala-400 hover:bg-masala-500 text-white mb-3">{category}</Badge>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{title}</h2>
        <p className="text-white/90 text-sm sm:text-base md:w-3/4 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {prepTime}
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" /> {difficulty}
          </div>
        </div>
        <Button asChild className="bg-masala-500 text-white hover:bg-masala-600">
          <Link to={`/recipe/${id}`}>Cook This Recipe</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
