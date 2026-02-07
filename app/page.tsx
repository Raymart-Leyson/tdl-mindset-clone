"use client";

import React from "react";
import { useQuiz } from "@/src/context/QuizContext";
import { useRouter } from "next/navigation";
import { ContentCard } from "@/src/components/layout/ContentCard";
import Image from "next/image";

export default function Home() {
    const { resetQuiz } = useQuiz();
    const router = useRouter();

    const handleStart = () => {
        resetQuiz();
        router.push("/quiz");
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">

            <ContentCard className="mb-20">
                <div className="space-y-10">
                    {/* Header with Title and Badges */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-tdlInk/5 pb-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-tdlInk tracking-tight">
                            About the Assessment
                        </h2>
                        <div className="flex gap-3">
                            <span className="px-4 py-1.5 rounded-md bg-tdlInk/5 text-tdlInk/60 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                ⏱️ 5 MIN
                            </span>
                            <span className="px-4 py-1.5 rounded-md bg-tdlInk/5 text-tdlInk/60 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                                📝 20 QUESTIONS
                            </span>
                        </div>
                    </div>

                    {/* Main Description */}
                    <div className="space-y-6 text-lg text-tdlInk/80 leading-relaxed max-w-3xl">
                        <p>
                            This assessment is based on the work of Carol Dweck, a pioneering researcher in the field of motivation. It is designed to help you identify your mindset regarding intelligence and talent.
                        </p>
                        <p>
                            There are no right or wrong answers. The goal is to provide you with an honest reflection of your current beliefs. Read each statement and decide how much you agree or disagree with it.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center py-6">
                        <button
                            onClick={handleStart}
                            className="inline-flex items-center px-8 py-4 bg-tdlTeal text-white font-bold rounded hover:bg-[#38B2AC] transition-all shadow-lg shadow-tdlTeal/20 text-xs tracking-widest uppercase group hover:scale-105 active:scale-95"
                        >
                            START ASSESSMENT
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    {/* What You'll Learn Section */}
                    <div className="space-y-12 pt-8">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-tdlInk">
                                What you'll learn
                            </h3>
                            <p className="text-tdlInk/70 leading-relaxed max-w-4xl">
                                By understanding your mindset, you can unlock your potential for growth and learning. This assessment will categorize your mindset into one of four categories, ranging from a strong fixed mindset to a strong growth mindset.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                            {/* Feature Cards */}
                            {[
                                {
                                    icon: "🧠", // Placeholder for actual icon
                                    color: "bg-[#FFD500]", // Yellow circle
                                    title: "Identify Your Mindset",
                                    desc: "Discover whether you lean towards a fixed or growth mindset in areas of intelligence and personality."
                                },
                                {
                                    icon: "📈",
                                    color: "bg-[#FFD500]",
                                    title: "Understand the Impact",
                                    desc: "Learn how your beliefs about your abilities can impact your motivation, resilience, and success."
                                },
                                {
                                    icon: "🚀",
                                    color: "bg-[#FFD500]",
                                    title: "Unlock Potential",
                                    desc: "Receive insights on how to cultivate a growth mindset and embrace challenges as opportunities."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                                    <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center shadow-sm text-3xl mb-2 transition-transform duration-300 group-hover:scale-110`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold text-tdlInk text-lg">
                                        {feature.title}
                                    </h4>
                                    <p className="text-tdlInk/60 text-xs leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentCard>

            {/* Dark Bottom Banner */}
            <div className="relative py-24 px-6 -mx-6 bg-[#3F4F5E] flex flex-col items-center text-center space-y-8 overflow-hidden">
                <div className="absolute inset-0 bg-[#3F4F5E] opacity-90 z-0"></div>
                {/* Decorative background image simulation */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] z-0 bg-cover bg-center"></div>

                <div className="relative z-10 max-w-3xl space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
                        Eager to learn about how behavioral science can help your organization?
                    </h2>
                    <button className="px-8 py-3 bg-tdlTeal text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-[#38B2AC] transition-colors shadow-lg shadow-tdlTeal/20">
                        CONTACT US
                    </button>
                </div>
            </div>

            {/* Newsletter & Footer */}
            <div className="bg-white px-6 py-16 -mx-6 text-tdlInk">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Newsletter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-tdlInk/10 pb-16">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold max-w-md">
                            Get new behavioral science insights in your inbox every month.
                        </h3>
                        <div className="flex w-full md:w-auto gap-4 border-b border-tdlInk/20 pb-2">
                            <input
                                type="email"
                                placeholder="Your Email*"
                                className="bg-transparent outline-none w-full md:w-64 text-tdlInk placeholder-tdlInk/40"
                            />
                            <button className="text-tdlTeal font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                                SUBSCRIBE
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-bold uppercase tracking-widest text-tdlInk/60">
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <h4 className="text-tdlInk text-lg font-serif capitalize tracking-normal mb-4">We're hiring!</h4>
                            <p className="normal-case tracking-normal text-tdlInk/70 leading-relaxed mb-4">
                                Join our team to create meaningful impact by applying behavioral science.
                            </p>
                            <a href="#" className="text-tdlTeal flex items-center gap-1 hover:underline">
                                VISIT CAREERS <span>→</span>
                            </a>
                        </div>

                        <div className="space-y-3">
                            <h5 className="text-tdlInk mb-4">Collaborate With Us</h5>
                            {["Behavioral Science Consulting", "Behavioral Design", "Behavioral Science Newsletters", "Collections", "Big Problems", "The Science", "Quizzes"].map(l => (
                                <div key={l} className="cursor-pointer hover:text-tdlTeal transition-colors">{l}</div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <h5 className="text-tdlInk mb-4">Connect</h5>
                            {["Insights", "Interventions", "Biases", "Our Mission", "Contact"].map(l => (
                                <div key={l} className="cursor-pointer hover:text-tdlTeal transition-colors">{l}</div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <h5 className="text-tdlInk mb-4">Social</h5>
                            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(l => (
                                <div key={l} className="cursor-pointer hover:text-tdlTeal transition-colors">{l}</div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 text-[10px] text-tdlInk/40 flex justify-between items-center">
                        <p>© 2026 The Decision Lab. All Rights Reserved.</p>
                        <div className="flex gap-4">
                            <span>Terms and conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
