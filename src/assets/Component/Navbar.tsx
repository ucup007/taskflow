import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="absolute z-10 bg-white top-0 left-0 right-0 flex items-center justify-between px-20 py-3">
      <div className="flex items-center">
        <Link to="/" className="text-purple-600 font-bold text-2xl font-newsreader">TaskFlow</Link>
        <div className="ml-8 space-x-6">
          <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link to="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
          <Link to="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
          <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
        </div>
      </div>
      <Link 
        to="/boards" 
        className="bg-purple-600 text-white px-2 py-3 rounded-md text-sm font-semibold w-34 hover:bg-purple-900 transition duration-300"
      >
        Go to your boards
      </Link>
    </nav>
  );
}

export default Navbar;