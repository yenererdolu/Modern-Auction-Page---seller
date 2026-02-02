import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
export function DashboardHeader() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg border-b border-white/5" />
      <div className="relative w-full px-6 h-14 flex justify-between items-center">
        {/* Left: Logo & Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
              B
            </span>
            <span className="text-xl font-bold tracking-widest text-white">
              BUGALGO
            </span>
          </a>

          <a
            href="#"
            className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">

            Canlı İhaleler
          </a>
        </div>

        {/* Right: Actions & User */}
        <div className="flex items-center gap-4">
          <button className="relative text-white/60 hover:text-white transition-colors">
            <Bell size={16} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f172a] animate-pulse"></span>
          </button>

          <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
              YE
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
              Yener Erdolu
            </span>
          </div>

          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white">
            <Search size={14} />
          </button>

          <button className="md:hidden text-white/60 hover:text-white transition-colors">
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>);

}