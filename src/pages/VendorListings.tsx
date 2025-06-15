import React, { useState } from 'react';
import { Star, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import vendor1 from '../images/Vender1.jpeg';
import vendor2 from '../images/Vender2.jpg';

const vendors = [
  {
    id: 1,
    name: "Jagdish Sweets",
    type: "Catering",
    rating: 4.8,
    reviews: 2,
    price: "₹₹",
    image: vendor1
  },
  {
    id: 2,
    name: "AB Photography",
    type: "Photography",
    rating: 4.9,
    reviews: 5,
    price: "₹₹₹",
    image: vendor2
  },
  // Add more vendors...
];

function VendorListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search vendors..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              className="border rounded-md px-4 py-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>All</option>
              <option>Catering</option>
              <option>Photography</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{vendor.name}</h3>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {vendor.price}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{vendor.type}</p>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{vendor.rating}</span>
                <span className="text-gray-500 ml-2">({vendor.reviews} reviews)</span>
              </div>
              <Link
                to="/booking"
                className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorListings