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

export const QUESTIONS: Question[] = [
    { id: 1, text: "With enough time and effort, I can get much better at almost any skill.", reverse: false },
    { id: 2, text: "People's basic level of intelligence stays about the same throughout their lives.", reverse: true },
    { id: 3, text: "Feedback, even when it's hard to hear, helps me improve my abilities.", reverse: false },
    { id: 4, text: "I can train myself to get better at handling challenges and setbacks.", reverse: false },
    { id: 5, text: "If I'm not good at something right away, it usually means it's not for me.", reverse: true },
    { id: 6, text: "Natural talent is the main reason some people succeed more than others.", reverse: true },
    { id: 7, text: "When I struggle with something, I see it as a sign that my brain is working and growing.", reverse: false },
    { id: 8, text: "How talented you are matters more than how much effort you put in.", reverse: true },
    { id: 9, text: "No matter what I do, there are certain areas where I'll never improve much.", reverse: true },
    { id: 10, text: "When I see someone perform better than me, it makes me curious about what I can learn from them.", reverse: false },
    { id: 11, text: "If I keep practicing a skill in a smart way, I expect to see progress over time.", reverse: false },
    { id: 12, text: "Some people are just \"math people\" or \"language people,\" and I'm not likely to change which one I am.", reverse: true },
    { id: 13, text: "If I fail at something important, it shows I don't have what it takes.", reverse: true },
    { id: 14, text: "I can always find strategies to improve, even when I feel stuck.", reverse: false },
    { id: 15, text: "Learning new strategies can significantly change how well I perform at difficult tasks.", reverse: false },
    { id: 16, text: "When I make mistakes, it mostly proves I've reached my limits.", reverse: true },
    { id: 17, text: "Some people are born to be leaders or creators; others will never really reach that level, no matter what.", reverse: true },
    { id: 18, text: "I believe my abilities can grow with effort, feedback, and persistence.", reverse: false },
    { id: 19, text: "When something is hard for me, I see it as an opportunity to become stronger.", reverse: false },
    { id: 20, text: "Improvement is limited; after a certain point, you can't get much better at most things.", reverse: true },
];

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
