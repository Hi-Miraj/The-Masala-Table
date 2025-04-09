
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeList from "./pages/RecipeList";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:categoryId" element={<CategoryDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
