import React from "react";

export function ContentCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`max-w-[1200px] mx-auto bg-tdlCard rounded-3xl shadow-xl border border-tdlTeal/20 p-8 md:p-12 relative overflow-hidden min-h-[400px] ${className}`}>
            <div className="relative z-10">
                {children}
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-tdlTeal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </div>
    );
}
