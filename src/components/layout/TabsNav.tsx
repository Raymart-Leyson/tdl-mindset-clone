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
        <div className="px-6 max-w-6xl mx-auto mb-10">
            <nav className="flex justify-center space-x-8 border-b-2 border-tdlInk/10 overflow-x-auto">
                {tabs.map((tab) => {
                    const active = isActive(tab.href);
                    return (
                        <Link
                            key={tab.label}
                            href={tab.href}
                            className={`pb-3 text-sm font-bold tracking-widest transition-all duration-200 mt-2 ${active
                                    ? "border-b-4 border-tdlInk text-tdlInk translate-y-[2px]"
                                    : "text-tdlInk/60 hover:text-tdlInk hover:border-b-4 hover:border-tdlInk/30 hover:translate-y-[2px] border-transparent border-b-4"
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
