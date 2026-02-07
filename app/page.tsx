"use client";

import React from "react";
import { useQuiz } from "@/src/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { resetQuiz } = useQuiz();
  const router = useRouter();

  const handleStart = () => {
    resetQuiz();
    router.push("/quiz");
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Header with Title and Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-tdlInk/5 pb-2">
        <h2 className="text-2xl md:text-3xl font-black text-tdlInk tracking-tight">
          About the Assessment
        </h2>
        <div className="flex gap-3">
          <span className="px-4 py-1.5 rounded-lg bg-tdlInk/5 text-tdlInk/60 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            ⏱️ 5 min
          </span>
          <span className="px-4 py-1.5 rounded-lg bg-tdlInk/5 text-tdlInk/60 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            📝 20 Questions
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
      <div className="flex justify-center py-2">
        <button
          onClick={handleStart}
          className="inline-flex items-center px-10 py-4 bg-tdlTeal text-white font-bold rounded-full hover:bg-[#25958b] transition-all shadow-lg shadow-tdlTeal/20 text-lg tracking-wide group hover:scale-105 active:scale-95"
        >
          START ASSESSMENT
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* What You'll Learn Section */}
      <div className="space-y-8 pt-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-tdlInk">
            What you'll learn
          </h3>
          <p className="text-tdlInk/70 leading-relaxed max-w-4xl">
            By understanding your mindset, you can unlock your potential for growth and learning. This assessment will categorize your mindset into one of four categories, ranging from a strong fixed mindset to a strong growth mindset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature Cards with Noticeable Animation/Style */}
          {[
            {
              icon: "🧠",
              title: "Identify Your Mindset",
              desc: "Discover whether you lean towards a fixed or growth mindset in areas of intelligence and personality."
            },
            {
              icon: "📈",
              title: "Understand the Impact",
              desc: "Learn how your beliefs about your abilities can impact your motivation, resilience, and success."
            },
            {
              icon: "🚀",
              title: "Unlock Potential",
              desc: "Receive insights on how to cultivate a growth mindset and embrace challenges as opportunities."
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/60 border border-tdlInk/5 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-tdlYellow flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-3xl border-2 border-white">
                {feature.icon}
              </div>
              <h4 className="font-bold text-tdlInk text-lg">
                {feature.title}
              </h4>
              <p className="text-tdlInk/70 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
