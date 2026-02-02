import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { ArrowRight, Zap } from 'lucide-react';
export function BiddingCard() {
  const [bidAmount, setBidAmount] = useState('48,000');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <GlassCard glow={true} className="p-4 md:p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200 uppercase block mb-1">
            Current Bid
          </span>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              $47,500
            </h2>
            <span className="text-xs text-white/60 font-medium">USD</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200 uppercase block mb-1">
            Reserve
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-300 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded-full">
            <Zap size={8} className="fill-current" />
            MET
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative group">
          <label htmlFor="bid-amount" className="sr-only">
            Bid Amount
          </label>
          <div
            className={`
            relative rounded-lg transition-all duration-300
            ${isFocused ? 'bg-white/10 ring-2 ring-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'bg-white/5 hover:bg-white/10'}
          `}>

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg font-light">
              $
            </span>
            <input
              id="bid-amount"
              type="text"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent border-0 py-3 pl-8 pr-4 text-lg font-bold text-white placeholder-white/20 focus:ring-0 transition-all duration-300" />

          </div>
          <div className="flex justify-between mt-2 text-[10px] font-medium text-white/40">
            <span>Minimum bid: $48,000</span>
            <span>Increment: $500</span>
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02
          }}
          whileTap={{
            scale: 0.98
          }}
          className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]">

          <div className="relative bg-black/20 backdrop-blur-sm rounded-lg py-3 px-4 transition-all duration-300 group-hover:bg-transparent">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Place Bid
              </span>
              <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
        </motion.button>

        <p className="text-[10px] text-white/40 text-center leading-relaxed max-w-xs mx-auto">
          By placing a bid, you agree to our{' '}
          <a
            href="#"
            className="text-white/70 hover:text-white underline decoration-white/30 transition-colors">

            Terms
          </a>
          . Buyer's premium: 20%.
        </p>
      </div>
    </GlassCard>);

}