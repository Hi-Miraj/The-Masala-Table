
export interface Category {
  id: string;
  name: string;
  imageSrc: string;
  recipeCount: number;
  description: string;
}

export const categories: Category[] = [
  {
    id: "appetizers",
    name: "Appetizers & Snacks",
    imageSrc: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    recipeCount: 12,
    description: "Delicious Indian starters, snacks and small bites perfect for entertaining or quick hunger fixes."
  },
  {
    id: "main-course",
    name: "Main Course",
    imageSrc: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
    recipeCount: 18,
    description: "Hearty and flavorful main dishes featuring aromatic curries, grilled specialties, and traditional favorites."
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    imageSrc: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?q=80&w=1932&auto=format&fit=crop",
    recipeCount: 16,
    description: "Plant-based Indian recipes showcasing the incredible variety and flavor of vegetarian cuisine."
  },
  {
    id: "rice-dishes",
    name: "Rice & Breads",
    imageSrc: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop",
    recipeCount: 14,
    description: "Perfect accompaniments including biryanis, pulao, naan, roti and other traditional Indian staples."
  },
  {
    id: "desserts",
    name: "Desserts",
    imageSrc: "https://images.unsplash.com/photo-1615832494873-b4c1f2421918?q=80&w=2070&auto=format&fit=crop",
    recipeCount: 10,
    description: "Sweet treats and indulgent delights from traditional Indian mithai to modern fusion desserts."
  },
  {
    id: "beverages",
    name: "Beverages",
    imageSrc: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2070&auto=format&fit=crop",
    recipeCount: 8,
    description: "Refreshing drinks, warming teas, and traditional Indian beverages perfect for any occasion."
  },
  {
    id: "quick-easy",
    name: "Quick & Easy",
    imageSrc: "https://images.unsplash.com/photo-1565980452491-7acbb2a59e4a?q=80&w=2073&auto=format&fit=crop",
    recipeCount: 15,
    description: "Simple and fast Indian recipes ready in 30 minutes or less, without compromising on flavor."
  },
  {
    id: "regional",
    name: "Regional Cuisines",
    imageSrc: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
    recipeCount: 20,
    description: "Explore the diverse culinary traditions from different regions of India, from Kashmir to Kerala."
  }
];
