"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={heroRef}
      id="beranda" 
      className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center overflow-hidden" 
    >
      {/* background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://tse1.mm.bing.net/th/id/OIP.HLvmAGafSyzFtJEhEl5eUgHaHa?rs=1&pid=ImgDetMain')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY, 
        }}
      />


      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge glassmorph */}
          <div className="inline-block bg-white/20 backdrop-blur-md text-white font-extrabold px-5 py-2 rounded-full text-sm mb-6 tracking-wide shadow-lg border border-white/30">
            🔥 #1 PILIHAN KELUARGA INDONESIA
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
            Pedasnya <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">Bikin Nagih</span>, Rasanya Selalu Pas.
          </h1>
          
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold drop-shadow-sm">
            Dari makan siang di rumah sampai kumpul bareng teman, Sambal ABC selalu jadi rahasia di balik setiap hidangan istimewa. Dibuat dari cabai segar pilihan untuk kepuasan sejati.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl">
              Eksplor Rasa
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all">
              Tonton Video
            </button>
          </div>
        </motion.div>

        {/* Gambar floating */}
        <motion.div 
          className="flex-1 relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/90f4e2199979661.Y3JvcCwyMzAxLDE4MDAsNTEsMA.png"
            alt="Produk Unggulan"
            className="relative z-10 w-full h-auto max-w-md mx-auto object-cover rounded-3xl shadow-2xl border-4 border-white"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}