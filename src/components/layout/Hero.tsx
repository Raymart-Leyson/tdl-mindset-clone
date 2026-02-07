"use client";

import React from "react";

export function Hero() {
    return (
        <header className="px-6 pt-12 pb-8 md:pt-16 md:pb-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-tdlInk/5 rounded text-[10px] font-bold tracking-widest uppercase text-tdlInk/60 border border-tdlInk/10">
                    QUIZ
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-tdlInk leading-[1.1]">
                    Growth vs. Fixed<br />Mindset Assessment
                </h1>
                <p className="text-lg md:text-xl font-medium text-tdlInk/80 max-w-lg mx-auto md:mx-0">
                    Discover your mindset and unlock your potential.
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                    className="mt-4 px-6 py-3 border-2 border-tdlInk/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-tdlInk hover:text-white transition-all duration-300 flex items-center gap-2 w-fit mx-auto md:mx-0"
                >
                    Share
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </button>
            </div>

            {/* Image Placeholder */}
            <div className="hidden md:flex w-full max-w-sm md:w-[28rem] h-72 md:h-[28rem] md:h-96 rounded-3xl items-center justify-center backdrop-blur-sm shrink-0 rotate-3 transform transition-transform hover:rotate-0 duration-300 overflow-hidden">
                <img
                    src="/quiz-growth.svg"
                    alt="Image placeholder"
                    className="w-full h-full object-contain"
                />
            </div>
        </header>
    );
}
