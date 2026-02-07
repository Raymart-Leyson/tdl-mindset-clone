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
                tdlYellow: "#FDFCF5", // Light creamy background
                tdlInk: "#1D2B36",    // Dark ink/blue-gray text
                tdlTeal: "#4FD1C5",   // Brand teal accent
                tdlCard: "#FFFFFF",   // Card background
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
