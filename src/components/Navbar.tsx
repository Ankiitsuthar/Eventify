import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, ChefHat, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Eventify</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/vendors" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Camera className="h-5 w-5" />
              <span>Vendors</span>
            </Link>
            <Link to="/booking" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <ChefHat className="h-5 w-5" />
              <span>Book Now</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar