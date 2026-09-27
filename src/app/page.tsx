'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, MapPin, Check, Play, Moon, Star, Download } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [quests, setQuests] = useState([false, false, false]);
  const guides = ['Pip', 'Ember', 'Tink', 'Luna', 'Coco', 'Zap'];

  return (
    <main className="bg-white min-h-screen text-[#111111] font-sans antialiased selection:bg-indigo-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 transition-all">
        <div className="font-semibold text-lg tracking-tight flex items-center gap-2">
          FamilyHub
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#day0" className="hover:text-black transition-colors">Start</a>
          <a href="#day1" className="hover:text-black transition-colors">07:00</a>
          <a href="#day2" className="hover:text-black transition-colors">08:15</a>
          <a href="#day3" className="hover:text-black transition-colors">16:00</a>
          <a href="#day4" className="hover:text-black transition-colors">19:30</a>
          <a href="#day5" className="hover:text-black transition-colors">21:30</a>
        </div>
        <a href="#download" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-transform hover:scale-105 active:scale-95">
          Get the app
        </a>
      </nav>

      {/* Hero / Start */}
      <section id="day0" className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          className="text-indigo-600 font-medium mb-6 tracking-wide text-sm"
        >
          psst… it's almost morning
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-black mb-6 max-w-3xl leading-[1.1]"
        >
          One day with FamilyHub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-500 max-w-xl mx-auto mb-16 leading-relaxed font-normal"
        >
          Scroll to play through a whole day — wake-up to lights-out. First, pick who's coming with you.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {guides.map((guide) => (
            <button 
              key={guide}
              onClick={() => setActiveGuide(guide)}
              className={`px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex flex-col items-center ${
                activeGuide === guide 
                ? 'bg-black text-white shadow-xl scale-[1.02]' 
                : 'bg-[#f5f5f7] text-gray-400 hover:bg-gray-100 hover:text-black'
              }`}
            >
              <span className={`block text-xs mb-1 transition-opacity ${activeGuide === guide ? 'opacity-0' : 'opacity-40'}`}>
                z z
              </span>
              {guide}
            </button>
          ))}
        </motion.div>
        
        <p className="mt-12 text-sm text-gray-400 font-medium h-6">
          {activeGuide ? `${activeGuide} is awake and ready!` : "everyone's still asleep — tap one to wake your guide"}
        </p>
      </section>

      {/* 07:00 Wake Up */}
      <section id="day1" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 max-w-lg"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase">07:00 · wake up</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">The alarm is a space launch <span className="inline-block text-3xl">🚀</span></h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            No blaring siren. {activeGuide || 'Zap'} counts down, the room lights up, and getting out of bed earns the first points of the day.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 w-full bg-[#f5f5f7] p-10 rounded-[2.5rem] relative overflow-hidden text-center group hover:bg-[#f0f0f2] transition-colors"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-500"></div>
          <div className="text-7xl mb-6 mt-4 opacity-90 transition-transform group-hover:scale-110 duration-500">☀️</div>
          <h3 className="text-3xl font-bold mb-2">07:00</h3>
          <p className="text-gray-500 font-medium mb-10">Liftoff! +10 ⭐ for a smooth launch</p>
          <button className="bg-black text-white w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-[0.98]">
            <Rocket size={18} /> Launched!
          </button>
        </motion.div>
      </section>

      {/* 08:15 School Run */}
      <section id="day2" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 w-full bg-[#f5f5f7] p-10 rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-16 relative px-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl z-10 shadow-sm">🏠</div>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-emerald-100 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-emerald-400 -translate-y-1/2 origin-left scale-x-100 transition-transform duration-1000"></div>
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-3xl z-10 shadow-lg shadow-emerald-500/30 text-white">🏫</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full font-semibold text-sm mb-4">
              <MapPin size={16} /> Lina arrived at school
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">live only · nothing kept</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 max-w-lg"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase">08:15 · school run</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">One quiet ping: made it <span className="inline-block text-3xl">🎒</span></h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            Safe zones say "arrived", not "tracked". Live location only — FamilyHub keeps no history of where your child has been.
          </p>
        </motion.div>
      </section>

      {/* 16:00 Quest Time */}
      <section id="day3" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 max-w-lg"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase">16:00 · quest time</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Chores, but make them quests <span className="inline-block text-3xl">⭐</span></h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            You set the quests and the rewards. {activeGuide || 'Zap'} does the cheering. Go on — tap them done.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 w-full bg-[#f5f5f7] p-10 rounded-[2.5rem]"
        >
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <div className="text-4xl font-bold text-amber-500 flex items-center gap-2 mb-1">
                55 <Star className="fill-amber-500 text-amber-500 w-8 h-8" />
              </div>
              <div className="text-sm text-gray-400 font-semibold">earned today</div>
            </div>
            <div className="text-4xl grayscale opacity-80">🔥</div>
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
                className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 active:scale-[0.98] ${quests[i] ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${quests[i] ? 'border-white bg-amber-500' : 'border-gray-200 bg-gray-50'}`}>
                  {quests[i] && <Check strokeWidth={3} size={14} />}
                </div>
                <span className="text-2xl mr-4">{q.icon}</span>
                <span className={`font-semibold text-[17px] flex-1 text-left ${quests[i] ? 'line-through opacity-90' : ''}`}>{q.task}</span>
                <span className="font-bold text-sm tracking-wide">{quests[i] ? 'done!' : q.pts}</span>
              </button>
            ))}
          </div>
          
          {quests.every(Boolean) && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center text-amber-600 font-bold bg-amber-100/50 py-4 rounded-2xl">
              ALL DONE! Day 6 streak — you legend! 🔥
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* 19:30 Mail */}
      <section id="day4" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 w-full bg-[#f5f5f7] p-10 rounded-[2.5rem]"
        >
          <div className="bg-white p-8 rounded-3xl shadow-sm mb-4 border border-gray-100">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-6">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl">👨</div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">From Dad</div>
                <div className="text-sm text-purple-600 font-medium">word for word</div>
              </div>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-8">
              "Proud of you for the math test. Pizza on Friday to celebrate? 🍕"
            </p>
            <div className="bg-[#f5f5f7] rounded-2xl p-4 flex items-center gap-4 text-purple-700 cursor-pointer hover:bg-purple-50 transition-colors">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center pl-1 shadow-md shadow-purple-600/20">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="font-semibold text-sm">voice letter · 0:11</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white py-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">💜</button>
            <button className="flex-1 bg-white py-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">🍕 YES</button>
            <button className="flex-2 bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-all active:scale-[0.98] shadow-md shadow-purple-600/20">
              🎙 reply
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 max-w-lg"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase">19:30 · you've got mail</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">A letter, not a notification <span className="inline-block text-3xl">💌</span></h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            Your words wait as a sealed envelope — {activeGuide || 'Zap'} delivers them signed, word for word, never rewritten. Go ahead, open it.
          </p>
        </motion.div>
      </section>

      {/* 21:30 Lights Out */}
      <section id="day5" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 max-w-lg"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase">21:30 · lights out</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">The phone goes to sleep too <span className="inline-block text-3xl">😴</span></h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            No guard rails slamming shut. {activeGuide || 'Zap'} naps, and the lock screen always tells the truth: "Mum set bedtime for 21:30" — never "you've been bad."
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.7 }}
          className="flex-1 w-full bg-[#111111] p-10 rounded-[2.5rem] shadow-2xl shadow-black/20 text-center relative overflow-hidden"
        >
          <div className="text-6xl mb-4 opacity-80 mt-2">😴</div>
          <div className="text-indigo-400 text-sm font-bold tracking-[0.3em] mb-8">z z z</div>
          <h3 className="text-2xl font-bold text-white mb-3">Shhh… {activeGuide || 'Zap'} is napping</h3>
          <p className="text-gray-400 mb-10 max-w-[250px] mx-auto leading-relaxed text-sm">
            Mum set bedtime for 21:30.<br/>Everything's back at 07:00.
          </p>
          <div className="space-y-3 mb-8">
            <button className="w-full bg-[#222222] text-gray-300 py-4 rounded-2xl font-medium hover:bg-[#333333] transition-colors flex items-center justify-center gap-3">
              🌙 Night sounds
            </button>
            <button className="w-full bg-[#222222] text-gray-300 py-4 rounded-2xl font-medium hover:bg-[#333333] transition-colors flex items-center justify-center gap-3">
              💌 Read mail
            </button>
          </div>
          <p className="text-xs text-gray-500 font-medium">Grown-up? Emergency PIN unlock · SOS always works</p>
        </motion.div>
      </section>

      {/* Footer / CTA */}
      <section id="download" className="py-32 px-6 text-center bg-[#f5f5f7]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-gray-400 font-semibold tracking-widest text-xs uppercase mb-8">that was one day</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-black leading-[1.1]">Calm for you.<br/><span className="text-gray-400">A buddy for them.</span></h2>
          <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed font-normal">
            Free on both stores. Set it up together tonight — that first letter matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24">
            <a href="#" className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-[15px] hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
              <Download size={20} /> Download on the App Store
            </a>
            <a href="#" className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-[15px] hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
              <Download size={20} /> Get it on Google Play
            </a>
          </div>
          
          <div className="pt-12 border-t border-gray-200 text-gray-500 text-sm flex flex-col items-center gap-5 font-medium">
            <p>FamilyHub · honest by design — parent words are always signed, locks always say the real reason 💜</p>
            <div className="flex gap-8 mt-2">
              <Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/delete-account" className="hover:text-black transition-colors">Delete Account</Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
