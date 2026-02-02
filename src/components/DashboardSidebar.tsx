import React from 'react';
import {
  LayoutDashboard,
  Plus,
  Trophy,
  History,
  Settings,
  LogOut } from
'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
const MenuItem = ({ icon: Icon, label, active, onClick }: MenuItemProps) =>
<button
  onClick={onClick}
  className={`
      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group relative overflow-hidden
      ${active ? 'text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}
    `}>

    {active &&
  <motion.div
    layoutId="activeSidebarBg"
    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 rounded-lg" />

  }

    <div
    className={`relative z-10 p-1.5 rounded-md ${active ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'bg-white/5 group-hover:bg-white/10'}`}>

      <Icon size={14} className={active ? 'text-white' : 'text-white/60'} />
    </div>

    <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest">
      {label}
    </span>

    {active &&
  <motion.div
    layoutId="activeIndicator"
    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />

  }
  </button>;

export function DashboardSidebar() {
  return (
    <aside className="hidden md:flex w-64 fixed left-0 top-14 bottom-0 z-40 flex-col p-4">
      <GlassCard className="h-full flex flex-col p-4 !bg-black/20 !backdrop-blur-xl !border-white/5">
        {/* Sidebar Header */}
        <div className="mb-6 px-2">
          <span className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase block mb-1">
            Yönetim
          </span>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Satıcı Paneli
          </h2>
        </div>

        {/* Menu Items */}
        <div className="flex-1 space-y-1">
          <MenuItem icon={LayoutDashboard} label="Panel" active={true} />
          <MenuItem icon={Plus} label="İhale Oluştur" />
          <MenuItem icon={Trophy} label="Aktif İlanlar" />
          <MenuItem icon={History} label="Satış Geçmişi" />
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 border-t border-white/5 space-y-1">
          <MenuItem icon={Settings} label="Ayarlar" />

          <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
              NT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Nova Tech</p>
              <p className="text-[9px] text-white/40 uppercase tracking-wider truncate">
                Kurumsal
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    </aside>);

}