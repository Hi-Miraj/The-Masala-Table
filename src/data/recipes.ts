
export interface Recipe {
  id: string;
  title: string;
  imageSrc: string;
  category: string;
  prepTime: string;
  cookTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  description: string;
  ingredients: string[];
  instructions: string[];
  featured?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "butter-chicken",
    title: "Creamy Butter Chicken",
    imageSrc: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
    category: "Main Course",
    prepTime: "20 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    servings: 4,
    description: "A rich and creamy tomato-based curry with tender chicken pieces, flavored with aromatic spices and finished with butter and cream.",
    ingredients: [
      "800g boneless chicken thighs, cut into bite-sized pieces",
      "2 tablespoons ghee or oil",
      "1 large onion, finely chopped",
      "2 tablespoons ginger-garlic paste",
      "2 green chilies, slit",
      "400g tomato puree",
      "1 tablespoon red chili powder",
      "1 teaspoon turmeric powder",
      "1 tablespoon garam masala",
      "1 teaspoon cumin powder",
      "2 tablespoons butter",
      "100ml heavy cream",
      "Salt to taste",
      "Fresh coriander leaves for garnish"
    ],
    instructions: [
      "Heat ghee in a large pan over medium heat. Add onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies. Cook for 2 minutes until raw smell disappears.",
      "Add chicken pieces and cook until they turn white on all sides.",
      "Add tomato puree, red chili powder, turmeric, garam masala, cumin powder, and salt. Mix well.",
      "Cover and cook for 15 minutes, stirring occasionally, until chicken is cooked and gravy thickens.",
      "Lower the heat, add butter and cream. Stir well and simmer for 5 minutes.",
      "Garnish with fresh coriander leaves and serve hot with naan or rice."
    ],
    featured: true
  },
  {
    id: "palak-paneer",
    title: "Palak Paneer",
    imageSrc: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?q=80&w=1932&auto=format&fit=crop",
    category: "Vegetarian",
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    servings: 4,
    description: "A nutritious North Indian dish made with fresh spinach and soft paneer cheese, seasoned with aromatic spices.",
    ingredients: [
      "500g fresh spinach leaves, washed",
      "250g paneer, cut into cubes",
      "2 tablespoons oil",
      "1 large onion, finely chopped",
      "1 tablespoon ginger-garlic paste",
      "2 green chilies, chopped",
      "1 teaspoon cumin seeds",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric powder",
      "1/2 cup cream",
      "Salt to taste"
    ],
    instructions: [
      "Blanch spinach in boiling water for 3 minutes. Drain and transfer to ice water.",
      "Blend blanched spinach into a smooth puree and set aside.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown. Add ginger-garlic paste and cook for 2 minutes.",
      "Add green chilies, turmeric powder, and salt. Mix well.",
      "Add spinach puree and cook for 5 minutes on medium heat.",
      "Add paneer cubes and garam masala. Cook for 5 more minutes.",
      "Stir in cream and cook for 2 minutes.",
      "Serve hot with roti or rice."
    ]
  },
  {
    id: "vegetable-biryani",
    title: "Fragrant Vegetable Biryani",
    imageSrc: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop",
    category: "Rice Dishes",
    prepTime: "30 mins",
    cookTime: "45 mins",
    difficulty: "Medium",
    servings: 6,
    description: "A flavorful one-pot rice dish loaded with mixed vegetables, aromatic spices, and fresh herbs.",
    ingredients: [
      "2 cups basmati rice, soaked for 30 minutes",
      "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
      "1 large onion, thinly sliced",
      "2 tomatoes, chopped",
      "1/4 cup mint leaves, chopped",
      "1/4 cup coriander leaves, chopped",
      "2 tablespoons ginger-garlic paste",
      "2 green chilies, slit",
      "1 cinnamon stick",
      "4 cloves",
      "4 cardamom pods",
      "1 bay leaf",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric powder",
      "1 tablespoon biryani masala",
      "1/4 cup ghee or oil",
      "4 cups water or vegetable stock",
      "Salt to taste",
      "Fried onions for garnish"
    ],
    instructions: [
      "Heat ghee in a large heavy-bottomed pot. Add whole spices and sauté until fragrant.",
      "Add sliced onions and cook until golden brown.",
      "Add ginger-garlic paste, green chilies, and cook for 2 minutes.",
      "Add tomatoes, mixed vegetables, turmeric, biryani masala, and salt. Cook for 5 minutes.",
      "Drain the soaked rice and add to the pot. Stir gently to mix with the vegetables.",
      "Pour water or vegetable stock. Add mint and half of the coriander leaves.",
      "Bring to a boil, then lower heat, cover, and cook for 20 minutes until rice is done.",
      "Let it rest for 10 minutes before opening the lid.",
      "Garnish with remaining coriander leaves and fried onions.",
      "Serve hot with raita."
    ]
  },
  {
    id: "samosa",
    title: "Crispy Vegetable Samosas",
    imageSrc: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    category: "Appetizers",
    prepTime: "40 mins",
    cookTime: "20 mins",
    difficulty: "Hard",
    servings: 12,
    description: "Crispy pastry triangles filled with spiced potatoes and peas, a popular Indian street food and appetizer.",
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup ghee or oil",
      "1/2 teaspoon salt",
      "Water as needed",
      "4 medium potatoes, boiled and mashed",
      "1 cup green peas",
      "1 onion, finely chopped",
      "1 tablespoon ginger, minced",
      "2 green chilies, chopped",
      "1 teaspoon cumin seeds",
      "1 teaspoon coriander powder",
      "1/2 teaspoon garam masala",
      "1/2 teaspoon red chili powder",
      "1/4 cup fresh coriander, chopped",
      "Oil for deep frying",
      "Salt to taste"
    ],
    instructions: [
      "For the dough: Mix flour, salt, and ghee. Add water gradually to form a firm dough. Cover and rest for 30 minutes.",
      "For the filling: Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions, ginger, green chilies and sauté until golden.",
      "Add peas, all spices, and salt. Cook for 2 minutes.",
      "Add mashed potatoes and mix well. Cook for 5 minutes, stirring occasionally.",
      "Add chopped coriander, mix, and let the filling cool.",
      "Divide dough into balls. Roll each into an oval shape and cut in half.",
      "Form a cone with each half, fill with potato mixture, seal the edges with water.",
      "Deep fry samosas on medium heat until golden and crisp.",
      "Serve hot with mint chutney or tamarind sauce."
    ],
    featured: true
  },
  {
    id: "masala-chai",
    title: "Classic Masala Chai",
    imageSrc: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2070&auto=format&fit=crop",
    category: "Beverages",
    prepTime: "5 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    servings: 2,
    description: "A warming, spiced tea with milk, perfect for any time of day.",
    ingredients: [
      "2 cups water",
      "1 inch fresh ginger, crushed",
      "4 cardamom pods, crushed",
      "2 cloves",
      "1 cinnamon stick",
      "1/4 teaspoon black peppercorns",
      "2 tablespoons black tea leaves",
      "2 tablespoons sugar, or to taste",
      "1 cup milk"
    ],
    instructions: [
      "Bring water to a boil in a saucepan. Add crushed ginger, cardamom, cloves, cinnamon, and peppercorns.",
      "Simmer for 5 minutes to infuse the spices.",
      "Add tea leaves and boil for 2 minutes until the water turns dark.",
      "Add sugar and milk. Bring to a boil again.",
      "Strain into cups and serve hot."
    ]
  },
  {
    id: "gulab-jamun",
    title: "Sweet Gulab Jamun",
    imageSrc: "https://images.unsplash.com/photo-1615832494873-b4c1f2421918?q=80&w=2070&auto=format&fit=crop",
    category: "Desserts",
    prepTime: "20 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    servings: 16,
    description: "Soft, spongy milk solids dumplings soaked in rose and cardamom flavored sugar syrup.",
    ingredients: [
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "1/4 teaspoon baking soda",
      "2 tablespoons ghee, melted",
      "2-3 tablespoons milk",
      "2 cups sugar",
      "2 cups water",
      "4 cardamom pods, crushed",
      "1 teaspoon rose water",
      "Oil for deep frying"
    ],
    instructions: [
      "For the syrup: Bring water and sugar to a boil. Add cardamom pods and simmer for 5 minutes.",
      "Turn off heat, add rose water, and keep warm.",
      "For the dough: Mix milk powder, flour, and baking soda in a bowl.",
      "Add melted ghee and mix until crumbly.",
      "Gradually add milk and knead into a soft dough. Cover and rest for 10 minutes.",
      "Divide dough into 16 equal portions and roll into smooth balls.",
      "Heat oil on medium-low heat. Fry the balls in batches, stirring gently, until golden brown.",
      "Drain and immediately transfer to the warm syrup.",
      "Let soak for at least 2 hours before serving."
    ]
  }
];
