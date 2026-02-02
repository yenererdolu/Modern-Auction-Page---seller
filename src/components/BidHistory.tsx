import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Clock, User } from 'lucide-react';
interface Bid {
  id: string;
  bidder: string;
  amount: string;
  time: string;
  isNew?: boolean;
}
const bids: Bid[] = [
{
  id: '1',
  bidder: 'Private Collector (US)',
  amount: '$47,500',
  time: '2m ago',
  isNew: true
},
{
  id: '2',
  bidder: 'Bidder 8924',
  amount: '$47,000',
  time: '15m ago'
},
{
  id: '3',
  bidder: 'Bidder 3312',
  amount: '$46,500',
  time: '42m ago'
},
{
  id: '4',
  bidder: 'Private Collector (UK)',
  amount: '$46,000',
  time: '1h ago'
},
{
  id: '5',
  bidder: 'Bidder 1102',
  amount: '$45,500',
  time: '2h ago'
}];

export function BidHistory() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-white">Live Feed</h3>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-[10px] font-medium text-teal-300 uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {bids.map((bid, index) =>
        <motion.div
          key={bid.id}
          initial={{
            x: 50,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 100
          }}
          className={`
              relative p-2.5 rounded-lg border transition-all duration-300
              ${bid.isNew ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}
            `}>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div
                className={`p-1.5 rounded-full ${bid.isNew ? 'bg-purple-500/20 text-purple-200' : 'bg-white/10 text-white/40'}`}>

                  <User size={12} />
                </div>
                <div>
                  <p
                  className={`text-xs font-bold ${bid.isNew ? 'text-white' : 'text-white/70'}`}>

                    {bid.bidder}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-white/40 mt-0.5">
                    <Clock size={8} />
                    <span>{bid.time}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                className={`text-sm font-bold ${bid.isNew ? 'text-teal-300' : 'text-white/60'}`}>

                  {bid.amount}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 text-center">
        <button className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white/50 pb-0.5">
          View All 23 Bids
        </button>
      </div>
    </GlassCard>);

}