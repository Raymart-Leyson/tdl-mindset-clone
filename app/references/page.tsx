"use client";

import React from "react";

export default function References() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-3xl font-black text-tdlInk tracking-tight text-center">
                References & Resources
            </h2>
            <p className="text-tdlInk/70 text-center max-w-2xl mx-auto leading-relaxed">
                The concepts in this assessment are based on decades of research into achievement and success. Here are the primary sources and recommended reading.
            </p>

            <div className="grid gap-6 max-w-2xl mx-auto mt-8">
                {[
                    {
                        title: "Mindset: The New Psychology of Success",
                        author: "Carol S. Dweck, Ph.D.",
                        desc: "The seminal book that introduced the concept of fixed and growth mindsets.",
                        link: "#",
                    },
                    {
                        title: "Self-Theories: Their Role in Motivation, Personality, and Development",
                        author: "Carol S. Dweck, Ph.D.",
                        desc: "Academic overview of the research behind self-theories and motivation.",
                        link: "#",
                    },
                    {
                        title: "The Power of Yet",
                        author: "TED Talk by Carol Dweck",
                        desc: "A popular introduction to the power of believing that you can improve.",
                        link: "#",
                    },
                ].map((ref, idx) => (
                    <div key={idx} className="flex gap-4 p-6 bg-white/50 rounded-2xl border border-tdlInk/5 transition-all hover:bg-white hover:shadow-md hover:border-tdlTeal/20 group cursor-pointer">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-tdlInk/5 text-tdlInk/60 font-bold text-sm group-hover:bg-tdlTeal group-hover:text-white transition-colors">
                            {idx + 1}
                        </span>
                        <div className="space-y-1">
                            <h4 className="font-bold text-tdlInk text-lg group-hover:text-tdlTeal transition-colors">
                                {ref.title}
                            </h4>
                            <p className="text-tdlInk/60 text-sm font-medium uppercase tracking-wider">
                                {ref.author}
                            </p>
                            <p className="text-tdlInk/80 text-sm leading-relaxed mt-2">
                                {ref.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
