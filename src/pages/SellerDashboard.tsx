import React, { Component } from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { FloatingOrbs } from '../components/FloatingOrbs';
import { GlassCard } from '../components/GlassCard';
import { ScrollFadeIn } from '../components/ScrollFadeIn';
import {
  TrendingUp,
  Package,
  Wallet,
  Eye,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Plus,
  Settings,
  CreditCard,
  MessageSquare } from
'lucide-react';
import { motion } from 'framer-motion';
// Stats Card Component
const StatCard = ({ title, value, subtext, icon: Icon, color, delay }: any) =>
<ScrollFadeIn delay={delay}>
    <GlassCard className="p-4 relative overflow-hidden group hover:bg-white/10 transition-colors">
      <div
      className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity text-${color}-400`}>

        <Icon size={64} />
      </div>

      <div className="relative z-10">
        <div
        className={`w-8 h-8 rounded-lg bg-${color}-500/20 flex items-center justify-center mb-3 border border-${color}-500/30 shadow-[0_0_15px_rgba(var(--${color}-500),0.2)]`}>

          <Icon size={16} className={`text-${color}-400`} />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <div className="flex items-center gap-1">
          <ArrowUpRight size={10} className="text-green-400" />
          <p className="text-[10px] font-medium text-green-400">{subtext}</p>
        </div>
      </div>
    </GlassCard>
  </ScrollFadeIn>;

// Activity Item Component
const ActivityItem = ({ title, time, amount, type, delay }: any) =>
<motion.div
  initial={{
    opacity: 0,
    x: -20
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    delay
  }}
  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">

    <div
    className={`w-2 h-2 rounded-full ${type === 'bid' ? 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]' : type === 'sale' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]'}`} />


    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold text-white truncate">{title}</p>
      <div className="flex items-center gap-1 text-[10px] text-white/40">
        <Clock size={8} />
        <span>{time}</span>
      </div>
    </div>

    {amount &&
  <span className="text-xs font-bold text-white/90 bg-white/5 px-2 py-1 rounded-md border border-white/5">
        {amount}
      </span>
  }
  </motion.div>;

export function SellerDashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-purple-500/30">
      <FloatingOrbs />

      <DashboardHeader />
      <DashboardSidebar />

      {/* Main Content */}
      <main className="pl-0 md:pl-64 pt-14 min-h-screen relative z-10">
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          {/* Welcome Header */}
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  Hoşgeldin,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                    Tech Store
                  </span>
                </h1>
                <p className="text-xs text-white/50">
                  Bugün satışların harika gidiyor! 🚀
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-white transition-colors">
                  Rapor Al
                </button>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center gap-2">
                  <Plus size={14} />
                  Yeni İhale
                </button>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Toplam Satış"
              value="₺125,400"
              subtext="%12 artış (bu ay)"
              icon={Wallet}
              color="purple"
              delay={0.1} />

            <StatCard
              title="Aktif İlanlar"
              value="12"
              subtext="3 yeni ilan"
              icon={Package}
              color="blue"
              delay={0.2} />

            <StatCard
              title="Bekleyen Ödemeler"
              value="₺8,200"
              subtext="2 işlem"
              icon={CreditCard}
              color="teal"
              delay={0.3} />

            <StatCard
              title="Görüntülenme"
              value="1,847"
              subtext="%5 artış (bu hafta)"
              icon={Eye}
              color="pink"
              delay={0.4} />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <ScrollFadeIn delay={0.5}>
                <GlassCard className="p-5 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock size={14} className="text-purple-400" />
                      Son Aktiviteler
                    </h3>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                      Tümünü Gör
                    </button>
                  </div>

                  <div className="space-y-1">
                    <ActivityItem
                      title="Yeni teklif: iPhone 14 Pro"
                      time="2 dk önce"
                      amount="₺28,500"
                      type="bid"
                      delay={0.6} />

                    <ActivityItem
                      title="Satış tamamlandı: MacBook Air M2"
                      time="1 saat önce"
                      amount="₺45,000"
                      type="sale"
                      delay={0.7} />

                    <ActivityItem
                      title="İlan onaylandı: Samsung QLED TV"
                      time="3 saat önce"
                      type="approve"
                      delay={0.8} />

                    <ActivityItem
                      title="Yeni takipçi: @ahmet_k"
                      time="5 saat önce"
                      type="follow"
                      delay={0.9} />

                  </div>
                </GlassCard>
              </ScrollFadeIn>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <ScrollFadeIn delay={0.6}>
                <GlassCard className="p-5 h-full">
                  <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-teal-400" />
                    Hızlı Aksiyonlar
                  </h3>

                  <div className="space-y-3">
                    <button className="w-full p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 hover:border-purple-500/50 transition-all group flex items-center gap-3">
                      <div className="p-2 rounded-md bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Plus size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white">
                          Yeni İhale Oluştur
                        </p>
                        <p className="text-[10px] text-white/40">
                          Hemen satışa başla
                        </p>
                      </div>
                    </button>

                    <button className="w-full p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white transition-colors">
                        <Package size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white">
                          İlanları Yönet
                        </p>
                        <p className="text-[10px] text-white/40">
                          Düzenle veya kaldır
                        </p>
                      </div>
                    </button>

                    <button className="w-full p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group flex items-center gap-3">
                      <div className="p-2 rounded-md bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white transition-colors">
                        <MessageSquare size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white">
                          Destek Al
                        </p>
                        <p className="text-[10px] text-white/40">
                          7/24 Canlı destek
                        </p>
                      </div>
                    </button>
                  </div>
                </GlassCard>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </main>
    </div>);

}