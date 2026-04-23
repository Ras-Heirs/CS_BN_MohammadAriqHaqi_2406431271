"use client";

import React from 'react';

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://thumbor.prod.vidiocdn.com/utfnRlEs8AeBdSsXYve3q3MQeVQ=/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/54414101/sambal_abc-1b9206.jpg" 
              alt="Logo ABC" 
              className="h-12 w-12 rounded-full shadow-sm" 
            />
            <span className="text-xl font-black text-slate-800 tracking-tight">Sambal</span>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <a href="#beranda" onClick={(e) => handleScroll(e, 'beranda')} className="text-slate-600 hover:text-red-600 font-semibold transition-colors">Beranda</a>
            <a href="#varian" onClick={(e) => handleScroll(e, 'varian')} className="text-slate-600 hover:text-red-600 font-semibold transition-colors">Varian</a>
            <a href="#testimoni" onClick={(e) => handleScroll(e, 'testimoni')} className="text-slate-600 hover:text-red-600 font-semibold transition-colors">Kisah Pedas</a>
          </div>
          <div>
            <button className="bg-red-600 text-white px-7 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}