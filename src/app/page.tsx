'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, MapPin, CheckCircle, Mail, Moon, Download, Star, ChevronDown, Check } from 'lucide-react';
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
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
          <a href="#day0" className="hover:text-indigo-600 transition">Start</a>
          <a href="#day1" className="hover:text-indigo-600 transition">07:00</a>
          <a href="#day2" className="hover:text-indigo-600 transition">08:15</a>
          <a href="#day3" className="hover:text-indigo-600 transition">16:00</a>
          <a href="#day4" className="hover:text-indigo-600 transition">19:30</a>
          <a href="#day5" className="hover:text-indigo-600 transition">21:30</a>
        </div>
        <a href="#day6" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition shadow-sm">
          Get the app
        </a>
      </nav>

      {/* Hero / Start */}
      <section id="day0" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center relative overflow-hidden">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-indigo-600 font-medium mb-4"
        >
          psst… it's almost morning
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-3xl leading-tight"
        >
          One day with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">FamilyHub</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-xl text-slate-500 max-w-2xl mb-16 leading-relaxed"
        >
          Scroll to play through a whole day — wake-up to lights-out. First, pick who's coming with you.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 max-w-2xl"
        >
          {guides.map((guide) => (
            <button 
              key={guide}
              onClick={() => setActiveGuide(guide)}
              className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${activeGuide === guide ? 'bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-200' : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100 hover:scale-105'}`}
            >
              <span className="block text-xs mb-1 opacity-50">z z</span>
              {guide}
            </button>
          ))}
        </motion.div>
        
        <p className="mt-8 text-sm text-slate-400 font-medium h-6">
          {activeGuide ? `${activeGuide} is awake and ready!` : "everyone's still asleep — tap one to wake your guide"}
        </p>

        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-slate-300"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 07:00 Wake Up */}
      <section id="day1" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div className="text-indigo-600 font-bold tracking-widest text-sm uppercase">07:00 · wake up</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The alarm is a space launch 🚀</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            No blaring siren. {activeGuide || 'Zap'} counts down, the room lights up, and getting out of bed earns the first points of the day.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
          <div className="text-6xl mb-6 mt-4">☀️</div>
          <h3 className="text-2xl font-bold mb-2">07:00</h3>
          <p className="text-slate-500 mb-8">Liftoff! +10 ⭐ for a smooth launch</p>
          <button className="bg-slate-900 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition">
            <Rocket size={20} /> Launched!
          </button>
        </motion.div>
      </section>

      {/* 08:15 School Run */}
      <section id="day2" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-12 relative">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl z-10">🏠</div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-emerald-100 -translate-y-1/2"></div>
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg shadow-emerald-200">🏫</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-medium mb-4">
              <MapPin size={16} /> Lina arrived at school
            </div>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">live only · nothing kept</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div className="text-emerald-600 font-bold tracking-widest text-sm uppercase">08:15 · school run</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">One quiet ping: made it 🎒</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Safe zones say "arrived", not "tracked". Live location only — FamilyHub keeps no history of where your child has been.
          </p>
        </motion.div>
      </section>

      {/* 16:00 Quest Time */}
      <section id="day3" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div className="text-amber-500 font-bold tracking-widest text-sm uppercase">16:00 · quest time</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Chores, but make them quests ⭐</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            You set the quests and the rewards. {activeGuide || 'Zap'} does the cheering. Go on — tap them done.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-amber-50 p-8 rounded-[2rem] shadow-xl shadow-amber-100/50 border border-amber-100"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-3xl font-bold text-amber-600 flex items-center gap-2">
                55 <Star className="fill-amber-500 text-amber-500" />
              </div>
              <div className="text-sm text-amber-800 font-medium">earned today</div>
            </div>
            <div className="text-4xl">🔥</div>
          </div>

          <div className="space-y-3">
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
                className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${quests[i] ? 'bg-amber-500 text-white shadow-md' : 'bg-white hover:bg-amber-100 text-slate-700 shadow-sm'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${quests[i] ? 'border-white' : 'border-amber-300'}`}>
                  {quests[i] && <Check size={14} />}
                </div>
                <span className="text-xl mr-3">{q.icon}</span>
                <span className={`font-medium flex-1 text-left ${quests[i] ? 'line-through opacity-80' : ''}`}>{q.task}</span>
                <span className="font-bold text-sm">{quests[i] ? 'done!' : q.pts}</span>
              </button>
            ))}
          </div>
          
          {quests.every(Boolean) && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center text-amber-600 font-bold bg-amber-100 py-3 rounded-xl">
              ALL DONE! Day 6 streak — you legend! 🔥
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* 19:30 Mail */}
      <section id="day4" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-purple-50 p-8 rounded-[2rem] shadow-xl shadow-purple-100/50 border border-purple-100"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl">👨</div>
              <div>
                <div className="font-bold text-slate-900">From Dad</div>
                <div className="text-xs text-purple-600 font-medium">word for word</div>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              "Proud of you for the math test. Pizza on Friday to celebrate? 🍕"
            </p>
            <div className="mt-6 bg-purple-50 rounded-lg p-3 flex items-center gap-3 text-purple-700 cursor-pointer hover:bg-purple-100 transition">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center pl-1">▶</div>
              <span className="font-medium text-sm">voice letter · 0:11</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white py-3 rounded-xl font-bold text-slate-600 hover:bg-purple-100 transition">💜</button>
            <button className="flex-1 bg-white py-3 rounded-xl font-bold text-slate-600 hover:bg-purple-100 transition">🍕 YES</button>
            <button className="flex-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition shadow-md shadow-purple-200">
              🎙 reply
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div className="text-purple-600 font-bold tracking-widest text-sm uppercase">19:30 · you've got mail</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A letter, not a notification 💌</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Your words wait as a sealed envelope — {activeGuide || 'Zap'} delivers them signed, word for word, never rewritten. Go ahead, open it.
          </p>
        </motion.div>
      </section>

      {/* 21:30 Lights Out */}
      <section id="day5" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 space-y-6"
        >
          <div className="text-blue-600 font-bold tracking-widest text-sm uppercase">21:30 · lights out</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The phone goes to sleep too 😴</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            No guard rails slamming shut. {activeGuide || 'Zap'} naps, and the lock screen always tells the truth: "Mum set bedtime for 21:30" — never "you've been bad."
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="flex-1 bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-slate-800 text-center relative overflow-hidden"
        >
          <div className="text-5xl mb-2">😴</div>
          <div className="text-blue-400 text-sm font-bold tracking-wider mb-6">z z z</div>
          <h3 className="text-2xl font-bold text-white mb-2">Shhh… {activeGuide || 'Zap'} is napping</h3>
          <p className="text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
            Mum set bedtime for 21:30. Everything's back at 07:00.
          </p>
          <div className="space-y-3 mb-8">
            <button className="w-full bg-slate-800 text-slate-300 py-3 rounded-xl font-medium hover:bg-slate-700 transition flex items-center justify-center gap-2">
              🌙 Night sounds
            </button>
            <button className="w-full bg-slate-800 text-slate-300 py-3 rounded-xl font-medium hover:bg-slate-700 transition flex items-center justify-center gap-2">
              💌 Read mail
            </button>
          </div>
          <p className="text-xs text-slate-500">Grown-up? Emergency PIN unlock · SOS always works</p>
        </motion.div>
      </section>

      {/* Footer / CTA */}
      <section id="day6" className="py-32 px-6 text-center bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <div className="text-indigo-200 font-bold tracking-widest text-sm uppercase mb-6">that was one day</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">Calm for you.<br/>A buddy for them.</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Free on both stores. Set it up together tonight — that first letter matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <a href="#" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-3">
              <Download size={24} /> Download on the App Store
            </a>
            <a href="#" className="bg-indigo-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-900 transition flex items-center justify-center gap-3">
              <Download size={24} /> Get it on Google Play
            </a>
          </div>
          
          <div className="pt-12 border-t border-indigo-500/50 text-indigo-200 text-sm flex flex-col items-center gap-4">
            <p>FamilyHub · honest by design — parent words are always signed, locks always say the real reason 💜</p>
            <div className="flex gap-6 mt-4">
              <Link href="/privacy-policy" className="hover:text-white transition underline underline-offset-4">Privacy Policy</Link>
              <Link href="/delete-account" className="hover:text-white transition underline underline-offset-4">Delete Account</Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
