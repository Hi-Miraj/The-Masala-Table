
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-masala-50 border-t mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-masala-800 mb-4">
              The Masala Table
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore the diverse and flavorful world of Indian cuisine with our
              authentic recipes, cooking tips, and cultural insights.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Masala Table. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-base font-semibold text-masala-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-masala-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm text-gray-600 hover:text-masala-600 transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-masala-600 transition-colors">
                  Recipe Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-masala-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-base font-semibold text-masala-800 mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest recipes and cooking tips delivered straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-masala-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-masala-500 px-3 py-2 text-sm text-white hover:bg-masala-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
