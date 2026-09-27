'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, CheckCircle, Users, Bell, CreditCard } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const features = [
    { title: "Task Management", desc: "Assign chores and track progress for every member.", icon: CheckCircle },
    { title: "Shared Ledger", desc: "Manage household expenses and savings goals.", icon: CreditCard },
    { title: "Notice Board", desc: "Pin important family announcements easily.", icon: Bell },
    { title: "SOS Alerts", desc: "Instant location sharing during emergencies.", icon: Shield },
    { title: "Family Roles", desc: "Assign specific roles and digital consents.", icon: Users },
  ];

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100 to-white" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Family<span className="text-blue-600">Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Run your family like a well-organized company. Roles, tasks, ledgers, and safety—all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Download App
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto relative">
        <motion.div style={{ y: y2 }} className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Everything your family needs</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">A completely minimal, structured, and modern way to keep your household running smoothly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} desc={f.desc} icon={f.icon} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-6">
          <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
          <Link href="/delete-account" className="hover:text-blue-600 transition">Delete Account</Link>
        </div>
        <p>© 2026 DIFMO PRIVATE LIMITED. All rights reserved.</p>
      </footer>
    </main>
  );
}
