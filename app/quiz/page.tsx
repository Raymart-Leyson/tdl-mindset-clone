"use client";

import React, { useEffect, useState } from "react";
import { ANSWER_OPTIONS, QUESTIONS } from "@/lib/mindset";
import { useQuiz } from "@/src/context/QuizContext";
import { useRouter } from "next/navigation";
import { ContentCard } from "@/src/components/layout/ContentCard";

export default function Quiz() {
    const router = useRouter();
    const { answers, setAnswer, submitQuiz, resetQuiz, isComplete } = useQuiz();
    const [currentPage, setCurrentPage] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const QUESTIONS_PER_PAGE = 5;
    const totalPages = Math.ceil(QUESTIONS.length / QUESTIONS_PER_PAGE);
    const progressPercentage = ((currentPage + 1) / totalPages) * 100;

    const currentQuestions = QUESTIONS.slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE
    );

    const isPageComplete = currentQuestions.every((q) => answers[q.id] !== undefined);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo({ top: 300, behavior: "smooth" });
            setError(null);
        } else {
            try {
                setError(null);
                submitQuiz();
                router.push("/results");
            } catch (e) {
                console.error("Quiz submission error:", e);
                setError("Please answer all questions.");
            }
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo({ top: 300, behavior: "smooth" });
        }
    };

    return (
        <ContentCard>
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Progress Header */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <h3 className="text-xl font-bold text-tdlInk">
                            Part {currentPage + 1} of {totalPages}
                        </h3>
                        <span className="text-sm font-medium text-tdlInk/50">
                            {Math.round(progressPercentage)}% Completed
                        </span>
                    </div>
                    {/* ... (rest of the code unchanged) ... */}
                </div>

                <div className="py-4 border-b border-tdlInk/10">
                    <h2 className="text-2xl font-black text-tdlInk">
                        Read each statement and choose how strongly you agree or disagree.
                    </h2>
                </div>

                {/* Questions List */}
                <div className="space-y-12">
                    {currentQuestions.map((question) => (
                        <div key={question.id} className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-tdlTeal tracking-wider uppercase">
                                    QUESTION {question.id}
                                </span>
                                <p className="text-lg font-medium text-tdlInk leading-relaxed">
                                    {question.text}
                                </p>
                            </div>

                            <div className="grid grid-cols-4 gap-2 w-full md:w-auto md:gap-3">
                                {ANSWER_OPTIONS.map((option) => {
                                    const isSelected = answers[question.id] === option.value;
                                    return (
                                        <button
                                            key={option.value}
                                            onClick={() => setAnswer(question.id, option.value)}
                                            className={`
                          group flex flex-col items-center justify-center w-auto aspect-square md:w-20 md:h-20 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tdlTeal
                          ${isSelected
                                                    ? "border-tdlTeal bg-tdlTeal text-white shadow-lg shadow-tdlTeal/20 scale-105"
                                                    : "border-tdlInk/10 bg-white text-tdlInk/40 hover:border-tdlTeal/50 hover:text-tdlTeal hover:bg-tdlTeal/5"
                                                }
                        `}
                                            title={option.label}
                                        >
                                            <span className="text-2xl md:text-3xl mb-1 filter drop-shadow-sm transition-transform group-hover:scale-110">
                                                {option.value === 4 && "❤️"}
                                                {option.value === 3 && "👍"}
                                                {option.value === 2 && "👎"}
                                                {option.value === 1 && "🤍"}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-tdlInk/10">
                    <button
                        onClick={handleBack}
                        disabled={currentPage === 0}
                        className={`
                px-6 py-3 font-bold text-tdlInk/60 hover:text-tdlInk transition-colors
                ${currentPage === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
                    >
                        ← BACK
                    </button>

                    <div className="flex flex-col items-end gap-2">
                        {error && (
                            <span className="text-red-500 text-sm font-bold animate-pulse">
                                {error}
                            </span>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={!isPageComplete}
                            className={`
                  inline-flex items-center px-8 py-3 bg-tdlTeal text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-tdlTeal/20
                  ${!isPageComplete ? "opacity-50 cursor-not-allowed grayscale" : "hover:bg-[#25958b] hover:scale-105"}
                `}
                        >
                            {currentPage === totalPages - 1 ? "VIEW RESULTS" : "CONTINUE"}
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </ContentCard>
    );
}
