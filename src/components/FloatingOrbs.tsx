import React from 'react';
import { motion } from 'framer-motion';
export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-teal-900/40" />

      {/* Orb 1 - Purple */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[100px]"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      {/* Orb 2 - Blue */}
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[80px]"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />


      {/* Orb 3 - Teal */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-teal-500/20 blur-[120px]"
        animate={{
          y: [0, 60, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }} />


      {/* Orb 4 - Accent */}
      <motion.div
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-[90px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5
        }} />


      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>);

}