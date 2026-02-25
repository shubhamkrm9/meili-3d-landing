'use client';

import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

export function Overlay() {
    return (
        <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div style={{ width: '100%', height: '500vh', position: 'relative', pointerEvents: 'auto' }}>

                {/* Section 1: The Departure (0-16.6%) - center-to-right */}
                <div 
                    className="h-screen w-full flex flex-col justify-center items-center text-center p-8 relative z-10"
                    style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mb-6"
                        >
                            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.95] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Travel without <br />
                                <span className="text-purple-400">friction.</span>
                            </h1>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-10"
                        >
                            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Meili turns preferences into itineraries. No templates. No guesswork. 
                                Just intelligent travel that adapts to you.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-shadow"
                            >
                                Start your journey
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: The Traveler's Canvas (16.6-33.3%) - right-to-center */}
                <div 
                    className="h-screen w-full flex flex-col justify-center items-start text-left pl-10 md:pl-20 p-8 relative z-10"
                    style={{ position: 'absolute', top: '100vh', left: 0, right: 0 }}
                >
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Speak. <br />
                                <span className="text-fuchsia-400">We listen.</span>
                            </h2>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Budget. Group dynamics. Hidden constraints. Tell us in your own words. 
                                Our AI translates your travel language into a living itinerary.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold backdrop-blur-md hover:bg-white/15 transition-colors"
                            >
                                Build your trip
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Section 3: Fluid Adjustments (33.3-50%) - center-to-left */}
                <div 
                    className="h-screen w-full flex flex-col justify-center items-center text-center p-8 relative z-10"
                    style={{ position: 'absolute', top: '200vh', left: 0, right: 0 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-4"
                        >
                            <div className="inline-block px-6 py-3 bg-white/5 border border-purple-400/30 rounded-2xl backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-purple-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                    "Add a beach day."
                                </h2>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="mb-8"
                        >
                            <p className="text-2xl md:text-3xl font-semibold text-fuchsia-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Done. Budget adjusted. Timeline rebalanced.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Change your mind mid-plan. Meili recalculates in real-time. 
                                Costs, logistics, connections—all fluid.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-full font-semibold backdrop-blur-md hover:bg-purple-500/30 transition-colors"
                            >
                                See it adapt
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Section 4: The Agent's Command (50-66.6%) - left-to-center */}
                <div 
                    className="h-screen w-full flex flex-col justify-center items-end text-right pr-10 md:pr-20 p-8 relative z-10"
                    style={{ position: 'absolute', top: '300vh', left: 0, right: 0 }}
                >
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Control from <br />
                                <span className="text-purple-400">orbit.</span>
                            </h2>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-10"
                        >
                            <div className="space-y-3 text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                <p>Manage multiple groups.</p>
                                <p>Review AI-generated plans.</p>
                                <p>Track margins. Approve changes.</p>
                                <p className="font-normal text-white">
                                    Your dashboard sees everything before your travelers do.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-gradient-to-l from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
                            >
                                Access the dashboard
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Section 5: The Arrival (66.6-100%) - image-7 landscape */}
                <div 
                    className="h-screen w-full flex flex-col justify-center items-center text-center p-8 relative z-10"
                    style={{ position: 'absolute', top: '400vh', left: 0, right: 0 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[0.95] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                When plans <span className="text-red-400">collapse</span>, <br />
                                we <span className="text-purple-400">reroute.</span>
                            </h2>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-10"
                        >
                            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                Flight delays. Road closures. Last-minute chaos. Agentic AI monitors, predicts, 
                                and rebuilds your itinerary in real-time.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-4 bg-red-500/20 border-2 border-red-400/50 text-red-300 rounded-full font-semibold text-lg backdrop-blur-md hover:bg-red-500/30 hover:border-red-400/70 transition-all shadow-[0_0_30px_rgba(248,113,113,0.3)]"
                            >
                                Explore crisis AI
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ position: 'absolute', top: '500vh', left: 0, right: 0 }}>
                    <footer className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-8">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Meili</h3>
                                <p className="text-white/60 text-sm">Intelligent travel, reimagined.</p>
                            </div>
                            
                            <div>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">For Travelers</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">For Agents</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                                    <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                            <p className="text-white/40 text-xs">© 2026 Meili. All rights reserved.</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                </a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </Html>
    );
}
