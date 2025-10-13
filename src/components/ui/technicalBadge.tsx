import React from "react";

export function TechnicalBadge({children}: {
    children: React.ReactNode;
}) {

    return (
        <div
            className={`inline-block p-1 sm:p-3 dark:bg-hazard-yellow text-background font-['Share_Tech_Mono'] text-sm tracking-wider`}>
            {children}
        </div>
    );
}
