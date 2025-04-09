
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChefHat } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-masala-50 spice-pattern py-12">
          <div className="container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-2">
              About The Masala Table
            </h1>
            <p className="text-gray-600 text-center max-w-xl mx-auto">
              Our passion for authentic Indian cuisine and the stories behind it
            </p>
          </div>
        </section>
        
        <section className="container my-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-masala-100 flex items-center justify-center">
                <ChefHat className="h-10 w-10 text-masala-600" />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to The Masala Table, your destination for authentic Indian recipes that celebrate the rich and diverse culinary heritage of India. Our mission is to share the vibrant flavors, aromatic spices, and traditional cooking techniques that make Indian cuisine so beloved worldwide.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-8 mb-4">Our Story</h2>
              <p>
                The Masala Table began as a small collection of family recipes passed down through generations. What started as a way to preserve traditional cooking methods has grown into a comprehensive resource for food enthusiasts looking to explore the depths of Indian cuisine.
              </p>
              <p>
                Each recipe on our site has been carefully tested and refined to ensure that you can recreate authentic Indian flavors in your own kitchen, regardless of your cooking experience or where you are in the world.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
              <p>
                We believe that cooking is both an art and a way to connect with culture and history. Our recipes reflect not just how to make a dish, but also its cultural significance, regional variations, and the stories behind it. Whether you're looking to recreate the street foods of Mumbai, the royal dishes of Rajasthan, or the coastal delicacies of Kerala, we're here to guide you through every step.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-8 mb-4">Meet Our Team</h2>
              <p>
                The Masala Table is run by a passionate team of culinary enthusiasts, food photographers, and experienced home cooks who share a love for Indian cuisine. We work together to ensure that each recipe is not only authentic but also accessible to cooks of all skill levels.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
              <p>
                Cooking is better when shared. We invite you to join our growing community of food lovers by subscribing to our newsletter, following us on social media, and sharing your cooking experiences with us. Your feedback and food stories inspire us to continue exploring and sharing the best of Indian cuisine.
              </p>
              
              <p className="mt-8 text-center italic">
                "Food is not just eating energy. It's an experience." 
                <br />— Guy Fieri
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
