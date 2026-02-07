export type Question = {
    id: number;
    text: string;
    reverse: boolean;
};

export type AnswerOption = {
    label: string;
    value: number;
};

export const ANSWER_OPTIONS: AnswerOption[] = [
    { label: "Strongly Agree", value: 4 },
    { label: "Agree", value: 3 },
    { label: "Disagree", value: 2 },
    { label: "Strongly Disagree", value: 1 },
];

export const QUESTIONS: Question[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    text: `Question ${i + 1} text placeholder...`,
    reverse: false,
}));

/**
 * Calculates the score for a single answer.
 * If the question is reverse-scored, the value is flipped (5 - value).
 */
export function scoreAnswer(value: number, reverse: boolean): number {
    if (reverse) {
        return 5 - value;
    }
    return value;
}

/**
 * Calculates the total score based on an array of answer objects.
 * Expects an array of objects with { questionId: number, value: number }.
 */
export function calculateTotal(
    answers: Record<number, number>
): number {
    let total = 0;
    QUESTIONS.forEach((q) => {
        const answerValue = answers[q.id];
        if (answerValue) {
            total += scoreAnswer(answerValue, q.reverse);
        }
    });
    return total;
}

export type ResultBand = {
    label: string;
    shortDescription: string;
    tips: string[];
    nextSteps: string[];
};

/**
 * Returns the result band based on the total score.
 * (Placeholder logic for now)
 */
export function getResultBand(total: number): ResultBand {
    // Max score = 20 * 4 = 80
    // Min score = 20 * 1 = 20

    if (total >= 60) {
        return {
            label: "Strong Growth Mindset",
            shortDescription: "You consistently embrace challenges and see failure as a learning opportunity.",
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
        };
    } else if (total >= 40) {
        return {
            label: "Growth Mindset with Some Fixed Ideas",
            shortDescription: "You generally have a growth mindset, but certain situations may trigger fixed beliefs.",
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
        };
    } else {
        return {
            label: "Fixed Mindset",
            shortDescription: "You tend to believe that your abilities are set in stone and avoid challenges.",
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
        };
    }
}
