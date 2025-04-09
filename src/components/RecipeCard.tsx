
import React from "react";
import { Link } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: string;
  title: string;
  imageSrc: string;
  category: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  imageSrc,
  category,
  prepTime,
  difficulty,
  description,
}) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card group block">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          alt={title}
          className="h-60 w-full object-cover"
        />
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <Badge className="bg-masala-100 text-masala-800 hover:bg-masala-200">{category}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> {prepTime}
          </div>
        </div>
        
        <h3 className="mt-2 font-serif text-xl font-medium">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <ChefHat className="h-4 w-4 text-curry-600" />
            <span className="text-sm">{difficulty}</span>
          </div>
          <div className="text-masala-500 text-sm group-hover:text-masala-800 font-medium transition-colors">
            View Recipe →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
