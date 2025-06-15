import React, { useState } from 'react';
import { Calendar, Clock, Users, DollarSign, MapPin, Camera, ChefHat, Music, Palette, CheckCircle, IndianRupee, IndianRupeeIcon } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Service {
  id: string;
  name: string;
  icon: any;
  description: string;
  priceRange: string;
}

function Booking() {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    timeSlot: '',
    guests: '',
    location: '',
    services: [] as string[],
    budget: '',
    additionalNotes: ''
  });

  const [showSummary, setShowSummary] = useState(false);

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '01:00 PM', available: true },
    { time: '02:00 PM', available: false },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: true },
    { time: '05:00 PM', available: true },
  ];

  const services: Service[] = [
    {
      id: 'catering',
      name: 'Catering Service',
      icon: ChefHat,
      description: 'Professional catering for your event',
      priceRange: '₹50000-₹200000'
    },
    {
      id: 'photography',
      name: 'Photography',
      icon: Camera,
      description: 'Professional event photography',
      priceRange: '₹30000-₹150000'
    },
    {
      id: 'music',
      name: 'Live Music',
      icon: Music,
      description: 'Live band or DJ services',
      priceRange: '₹40000-₹120000'
    },
    {
      id: 'decoration',
      name: 'Decoration',
      icon: Palette,
      description: 'Event decoration and setup',
      priceRange: '₹30000-₹200000'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const getServiceNames = () => {
    return formData.services
      .map(id => services.find(s => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Book Your Event Services</h1>
        <p className="text-gray-600 mt-2">Fill in the details below to reserve your slot</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-6">
          {/* Event Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Type
            </label>
            <select
              className="w-full border rounded-md px-4 py-2"
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              required
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="conference">Conference</option>
              <option value="social">Social Gathering</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline-block h-5 w-5 mr-2" />
                Event Date
              </label>
              <input
                type="date"
                className="w-full border rounded-md px-4 py-2"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline-block h-5 w-5 mr-2" />
                Event Location
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2"
                placeholder="Enter venue address"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline-block h-5 w-5 mr-2" />
              Available Time Slots
            </label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`p-2 text-center rounded-md ${
                    slot.available
                      ? formData.timeSlot === slot.time
                        ? 'bg-indigo-600 text-white'
                        : 'border border-gray-300 hover:border-indigo-500'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => slot.available && setFormData({...formData, timeSlot: slot.time})}
                  disabled={!slot.available}
                >
                  {slot.time}
                  {!slot.available && <span className="block text-xs">(Booked)</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline-block h-5 w-5 mr-2" />
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Enter number of guests"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              required
            />
          </div>

          {/* Services Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services Required
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    formData.services.includes(service.id)
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'hover:border-gray-400'
                  }`}
                  onClick={() => {
                    const updatedServices = formData.services.includes(service.id)
                      ? formData.services.filter(s => s !== service.id)
                      : [...formData.services, service.id];
                    setFormData({...formData, services: updatedServices});
                  }}
                >
                  <div className="flex items-center">
                    <service.icon className="h-6 w-6 text-indigo-600 mr-2" />
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                      <p className="text-sm font-medium text-indigo-600">{service.priceRange}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <IndianRupee className="inline-block h-5 w-5 mr-2" />
              Budget Range
            </label>
            <select
              className="w-full border rounded-md px-4 py-2"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              required
            >
              <option value="">Select budget range</option>
              <option value="100000-300000">₹1,00,000 - ₹3,00,000</option>
              <option value="300000-500000">₹3,00,000 - ₹5,00,000</option>
              <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
              <option value="1000000+">₹10,00,000+</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Requirements or Notes
            </label>
            <textarea
              className="w-full border rounded-md px-4 py-2"
              rows={4}
              placeholder="Any special requirements or preferences..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex items-center justify-center"
          >
            <IndianRupee className="h-5 w-5 mr-2" />
            Review Booking Details
          </button>
        </div>
      </form>

      {/* Booking Summary */}
      {showSummary && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-2xl font-bold">Booking Summary</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Event Type</h3>
                <p className="mt-1 text-lg">{formData.eventType}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p className="mt-1 text-lg">{formData.date} at {formData.timeSlot}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="mt-1 text-lg">{formData.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Number of Guests</h3>
                <p className="mt-1 text-lg">{formData.guests}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Selected Services</h3>
                <p className="mt-1 text-lg">{getServiceNames()}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Budget Range</h3>
                <p className="mt-1 text-lg">{formData.budget}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Additional Notes</h3>
                <p className="mt-1 text-lg">{formData.additionalNotes || 'None'}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              console.log('Proceeding to payment with:', formData);
            }}
            className="w-full mt-8 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 flex items-center justify-center"
          >
            <IndianRupee className="h-5 w-5 mr-2" />
            Confirm and Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;