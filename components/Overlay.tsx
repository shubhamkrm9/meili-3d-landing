
'use client';

import { HtmlScroll } from './HtmlScroll';
import { motion } from 'framer-motion';

const Section = ({
    children,
    align = 'center',
    opacity = 1
}: {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    opacity?: number;
}) => {
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
                viewport={{ margin: "-20% 0px -20% 0px" }} // Trigger when near center
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
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        Travel, <br />
                        Orchestrated.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                        The intelligent platform connecting structured traveler intent with rapid agent execution.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105">
                            Plan a Trip
                        </button>
                        <button className="px-8 py-3 bg-white/10 border border-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-md">
                            Agent Access
                        </button>
                    </div>
                </div>
            </Section>

            {/* 2. For Travelers */}
            <Section align="left">
                <div id="travelers" className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[1px] bg-blue-500"></div>
                        <span className="text-blue-400 uppercase tracking-widest text-xs font-bold">For Travelers</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Your Trip, <br />
                        <span className="text-white/50">Your Rules.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed max-w-md">
                        No more vague requests. Tell us exactly what you need—dates, individual preferences, and must-visits.
                        We generate a live, editable base itinerary that you can tweak in real-time.
                    </p>
                    <ul className="mt-8 space-y-4 text-white/60">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Guided preference inputs
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Instant cost &amp; time deltas
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Natural language modifications
                        </li>
                    </ul>
                </div>
            </Section>

            {/* 3. For Agents */}
            <Section align="right">
                <div id="agents" className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6 justify-end">
                        <span className="text-purple-400 uppercase tracking-widest text-xs font-bold">For Agents</span>
                        <div className="w-8 h-[1px] bg-purple-500"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Validate. <br />
                        <span className="text-white/50">Optimize. Finalize.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                        Shift from data entry to high-value consulting. Receive structured requests with system-generated drafts.
                        Adjust routes, manage margins, and approve changes instantly.
                    </p>
                    <ul className="mt-8 space-y-4 text-white/60 text-right flex flex-col items-end">
                        <li className="flex items-center gap-3">
                            Review full context dashboards
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        </li>
                        <li className="flex items-center gap-3">
                            See margin impacts in real-time
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        </li>
                        <li className="flex items-center gap-3">
                            One-click approvals & overrides
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        </li>
                    </ul>
                </div>
            </Section>

            {/* 4. Unified Workflow */}
            <Section align="center">
                <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/10 rounded-3xl p-12 w-full max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                        A Shared Source of Truth.
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-white">Users Request</h3>
                            <p className="text-white/60">
                                Travelers explore options and set the guardrails. They see a &quot;good enough&quot; plan instantly and can refine it.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-white">Agents Verify</h3>
                            <p className="text-white/60">
                                Experts handle exceptions, lock in availability, and ensure the logistics work impeccably on the ground.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>


            {/* 5. CTA */}
            <Section align="center">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Ready to move?</h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-10 py-5 bg-white text-black rounded-full text-xl font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Start as Traveler
                    </button>
                    <button className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full text-xl font-bold hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-md">
                        Partner as Agent
                    </button>
                </div>
            </Section>

            {/* Extra padding for scroll feel */}
            <div className="h-[50vh]"></div>

        </HtmlScroll>
    );
}
