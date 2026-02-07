import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                tdlYellow: "#FFD500", // Vibrant yellow from screenshot
                tdlInk: "#111827",    // Dark text
                tdlTeal: "#4FD1C5",   // Teal accent
                tdlBlueLight: "#E0F7FA", // Light blue background for content if needed
                tdlCard: "#FFFFFF",   // Card background
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
