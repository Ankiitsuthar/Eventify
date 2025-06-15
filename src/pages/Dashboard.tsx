import React from 'react';
import { Calendar, Clock, DollarSign, MessageSquare, ReceiptIndianRupee } from 'lucide-react';

function Dashboard() {
  const upcomingEvents = [
    {
      id: 1,
      name: "Corporate Lunch",
      date: "2024-03-15",
      time: "12:00 PM",
      services: ["Catering"],
      status: "Confirmed"
    },
    {
      id: 2,
      name: "Wedding Photography",
      date: "2024-04-20",
      time: "2:00 PM",
      services: ["Photography"],
      status: "Pending"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, Ankit! (Demo Page)</h1>
        <p className="text-gray-600">Manage your upcoming events and bookings</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Calendar, label: "Total Events", value: "5" },
          { icon: Clock, label: "Pending", value: "2" },
          { icon: ReceiptIndianRupee, label: "Total Spent", value: "2,450" },
          { icon: MessageSquare, label: "Messages", value: "3" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{event.name}</h3>
                <div className="text-sm text-gray-600">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Services: {event.services.join(", ")}</p>
                </div>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    event.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard