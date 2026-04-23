"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const varianData = [
  {
    id: 0,
    icon: '🍅',
    title: 'Sambal Asli',
    desc: 'Pedas manis yang pas, cocok banget untuk cocolan gorengan sore dan teman makan mie instan.',
  },
  {
    id: 1,
    icon: '🔥',
    title: 'Ekstra Pedas',
    desc: 'Dibuat khusus untuk kamu yang bernyali besar. Ekstra cabai, ekstra tantangan, bikin keringetan!',
  },
  {
    id: 2,
    icon: '🦐',
    title: 'Sambal Terasi',
    desc: 'Aroma terasi bakar asli berpadu dengan cabai pilihan. Sensasi makan serasa masakan ibu di rumah.',
  }
];

export default function Varian() {
  const [activeIndex, setActiveIndex] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % varianData.length);
    }, 3500); 
    return () => clearInterval(interval); 
  }, []);

  const getPosition = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + varianData.length) % varianData.length) return 'left';
    return 'right';
  };

  return (
    <section id="varian" className="py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Temukan Level Pedasmu</h2>
          <p className="text-slate-500 text-xl font-medium">Tiga varian legendaris untuk melengkapi momen makanmu.</p>
        </div>

        {/* animation */}
        <div className="relative h-[480px] w-full max-w-5xl mx-auto flex justify-center items-center">
          {varianData.map((item, index) => {
            const pos = getPosition(index);
            const isCenter = pos === 'center';

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: pos === 'center' ? '0%' : pos === 'left' ? '-105%' : '105%',
                  scale: isCenter ? 1.05 : 0.85,
                  zIndex: isCenter ? 30 : 10,
                  opacity: isCenter ? 1 : 0.4,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute w-full max-w-sm sm:max-w-md rounded-[2rem] overflow-hidden p-10 shadow-2xl transition-colors duration-500 border
                  ${isCenter
                    ? 'bg-gradient-to-br from-red-600 to-red-800 border-red-500 shadow-red-300' 
                    : 'bg-slate-100 border-slate-200' 
                  }`}
              >
                <div className={`absolute top-0 right-0 bg-yellow-400 text-slate-900 text-sm font-black px-5 py-2 rounded-bl-2xl shadow-md transition-opacity duration-500 delay-200 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                  BEST SELLER
                </div>

                {/* Ikon */}
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-inner transition-colors duration-500
                  ${isCenter ? 'bg-white/20 backdrop-blur-md text-white border border-white/30' : 'bg-white/60 text-slate-800'}
                `}>
                  {item.icon}
                </div>

                {/* Judul */}
                <h3 className={`text-3xl font-extrabold mb-4 transition-colors duration-500 ${isCenter ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>

                {/* Deskripsi */}
                <p className={`mb-8 text-lg leading-relaxed transition-colors duration-500 ${isCenter ? 'text-white/90 font-medium' : 'text-slate-600'}`}>
                  {item.desc}
                </p>

                {/* Tombol Detail */}
                <a href="#" className={`font-bold text-lg flex items-center gap-2 transition-colors duration-500
                  ${isCenter ? 'text-yellow-300 hover:text-white' : 'text-red-600 hover:text-red-800'}
                `}>
                  Cek Detail <span>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {varianData.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-red-600 w-10' : 'bg-slate-300 w-3 cursor-pointer hover:bg-red-300'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}