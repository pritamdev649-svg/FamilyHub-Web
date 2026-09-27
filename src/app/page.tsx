'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, MapPin, CheckCircle, Mail, Download, Star, ChevronDown, Check, Swords, Coins, ShieldAlert, Scroll } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [quests, setQuests] = useState([false, false, false]);

  const guides = ['Pip', 'Ember', 'Tink', 'Luna', 'Coco', 'Zap'];

  return (
    <main className="bg-[#f8fafc] min-h-screen text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">🫧</div>
          FamilyHub
        </div>
        <div className="hidden md:flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#start" className="hover:text-indigo-600 transition">Start Game</a>
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#gameplay" className="hover:text-indigo-600 transition">Gameplay</a>
        </div>
        <a href="#download" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-indigo-700 transition shadow-sm border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1">
          Play Now
        </a>
      </nav>

      {/* Hero / Start */}
      <section id="start" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center relative overflow-hidden">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-indigo-600 font-bold mb-4 uppercase tracking-widest"
        >
          Level up your household
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 max-w-4xl leading-tight"
        >
          Running your family is now a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Multiplayer Game</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-xl text-slate-500 max-w-2xl mb-16 leading-relaxed"
        >
          FamilyHub turns chores into quests, allowances into loot, and safety into team coordination. First, pick your guide.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 max-w-2xl"
        >
          {guides.map((guide) => (
            <button 
              key={guide}
              onClick={() => setActiveGuide(guide)}
              className={`px-6 py-4 rounded-2xl text-lg font-black uppercase tracking-wider transition-all duration-300 ${activeGuide === guide ? 'bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-200 border-b-4 border-indigo-800' : 'bg-white text-slate-400 hover:bg-slate-50 border-2 border-slate-200 hover:scale-105 border-b-4'}`}
            >
              {guide}
            </button>
          ))}
        </motion.div>
        
        <p className="mt-8 text-sm text-slate-400 font-bold uppercase tracking-widest h-6">
          {activeGuide ? `${activeGuide} joins your party!` : "Select your companion to begin"}
        </p>

        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-slate-300"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Features (Game Mechanics) */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto border-t-4 border-dashed border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Core Mechanics</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">What makes FamilyHub the ultimate co-op experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Daily Quests", desc: "Task management. Assign chores, study goals, and errands. Earn XP.", icon: Swords, color: "text-rose-500", bg: "bg-rose-100", border: "border-rose-200" },
            { title: "Guild Ledger", desc: "Shared money ledger. Track allowances, set savings goals, manage loot.", icon: Coins, color: "text-amber-500", bg: "bg-amber-100", border: "border-amber-200" },
            { title: "Town Square", desc: "Notice board. Pin important family announcements for the whole party.", icon: Scroll, color: "text-emerald-500", bg: "bg-emerald-100", border: "border-emerald-200" },
            { title: "Distress Flare", desc: "SOS Alerts. One tap alerts the whole family with live location tracking.", icon: ShieldAlert, color: "text-blue-500", bg: "bg-blue-100", border: "border-blue-200" },
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className={`p-6 bg-white rounded-3xl border-2 ${f.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 ${f.bg} ${f.color} rounded-2xl flex items-center justify-center mb-6`}>
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">{f.title}</h3>
              <p className="text-slate-600 font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gameplay Narrative */}
      <section id="gameplay" className="py-20 border-t border-slate-200 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">One day in-game</h2>
        </div>
        
        {/* 07:00 Wake Up */}
        <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-6"
          >
            <div className="text-indigo-600 font-bold tracking-widest text-sm uppercase">07:00 · wake up</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The alarm is a space launch 🚀</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              No blaring siren. {activeGuide || 'Zap'} counts down, the room lights up, and getting out of bed earns the first XP of the day.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
            className="flex-1 bg-slate-50 p-8 rounded-[2rem] border-4 border-slate-200 relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-400 to-red-500"></div>
            <div className="text-6xl mb-6 mt-4">☀️</div>
            <h3 className="text-3xl font-black mb-2 uppercase">07:00</h3>
            <p className="text-slate-500 font-bold mb-8">Liftoff! +10 ⭐ for a smooth launch</p>
            <button className="bg-slate-900 text-white w-full py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition border-b-4 border-slate-950 active:border-b-0 active:translate-y-1">
              <Rocket size={20} /> Launched!
            </button>
          </motion.div>
        </div>

        {/* 16:00 Quest Time */}
        <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
            className="flex-1 bg-amber-50 p-8 rounded-[2rem] border-4 border-amber-200"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="text-4xl font-black text-amber-600 flex items-center gap-2">
                  55 <Star className="fill-amber-500 text-amber-500" />
                </div>
                <div className="text-sm text-amber-800 font-bold uppercase tracking-wider mt-1">XP earned today</div>
              </div>
              <div className="text-5xl drop-shadow-sm">🔥</div>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🛏️', task: 'Make the bed', pts: '+10 ⭐' },
                { icon: '📗', task: 'Read 20 minutes', pts: '+15 ⭐' },
                { icon: '🐕', task: 'Walk Biscuit', pts: '+20 ⭐' }
              ].map((q, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    const newQ = [...quests];
                    newQ[i] = !newQ[i];
                    setQuests(newQ);
                  }}
                  className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 border-b-4 active:border-b-0 active:translate-y-1 ${quests[i] ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'}`}
                >
                  <div className={`w-8 h-8 rounded-full border-4 mr-4 flex items-center justify-center ${quests[i] ? 'border-white' : 'border-slate-200'}`}>
                    {quests[i] && <Check strokeWidth={4} size={16} />}
                  </div>
                  <span className="text-2xl mr-4">{q.icon}</span>
                  <span className={`font-bold text-lg flex-1 text-left ${quests[i] ? 'line-through opacity-80' : ''}`}>{q.task}</span>
                  <span className="font-black tracking-wider text-sm">{quests[i] ? 'DONE!' : q.pts}</span>
                </button>
              ))}
            </div>
            
            {quests.every(Boolean) && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-8 text-center text-amber-600 font-black text-xl uppercase bg-amber-200 py-4 rounded-2xl border-2 border-amber-300 shadow-inner">
                ALL QUESTS COMPLETE! 🔥
              </motion.div>
            )}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-6"
          >
            <div className="text-amber-500 font-bold tracking-widest text-sm uppercase">16:00 · quest time</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Chores, but make them quests ⭐</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              You set the quests and the loot. {activeGuide || 'Zap'} does the cheering. Turn everyday routines into a rewarding game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="download" className="py-32 px-6 text-center bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight uppercase">Ready to Start<br/>Playing?</h2>
          <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto font-medium">
            FamilyHub is free to play on both stores. Download now and invite your party.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <a href="#" className="bg-white text-indigo-900 px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-wider hover:bg-indigo-50 transition border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 flex items-center justify-center gap-3">
              <Download size={24} strokeWidth={3} /> App Store
            </a>
            <a href="#" className="bg-indigo-600 text-white px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-wider hover:bg-indigo-500 transition border-b-4 border-indigo-950 active:border-b-0 active:translate-y-1 flex items-center justify-center gap-3">
              <Download size={24} strokeWidth={3} /> Google Play
            </a>
          </div>
          
          <div className="pt-12 border-t-2 border-indigo-800/50 text-indigo-300 font-bold flex flex-col items-center gap-4 uppercase tracking-widest text-xs">
            <p>FamilyHub · Multiplayer Household Management 🎮</p>
            <div className="flex gap-8 mt-4">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/delete-account" className="hover:text-white transition">Delete Account</Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
