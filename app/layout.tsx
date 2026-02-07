"use client";

import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { QuizProvider } from "@/src/context/QuizContext";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/layout/Hero";
import { TabsNav } from "@/src/components/layout/TabsNav";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen bg-tdlYellow text-tdlInk font-sans ${inter.variable} ${playfair.variable}`}>
                <QuizProvider>
                    {/* Navigation Bar */}
                    <Navbar />

                    {/* Hero Section */}
                    <Hero />

                    {/* Tabs Navigation */}
                    <TabsNav />

                    {/* Main Content Area */}
                    <main className="px-6 pb-24">
                        {children}
                    </main>
                </QuizProvider>
            </body>
        </html>
    );
}
