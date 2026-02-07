"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { calculateTotalScore, getResultBand } from "@/src/lib/mindsetScoring";

type QuizContextType = {
    answers: Record<number, number>;
    setAnswer: (questionId: number, value: number) => void;
    finalScore: number | null;
    finalBand: { key: string; label: string; rangeLabel: string } | null;
    submitQuiz: () => void;
    resetQuiz: () => void;
    isComplete: boolean;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);
    const [finalBand, setFinalBand] = useState<{ key: string; label: string; rangeLabel: string } | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedAnswers = localStorage.getItem("tdl_quiz_answers");
        const savedScore = localStorage.getItem("tdl_quiz_score");
        const savedBand = localStorage.getItem("tdl_quiz_band");
        const savedComplete = localStorage.getItem("tdl_quiz_complete");

        if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
        if (savedScore) setFinalScore(Number(savedScore));
        if (savedBand) setFinalBand(JSON.parse(savedBand));
        if (savedComplete === "true") setIsComplete(true);
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("tdl_quiz_answers", JSON.stringify(answers));
    }, [answers]);

    useEffect(() => {
        if (finalScore !== null) localStorage.setItem("tdl_quiz_score", String(finalScore));
        else localStorage.removeItem("tdl_quiz_score");

        if (finalBand) localStorage.setItem("tdl_quiz_band", JSON.stringify(finalBand));
        else localStorage.removeItem("tdl_quiz_band");

        localStorage.setItem("tdl_quiz_complete", String(isComplete));
    }, [finalScore, finalBand, isComplete]);

    const setAnswer = (questionId: number, value: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const submitQuiz = () => {
        try {
            const score = calculateTotalScore(answers);
            const band = getResultBand(score);
            setFinalScore(score);
            setFinalBand(band);
            setIsComplete(true);
        } catch (e) {
            console.error("Quiz submission error:", e);
            throw e; // Let caller handle UI feedback
        }
    };

    const resetQuiz = () => {
        setAnswers({});
        setFinalScore(null);
        setFinalBand(null);
        setIsComplete(false);
        localStorage.removeItem("tdl_quiz_answers");
        localStorage.removeItem("tdl_quiz_score");
        localStorage.removeItem("tdl_quiz_band");
        localStorage.removeItem("tdl_quiz_complete");
    };

    return (
        <QuizContext.Provider
            value={{
                answers,
                setAnswer,
                finalScore,
                finalBand,
                submitQuiz,
                resetQuiz,
                isComplete,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
