// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer always sticks to bottom if content is short */}
      <Footer />
    </div>
  );
};

export default Layout;
