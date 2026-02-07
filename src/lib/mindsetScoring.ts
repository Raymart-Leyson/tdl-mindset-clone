export const REVERSE_IDS = new Set<number>([
    2, 5, 6, 8, 9, 12, 13, 16, 17, 20
]);

export function scoreAnswer(value: number, questionId: number): number {
    if (!Number.isInteger(value) || value < 1 || value > 4) {
        console.warn(`Invalid answer value: ${value}. Ignoring.`);
        return 0;
    }

    if (REVERSE_IDS.has(questionId)) {
        return 5 - value;
    }
    return value;
}

export function calculateTotalScore(answersById: Record<number, number>): number {
    let total = 0;
    for (let id = 1; id <= 20; id++) {
        const value = answersById[id];
        if (value === undefined) {
            throw new Error(`Missing answer for question ID: ${id}`);
        }
        total += scoreAnswer(value, id);
    }
    return total;
}

export function getResultBand(totalScore: number): {
    key: string;
    label: string;
    rangeLabel: string;
} {
    if (totalScore >= 60) {
        return {
            key: "strong_growth",
            label: "Strong Growth Mindset",
            rangeLabel: "60-80",
        };
    } else if (totalScore >= 45) {
        return {
            key: "growth_with_fixed",
            label: "Growth Mindset with some Fixed ideas",
            rangeLabel: "45-59",
        };
    } else if (totalScore >= 28) {
        return {
            key: "fixed_with_growth",
            label: "Fixed Mindset with some Growth ideas",
            rangeLabel: "28-44",
        };
    } else {
        return {
            key: "strong_fixed",
            label: "Strong Fixed Mindset",
            rangeLabel: "20-27",
        };
    }
}
