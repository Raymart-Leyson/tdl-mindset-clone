"use client";

import React from "react";
import { QuizProvider } from "@/src/context/QuizContext";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/layout/Hero";
import { TabsNav } from "@/src/components/layout/TabsNav";
import "@/app/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-tdlYellow text-tdlInk font-sans">
                <QuizProvider>
                    {/* Navigation Bar */}
                    <Navbar />

                    {/* Hero Section */}
                    <Hero />

                    {/* Tabs Navigation */}
                    <TabsNav />

                    {/* Main Content Area */}
                    <main className="px-6 pb-24">
                        <div className="max-w-[1200px] mx-auto bg-tdlCard rounded-3xl shadow-xl border border-tdlTeal/20 p-8 md:p-12 relative overflow-hidden min-h-[400px]">
                            <div className="relative z-10">
                                {children}
                            </div>
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-tdlTeal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        </div>
                    </main>
                </QuizProvider>
            </body>
        </html>
    );
}
