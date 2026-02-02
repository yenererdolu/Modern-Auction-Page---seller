import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
export function ProductHero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative group perspective-1000">
      <motion.div
        className="relative w-full aspect-[3/2] max-h-[320px] overflow-hidden rounded-xl bg-gray-900 border border-white/10 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          scale: 1.01
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}>

        <motion.img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2459&auto=format&fit=crop"
          alt="Vintage Patek Philippe Calatrava"
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }} />


        {/* Glass Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Floating Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
            Lot 042
          </span>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/80 backdrop-blur-md border border-purple-400/30 text-[10px] font-bold text-white uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Rare
          </span>
        </div>

        {/* Magnifier Hint */}
        <div
          className={`absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-lg transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

          <Maximize2 className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      {/* Reflection below */}
      <div className="absolute -bottom-2 left-4 right-4 h-2 bg-black/50 blur-xl rounded-[100%]" />
    </div>);

}