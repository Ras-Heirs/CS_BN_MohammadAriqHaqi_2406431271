"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const testimoniData = [
  {
    id: 1,
    name: "Heng",
    role: "Vespa Rider",
    quote: "Rasa pedesnya itu loh membuat aku terbakarss, apalagi kalo bukan sambel abc",
    initials: "H",
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Bram",
    role: "Kema skuy",
    quote: "Varian Terasinya juara! Aromanya asli, kerasa banget kayak sambal ulekan ibu di rumah. Hemat dan nikmat!",
    initials: "B",
    bgColor: "bg-orange-500",
  },
  {
    id: 3,
    name: "Goy",
    role: "Mibombo Master",
    quote: "Buat yang suka tantangan, Ekstra Pedasnya wajib dicoba. Garrzzz..!!! Pedasnya nembus sampai pikiran!",
    initials: "G",
    bgColor: "bg-emerald-500",
  },
  {
    id: 4,
    name: "Mbip",
    role: "Konti Makan",
    quote: "nyesel banget lohya kalau ga oakai sambal abc, rasanya terlalu zammm enaknyo",
    initials: "M",
    bgColor: "bg-blue-500",
  },
  {
    id: 5,
    name: "Ramdya",
    role: "Kestarispek President",
    quote: "Praktis dibawa kemana-mana, gak perlu repot ngulek lagi. Teman setia makan siang di kantor.",
    initials: "R",
    bgColor: "bg-purple-500",
  },
];

const bubbleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: -30,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Testimoni() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimoniData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimoni = testimoniData[activeIndex];

  return (
    <section id="testimoni" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-black text-white mb-20 tracking-tight"
        >
          Kisah <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">Pedas</span> Mereka
        </motion.h2>

        {/* wrapper animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full flex justify-center h-[350px] sm:h-[300px]"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bg-slate-800/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-700/50 shadow-2xl flex flex-col justify-between cursor-default relative w-full max-w-2xl"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex flex-col h-full">
                <div className="text-6xl text-slate-600 font-serif absolute top-4 left-6 opacity-30">“</div>
                
                <p className="text-2xl text-slate-200 italic mb-10 pt-6 relative leading-relaxed z-10 drop-shadow-sm">
                  "{currentTestimoni.quote}"
                </p>

                <div className="flex items-center justify-center gap-4 border-t border-slate-700/50 pt-8 mt-auto z-10">
                  <div className={`w-16 h-16 ${currentTestimoni.bgColor} rounded-full flex items-center justify-center text-white font-black text-3xl shadow-lg ring-4 ring-slate-700/50`}>
                    {currentTestimoni.initials}
                  </div>
                  
                  <div className="text-left">
                    <div className="text-white font-extrabold text-xl">
                      {currentTestimoni.name}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">
                      {currentTestimoni.role}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800/60 border-l border-b border-slate-700/50 rotate-45 backdrop-blur-xl -z-10"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center gap-3 mt-12">
          {testimoniData.map((_, index) => (
            <motion.div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-red-600 w-10' : 'bg-slate-700 w-3 cursor-pointer hover:bg-slate-500'}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}