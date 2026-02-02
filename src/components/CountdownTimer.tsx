import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
// Single Flip Card Component - Optimized for density
const FlipCard = ({ value, label }: {value: number;label: string;}) => {
  const formattedValue = value.toString().padStart(2, '0');
  return (
    <div className="flex flex-col items-center mx-1">
      <div className="relative w-12 h-14 md:w-14 md:h-16 bg-white/5 rounded-md border border-white/10 shadow-lg backdrop-blur-md overflow-hidden perspective-1000">
        {/* Top Half */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent border-b border-white/5 overflow-hidden z-10">
          <span className="absolute top-0 left-0 right-0 h-[200%] flex items-center justify-center text-xl md:text-2xl font-bold text-white">
            {formattedValue}
          </span>
        </div>

        {/* Bottom Half */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent overflow-hidden z-10">
          <span className="absolute bottom-0 left-0 right-0 h-[200%] flex items-center justify-center text-xl md:text-2xl font-bold text-white">
            {formattedValue}
          </span>
        </div>

        {/* Animated Flip Overlay */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{
              rotateX: -180,
              opacity: 0
            }}
            animate={{
              rotateX: 0,
              opacity: 1
            }}
            exit={{
              rotateX: 180,
              opacity: 0
            }}
            transition={{
              duration: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20
            }}
            className="absolute inset-0 flex items-center justify-center backface-hidden">

            <span className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {formattedValue}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <span className="mt-1 text-[9px] font-bold tracking-[0.2em] text-blue-200 uppercase">
        {label}
      </span>
    </div>);

};
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0)
        return {
          ...prev,
          seconds: prev.seconds - 1
        };
        if (prev.minutes > 0)
        return {
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59
        };
        if (prev.hours > 0)
        return {
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59
        };
        if (prev.days > 0)
        return {
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <GlassCard className="p-4 flex flex-col items-center justify-center border-t-2 border-t-purple-500">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-purple-200 uppercase">
          Auction Ends In
        </span>
      </div>

      <div className="flex items-center justify-center">
        <FlipCard value={timeLeft.days} label="Days" />
        <div className="text-lg font-light text-white/20 mb-4 mx-1">:</div>
        <FlipCard value={timeLeft.hours} label="Hours" />
        <div className="text-lg font-light text-white/20 mb-4 mx-1">:</div>
        <FlipCard value={timeLeft.minutes} label="Mins" />
        <div className="text-lg font-light text-white/20 mb-4 mx-1">:</div>
        <FlipCard value={timeLeft.seconds} label="Secs" />
      </div>
    </GlassCard>);

}