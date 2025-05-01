import React from 'react'

import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-6 md:px-10 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Prime Estate</h2>
      </div>

      <div>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
          <li><a href="#contact_us" className="hover:text-yellow-400 transition">Contact Us</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
          <li><a href="#services" className="hover:text-yellow-400 transition">Our Services</a></li>
          <li><a href="#review" className="hover:text-yellow-400 transition">What Our Clients Say</a></li>
          <li><NavLink to="/buy-home" className="hover:text-yellow-400 transition">Buy A Property</NavLink></li>
          <li><NavLink to="/sell-home" className="hover:text-yellow-400 transition">Sell A Property</NavLink></li>
          <li><NavLink to="#" className="hover:text-yellow-400 transition">Facebook</NavLink></li>
          <li><NavLink to="#" className="hover:text-yellow-400 transition">Twitter</NavLink></li>
          <li><NavLink to="#" className="hover:text-yellow-400 transition">Instagram</NavLink></li>
        </ul>
      </div>

      <div>
        <ul className="space-y-0">
        </ul>
      </div>
    </div>

    <div className="text-center mt-10 text-sm text-gray-400">
      <p>&copy; 2025 PrimeEstate. All Rights Reserved.</p>
    </div>
  </div>
    </footer>
  )
}

export default Footer