'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';


export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white">
                        Meili
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                </Link>

                {/* Mobile Menu Button - Placeholder for mobile functionality */}
                <div className="md:hidden text-white/70">
                    Menu
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#travelers"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        For Travelers
                    </Link>
                    <Link
                        href="#agents"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        For Agents
                    </Link>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <Link
                        href="/login"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/start"
                        className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
