import React from 'react';
import { ScrollFadeIn } from './ScrollFadeIn';
import { ProductHero } from './ProductHero';
import { CountdownTimer } from './CountdownTimer';
import { BiddingCard } from './BiddingCard';
import { BidHistory } from './BidHistory';
import { FloatingOrbs } from './FloatingOrbs';
import { GlassCard } from './GlassCard';
import { ShieldCheck, Truck, Clock, Search, ChevronRight } from 'lucide-react';
export function AuctionPage() {
  return (
    <div className="relative min-h-screen text-white selection:bg-purple-500/30 selection:text-white pb-12 overflow-x-hidden">
      <FloatingOrbs />

      {/* Navigation - Compact */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-lg border-b border-white/5" />
        <div className="relative max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-xl font-bold tracking-widest text-white flex items-center gap-2">

              <span className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs">
                H
              </span>
              HALE
            </a>
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Auctions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Private Sales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sell
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-purple-300 transition-colors">
              Log In
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <Search size={14} />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative pt-20 px-4 md:px-8 max-w-7xl mx-auto z-10">
        {/* Breadcrumb & Header - Compact */}
        <ScrollFadeIn className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
              <span className="hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <ChevronRight size={10} />
              <span className="hover:text-white cursor-pointer transition-colors">
                Watches
              </span>
              <ChevronRight size={10} />
              <span className="text-purple-400">Lot 42</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-1 leading-tight tracking-tight">
              1968 Patek Philippe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                Calatrava Ref. 3520
              </span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase block mb-0.5">
              Lot Number
            </span>
            <span className="text-2xl font-bold text-white/90">042</span>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollFadeIn delay={0.2}>
              <ProductHero />
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3} className="space-y-6">
              <div className="prose prose-sm prose-invert max-w-none">
                <h3 className="text-lg font-bold text-white mb-3">
                  Description
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  An exceptionally rare and fine 18K gold automatic wristwatch
                  with enamel dial. The Reference 3520 is one of the most
                  elegant Calatrava models ever produced, featuring the iconic
                  "Clous de Paris" hobnail bezel that catches the light with
                  every movement.
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  This particular example from 1968 remains in unpolished
                  condition, preserving the sharp definition of the case lines
                  and hallmarks. The porcelain-white dial features painted Roman
                  numerals that have aged beautifully, maintaining their crisp
                  black contrast.
                </p>

                <h3 className="text-lg font-bold text-white mt-6 mb-3">
                  Condition Report
                </h3>
                <ul className="space-y-2 text-white/70 list-none pl-0 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <span>
                      Case: Excellent condition with minor signs of wear
                      consistent with age. Hallmarks are deep and crisp.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span>
                      Dial: Flawless porcelain-white finish with no hairline
                      cracks or discoloration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                    <span>
                      Movement: Caliber 27-460 M, stamped with the Geneva Seal.
                      Running strong and keeping accurate time.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Authenticity Badges - Compact */}
              <GlassCard className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="flex flex-col items-center text-center p-1">
                  <div className="p-2 rounded-full bg-purple-500/10 mb-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-xs font-bold text-white mb-0.5">
                    Verified Authentic
                  </span>
                  <span className="text-[10px] text-white/50">
                    Inspected by experts
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-1 border-t md:border-t-0 md:border-l md:border-r border-white/10">
                  <div className="p-2 rounded-full bg-blue-500/10 mb-2">
                    <Truck className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-white mb-0.5">
                    Insured Shipping
                  </span>
                  <span className="text-[10px] text-white/50">
                    Global secure delivery
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-1 border-t md:border-t-0 border-white/10">
                  <div className="p-2 rounded-full bg-teal-500/10 mb-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-xs font-bold text-white mb-0.5">
                    24h Inspection
                  </span>
                  <span className="text-[10px] text-white/50">
                    Return period available
                  </span>
                </div>
              </GlassCard>
            </ScrollFadeIn>
          </div>

          {/* Right Column: Bidding & History */}
          <div className="lg:col-span-5 space-y-4">
            <div className="sticky top-20 space-y-4">
              <ScrollFadeIn delay={0.4}>
                <CountdownTimer />
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.5}>
                <BiddingCard />
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.6}>
                <BidHistory />
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.7}>
                <GlassCard
                  className="p-4 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer"
                  hoverEffect>

                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                      alt="Specialist"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />

                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      James Sterling
                    </p>
                    <p className="text-[10px] text-purple-300 uppercase tracking-wider font-bold">
                      Head of Watches
                    </p>
                  </div>
                  <button className="ml-auto text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    Contact
                  </button>
                </GlassCard>
              </ScrollFadeIn>
            </div>
          </div>
        </div>

        {/* Footer - Compact */}
        <footer className="mt-16 pt-8 border-t border-white/10 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xl font-bold tracking-widest text-white">
              HALE
            </span>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <span className="text-[10px] text-white/30">
              © 2024 Hale Auction House
            </span>
          </div>
        </footer>
      </main>
    </div>);

}