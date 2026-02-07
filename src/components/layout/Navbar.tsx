"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Spacer to prevent content jump when navbar becomes fixed */}
            <div className={isScrolled ? "h-[88px] md:h-[104px]" : ""} />

            <nav className={`bg-white border-b border-tdlInk/5 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
                }`}>
                <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 pt-2 pb-4">
                    {/* Top Bar - Hidden when scrolled */}
                    <div className={`hidden md:flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-tdlInk/40 border-b border-tdlInk/5 pb-2 transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 mb-0 opacity-0 pb-0 border-b-0" : "max-h-20 mb-3 opacity-100"
                        }`}>
                        <div className="flex gap-4">
                            <span className="cursor-pointer hover:text-tdlTeal transition-colors">Media Center</span>
                            <span className="border-l border-tdlInk/10 pl-4 cursor-pointer hover:text-tdlTeal transition-colors">Career</span>
                            <span className="border-l border-tdlInk/10 pl-4 cursor-pointer hover:text-tdlTeal transition-colors">Subscribe</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center gap-1 cursor-pointer hover:text-tdlTeal transition-colors">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <span>Search</span>
                            </div>
                            <div className="flex items-center gap-1 border-l border-tdlInk/10 pl-4 cursor-pointer hover:text-tdlTeal transition-colors">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                                <span>Brain Bank</span>
                            </div>
                            <div className="flex items-center gap-1 border-l border-tdlInk/10 pl-4 cursor-pointer hover:text-tdlTeal transition-colors">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>EN</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Bar */}
                    <div className="flex justify-between items-center h-12">
                        {/* Logo Section */}
                        <div className="flex items-center gap-4">
                            <button
                                className="md:hidden text-tdlInk"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>

                            <Link href="/" className="flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 relative">
                                    <img
                                        src="/image.png"
                                        alt="The Decision Lab Logo"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <span className="font-bold text-sm tracking-widest text-tdlInk uppercase">The Decision Lab</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-tdlInk/70 tracking-wide">
                            {["How We Work", "Consulting", "Industries", "Resources", "About Us", "Contact"].map((item) => (
                                <div key={item} className="group relative cursor-pointer py-2">
                                    <span className="flex items-center gap-1 group-hover:text-tdlTeal transition-colors">
                                        {item}
                                        {item !== "Contact" && (
                                            <svg className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                    </span>
                                    {/* Dropdown Placeholder */}
                                    {item !== "Contact" && (
                                        <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-tdlInk/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="text-[10px] uppercase text-tdlInk/40 font-bold mb-2 tracking-widest">Explore {item}</div>
                                            <div className="space-y-2">
                                                <div className="text-tdlInk/80 hover:text-tdlTeal cursor-pointer">Overview</div>
                                                <div className="text-tdlInk/80 hover:text-tdlTeal cursor-pointer">Case Studies</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-tdlInk/5 pt-4">
                            <div className="space-y-3">
                                {["How We Work", "Consulting", "Industries", "Resources", "About Us", "Contact"].map((item) => (
                                    <div key={item} className="text-tdlInk/70 font-bold text-sm hover:text-tdlTeal cursor-pointer">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}