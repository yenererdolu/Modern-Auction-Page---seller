import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  glow = false
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-xl shadow-xl
        ${glow ? 'animate-pulse-glow border-purple-500/30' : ''}
        ${className}
      `}
      whileHover={
      hoverEffect ?
      {
        y: -8,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)'
      } :
      {}
      }
      transition={{
        duration: 0.3
      }}>

      {/* Glossy reflection gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>);

}