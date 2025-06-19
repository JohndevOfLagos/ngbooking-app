// File: app/guest-home/page.jsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const dummyData = [
  { id: 1, title: "Lagos Hotel", description: "Top rated hotel in Lagos", image: "/images/hotel1.jpg" },
  { id: 2, title: "Abuja Resort", description: "Luxury resort in Abuja", image: "/images/resort1.jpg" },
  { id: 3, title: "Port Harcourt Inn", description: "Budget friendly inn", image: "/images/inn1.jpg" },
];

export default function GuestHomePage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Use dummy data, in real app this would be fetched
    setListings(dummyData);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Welcome to NGBookings</h1>
      <p className="text-center text-gray-600">Discover amazing stays and resorts across Nigeria</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white shadow rounded overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
