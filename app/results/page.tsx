"use client";

import React from "react";
import { useQuiz } from "@/src/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Results() {
    const { finalScore, finalBand, isComplete, resetQuiz } = useQuiz();
    const router = useRouter();

    if (!isComplete || finalScore === null || !finalBand) {
        return (
            <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col items-center justify-center text-center space-y-6 py-20 px-6 bg-[#E6F9F6] rounded-[2rem] border border-tdlTeal/10">
                    {/* Icon */}
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm mb-2">
                        <span className="text-5xl">🧠</span>
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black text-tdlInk tracking-tight">
                            Complete the Quiz to Continue
                        </h2>
                        <p className="text-lg text-tdlInk/70 font-medium leading-relaxed">
                            Take the full assessment first, then return here to unlock your personalized insights.
                        </p>
                    </div>

                    <button
                        onClick={() => router.push("/quiz")}
                        className="mt-6 px-10 py-4 bg-[#4FD1C5] text-white font-bold text-sm tracking-widest uppercase rounded shadow-lg shadow-tdlTeal/20 hover:bg-[#38B2AC] hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
                    >
                        Take Assessment
                        <span className="text-xl leading-none">→</span>
                    </button>
                </div>
            </div>
        );
    }

    const RESULT_CONTENT: Record<string, { desc: string; tips: string[]; nextSteps: string[] }> = {
        strong_growth: {
            desc: "You consistently embrace challenges and see failure as a learning opportunity.",
            tips: [
                "Continue to challenge yourself with new skills.",
                "Mentor others who are struggling with a fixed mindset.",
                "Reflect on recent failures and extract the lessons."
            ],
            nextSteps: [
                "Take on a leadership role.",
                "Share your learning journey publicly.",
                "Explore advanced topics in your field."
            ]
        },
        growth_with_fixed: {
            desc: "You generally have a growth mindset, but certain situations may trigger fixed beliefs.",
            tips: [
                "Identify your fixed mindset triggers.",
                "Practice reframing negative self-talk.",
                "Focus on the process, not just the outcome."
            ],
            nextSteps: [
                "Start a journal to track your mindset shifts.",
                "Ask for constructive feedback regularly.",
                "Set learning goals, not just performance goals."
            ]
        },
        fixed_with_growth: {
            desc: "You tend to believe that your abilities are set in stone and avoid challenges.",
            tips: [
                "Learn about neuroplasticity and how the brain changes.",
                "Celebrate effort and persistence, not just talent.",
                "Add 'yet' to your vocabulary (e.g., 'I can't do this... yet')."
            ],
            nextSteps: [
                "Read 'Mindset' by Carol Dweck.",
                "Start with small, achievable challenges.",
                "Find a supportive mentor or coach."
            ]
        },
        strong_fixed: {
            desc: "You strongly believe that intelligence and talent are fixed traits.",
            tips: [
                "Focus on effort rather than innate ability.",
                "Embrace challenges as opportunities to learn.",
                "View criticism as feedback to improve."
            ],
            nextSteps: [
                "Read 'Mindset' by Carol Dweck.",
                "Practice a new skill for 20 minutes a day.",
                "Seek out opportunities to learn from mistakes."
            ]
        }
    };

    const content = RESULT_CONTENT[finalBand.key] || RESULT_CONTENT.growth_with_fixed;

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-3xl font-black text-tdlInk tracking-tight text-center">
                Your Results
            </h2>

            {/* Result Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-tdlInk/5 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full bg-tdlYellow flex items-center justify-center shrink-0 border-4 border-white shadow-lg">
                    <span className="text-4xl">🏆</span>
                </div>

                <div className="space-y-2 text-center md:text-left flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <span className="text-xs font-bold tracking-wider text-tdlInk/50 uppercase">
                            Profile Match
                        </span>
                        <span className="hidden md:inline text-tdlInk/20">|</span>
                        <span className="text-xs font-bold tracking-wider text-tdlTeal uppercase">
                            Total Score: {finalScore} / 80
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-tdlInk">
                        {finalBand.label}
                    </h3>
                    <p className="text-tdlInk/70 font-medium leading-relaxed">
                        {content.desc}
                    </p>
                </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-12">
                {/* Tips Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-tdlTeal/10 flex items-center justify-center text-tdlTeal">
                            ✨
                        </div>
                        <h4 className="font-bold text-tdlInk text-lg">Growth Mindset Tips</h4>
                    </div>
                    <ul className="space-y-4">
                        {content.tips.map((tip, idx) => (
                            <li key={idx} className="flex gap-4 items-start p-4 bg-white/50 rounded-xl border border-tdlInk/5 hover:border-tdlTeal/30 transition-colors">
                                <span className="text-tdlTeal font-bold text-lg">•</span>
                                <span className="text-tdlInk/80 text-sm leading-relaxed">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Next Steps Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-tdlYellow/20 flex items-center justify-center text-tdlInk">
                            🚀
                        </div>
                        <h4 className="font-bold text-tdlInk text-lg">Next Steps</h4>
                    </div>
                    <ul className="space-y-4">
                        {content.nextSteps.map((step, idx) => (
                            <li key={idx} className="flex gap-4 items-start p-4 bg-white/50 rounded-xl border border-tdlInk/5 hover:border-tdlYellow transition-colors">
                                <span className="text-tdlInk/40 font-bold text-lg">{(idx + 1).toString().padStart(2, '0')}</span>
                                <span className="text-tdlInk/80 text-sm leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Retake Button */}
            <div className="text-center pt-8 border-t border-tdlInk/10">
                <button
                    onClick={() => {
                        resetQuiz();
                        router.push("/quiz");
                    }}
                    className="inline-flex items-center px-8 py-3 text-tdlInk font-bold hover:text-tdlTeal transition-colors group"
                >
                    RETAKE ASSESSMENT
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
}
