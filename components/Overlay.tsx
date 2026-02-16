


'use client';

import { HtmlScroll, HtmlScrollContext } from './HtmlScroll';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import {
    HelpCircle,
    Lightbulb,
    Scale,
    RefreshCw,
    CheckCircle,
    Clock,
    Zap,
    Shield,
    Heart
} from 'lucide-react';

const Section = ({
    children,
    align = 'center',
    opacity = 1
}: {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    opacity?: number;
}) => {
    const scrollEl = useContext(HtmlScrollContext);
    const alignmentClasses = {
        left: 'items-start text-left pl-10 md:pl-20',
        center: 'items-center text-center',
        right: 'items-end text-right pr-10 md:pr-20'
    };

    return (
        <div className={`h-screen w-full flex flex-col justify-center ${alignmentClasses[align]} p-8`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: { current: scrollEl as HTMLElement }, margin: "-20% 0px -20% 0px" }} // Trigger when near center
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`max-w-xl ${align === 'right' ? 'ml-auto' : ''} ${align === 'center' ? 'mx-auto' : ''}`}
            >
                {children}
            </motion.div>
        </div>
    );
};

export function Overlay() {
    return (
        <HtmlScroll style={{ width: '100%' }}>

            {/* 1. Hero */}
            <Section align="center">
                <div className="pt-24 md:pt-32">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-purple-400 text-sm font-semibold">● AI-Powered Travel Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9]">
                        Group Travel, <span className="text-purple-500">Perfectly</span> <br />
                        <span className="text-purple-500">Coordinated</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                        An invisible AI that listens to everyone, balances preferences, and adapts in real-time
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                        <button className="px-8 py-3 bg-fuchsia-500 text-white rounded-full font-semibold hover:bg-fuchsia-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                            Start Planning →
                        </button>
                        <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-md">
                            See How It Works
                        </button>
                    </div>
                </div>
            </Section>

            {/* 2. Problem - 4 Grid */}
            <Section align="center">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full items-center">
                    <div className="text-left">
                        <span className="text-fuchsia-500 font-bold tracking-wider text-sm">THE PROBLEM</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6 leading-tight">
                            Planning group travel <br />
                            is <span className="text-purple-500">impossible</span>
                        </h2>
                        <p className="text-white/60 mb-4">
                            Meet the Johnsons: a family of six planning their dream vacation to Italy.
                        </p>
                        <p className="text-white/60 mb-6">
                            Grandparents want to visit museums and take it slow. Parents need downtime. Teenagers crave adventure sports. Kids need playgrounds every few hours.
                        </p>
                        <div className="p-4 rounded-xl bg-white/5 border-l-2 border-fuchsia-500">
                            <p className="text-fuchsia-300 italic">
                                And travel agents? They're manually juggling spreadsheets, trying to satisfy everyone, spending hours on plans that break the moment someone changes their mind.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-3xl mb-3">👴</div>
                            <h3 className="font-bold text-lg mb-1">Grandparents</h3>
                            <p className="text-sm text-white/50 mb-3">Want: Historical sites, slow pace</p>
                            <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">⚠ Need rest breaks</span>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                            <h3 className="font-bold text-lg mb-1">Parents</h3>
                            <p className="text-sm text-white/50 mb-3">Want: Relaxation, balance</p>
                            <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">⚠ Manage everyone</span>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-3xl mb-3">🏂</div>
                            <h3 className="font-bold text-lg mb-1">Teenagers</h3>
                            <p className="text-sm text-white/50 mb-3">Want: Adventure, activities</p>
                            <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">⚠ Get bored easily</span>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="text-3xl mb-3">👶</div>
                            <h3 className="font-bold text-lg mb-1">Kids</h3>
                            <p className="text-sm text-white/50 mb-3">Want: Fun, playgrounds</p>
                            <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">⚠ Short attention</span>
                        </div>

                        <div className="col-span-1 sm:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 text-center mt-2">
                            <h4 className="font-bold mb-2">4 Different Preferences</h4>
                            <p className="text-sm text-white/50 mb-3">= Endless Compromises</p>
                            <div className="flex justify-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Solution - AI Coordinator */}
            <Section align="center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/20 border border-purple-500/50 backdrop-blur-md">
                        <span className="text-purple-300 text-sm font-semibold">★ The Turning Point</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">
                        What if an AI could <span className="text-purple-500">coordinate</span> <br />
                        <span className="text-purple-500">everyone?</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                        Not a booking engine. Not a recommendation tool. <br />
                        An invisible coordinator that understands group dynamics.
                    </p>

                    {/* Visual Hexagon Representation (CSS only for now) */}
                    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                        <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M17.636 17.636l-.707-.707M12 21v-1M4.364 17.636l.707-.707M3 12h1m-.243-9.757l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        {/* Orbiting dots */}
                        <div className="absolute w-full h-full border border-white/10 rounded-full animate-spin-slow"></div>
                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-gray-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-0 w-4 h-4 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 right-0 w-4 h-4 bg-gray-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <p className="mt-8 text-sm text-white/40 uppercase tracking-widest">One AI. Multiple preferences. Zero compromises.</p>
                </div>
            </Section>

            {/* 4. Process - How it works */}
            <Section align="center">
                <span className="text-purple-500 font-bold tracking-wider text-sm uppercase mb-4 block">Simple Process</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                    How <span className="text-fuchsia-500">Intelligence</span> Works
                </h2>
                <p className="text-white/60 mb-12">Four steps. Zero manual coordination. Infinite possibilities.</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
                    {[
                        { step: "01", title: "Listen", desc: "Collects preferences from every traveler in the group", Icon: HelpCircle },
                        { step: "02", title: "Understand", desc: "Analyzes constraints, ages, interests, and group dynamics", Icon: Lightbulb },
                        { step: "03", title: "Balance", desc: "Optimizes itinerary to maximize group satisfaction", Icon: Scale },
                        { step: "04", title: "Adapt", desc: "Adjusts in real-time when plans change during the trip", Icon: RefreshCw }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all hover:-translate-y-2">
                            <div className="text-purple-400 mb-4 opacity-50">
                                <item.Icon size={32} />
                            </div>
                            <h3 className="text-5xl font-bold text-fuchsia-500 mb-2">{item.step}</h3>
                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Benefits - Travel Feels Right */}
            <Section align="center">
                <span className="text-purple-500 font-bold tracking-wider text-sm uppercase mb-4 block">The Experience</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                    Travel That <span className="text-fuchsia-500">Feels Right</span>
                </h2>
                <p className="text-white/60 mb-12 max-w-2xl mx-auto">
                    For travelers: fewer conflicts, smarter days, personal moments.<br />
                    For agents: efficiency, insights, scalability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full h-[600px]">
                    {/* Big Card Left */}
                    <div className="md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-end text-left relative overflow-hidden group">
                        <div className="absolute top-8 left-8 w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-500">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">No More Conflicts</h3>
                        <p className="text-white/60 text-sm">Everyone's preferences are heard and balanced intelligently</p>
                    </div>

                    {/* Top Right */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-end text-left">
                        <div className="mb-auto text-white/40">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Smarter Days</h3>
                        <p className="text-white/60 text-xs">Optimal timing for activities, travel, and rest</p>
                    </div>

                    {/* Top Right 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-end text-left">
                        <div className="mb-auto text-white/40">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Agent Efficiency</h3>
                        <p className="text-white/60 text-xs">Design and manage trips at scale with AI insights</p>
                    </div>

                    {/* Bottom Middle */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-end text-left">
                        <div className="mb-auto text-white/40">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Trip Confidence</h3>
                        <p className="text-white/60 text-xs">Real-time adaptability when plans change on the fly</p>
                    </div>

                    {/* Bottom Right */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-end text-left">
                        <div className="mb-auto text-white/40">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Group Satisfaction</h3>
                        <p className="text-white/60 text-xs">Maximize happiness across all travelers</p>
                    </div>
                </div>
            </Section>

            {/* Extra padding for scroll feel */}
            <div className="h-[20vh]"></div>

        </HtmlScroll>
    );
}
