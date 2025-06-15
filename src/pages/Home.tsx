import React from 'react';
import { Search, Star, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import vendor1 from '../images/Vender1.jpeg';
import vendor2 from '../images/Vender2.jpg';
import vendor3 from '../images/Vender3.jpeg';
import coverimage from '../images/photo-Coverpage.jpeg'


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={coverimage}
            alt="Event Planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Find Perfect Vendors for Your Perfect Event</h1>
          <p className="text-xl mb-8">Compare and book top-rated catering and photography services</p>
          <Link
            to="/vendors"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700"
          >
            Explore Vendors
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Eventify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Comparison</h3>
              <p className="text-gray-600">Compare prices and services from multiple vendors in one place</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Availability</h3>
              <p className="text-gray-600">Check vendor availability instantly and book with confidence</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">Read authentic reviews from real customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={i === 1 ? vendor1 : i === 2 ? vendor2 : vendor3}
                  alt="Vendor"
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">
                      {i === 1 ? 'Jagdish Sweets' : i === 2 ? 'AB Photography' : 'HM Events'}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">4.{8 + i}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {i === 1 ? 'Premium catering services' : i === 2 ? 'Professional photography' : 'Custom cake design'}
                  </p>
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
      </section>
    </div>
  );
}

export default Home