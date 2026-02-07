"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TabsNav() {
    const pathname = usePathname();

    const tabs = [
        { label: "ABOUT", href: "/" },
        { label: "QUIZ", href: "/quiz" },
        { label: "RESULTS", href: "/results" },
        { label: "REFERENCES", href: "/references" },
    ];

    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <div className="px-6 max-w-6xl mx-auto mb-8">
            <nav className="flex justify-center space-x-8 lg:space-x-16">
                {tabs.map((tab) => {
                    const active = isActive(tab.href);
                    return (
                        <Link
                            key={tab.label}
                            href={tab.href}
                            className={`pb-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 border-b-4 ${active
                                ? "border-tdlInk text-tdlInk"
                                : "border-transparent text-tdlInk/50 hover:text-tdlInk hover:border-tdlInk/20"
                                }`}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
