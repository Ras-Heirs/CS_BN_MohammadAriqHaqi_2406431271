"use client";

import React, { useState, useEffect } from 'react';
// Import semua komponen yang sudah kita buat
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Varian from '../components/Varian';
import Testimoni from '../components/Testimoni';
import Footer from '../components/Footer';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (!isLoading) {
      setShowMainContent(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden scroll-smooth relative">

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-red-600 transition-all duration-1000 ease-out 
          ${isLoading ? 'opacity-100 scale-100' : 'opacity-0 scale-150 pointer-events-none'}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 animate-bounce">
            <span className="text-6xl md:text-8xl font-black text-white tracking-tighter shadow-sm">ABC</span>
            <span className="text-3xl md:text-5xl font-bold text-yellow-300">Sambal</span>
          </div>
          <div className="mt-8 flex gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* main page */}
      <div
        className={`transition-all duration-1000 ease-in-out 
          ${showMainContent ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-95'}`}
      >
        <Navbar />
        <Hero />
        <Varian />
        <Testimoni />
        <Footer />
      </div>
      
    </div>
  );
}