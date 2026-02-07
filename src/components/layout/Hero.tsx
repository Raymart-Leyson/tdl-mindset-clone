"use client";

import React from "react";

export function Hero() {
    return (
        <header className="px-6 pt-12 pb-8 md:pt-16 md:pb-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12 relative z-10">
            <div className="flex-1 space-y-8 text-center md:text-left">
                <div className="inline-block relative">
                    <span className="text-xs font-bold tracking-widest uppercase text-tdlInk border-b-2 border-tdlInk pb-1">
                        QUIZ
                    </span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-tdlInk leading-[1.05]">
                    Growth vs. Fixed
                    <br />
                    Mindset Assessment
                </h1>
                <p className="text-xl md:text-2xl font-serif text-tdlInk/90 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Discover your mindset and unlock your potential.
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                    className="mt-6 px-6 py-2.5 border-2 border-tdlInk rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-tdlInk hover:text-white transition-all duration-300 flex items-center gap-3 w-fit mx-auto md:mx-0 group bg-transparent"
                >
                    SHARE
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>

            {/* Image Illustration */}
            <div className="w-full max-w-md md:w-[32rem] p-4 flex items-center justify-center shrink-0">
                {/* Using placeholder for the illustration, ensuring correct aspect ratio and alignment */}
                <div className="relative w-full aspect-square md:aspect-[4/3]">
                    <img
                        src="/quiz-growth.svg"
                        alt="Mindset Illustration"
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </div>
            </div>
        </header>
    );
}
