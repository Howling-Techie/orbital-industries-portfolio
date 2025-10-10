import * as React from "react";

import {cn} from "./utils";
import {DiagonalStripes} from "./diagonalStripes.tsx";

export const Card = ({className = "", children, hover = false}: {
    className?: string,
    hover?: boolean,
    children: React.ReactNode
}) => {
    return (
        <div
            data-slot="card"
            className={
                `text-background dark:text-foreground flex flex-col gap-6 rounded-sm relative border-2 p-6 
                border-background bg-foreground dark:bg-neutral-900 dark:border-hazard-yellow/20 
                dark:hover:border-hazard-yellow/50 transition-all overflow-hidden ${hover ? "group/card" : ""}`}
        >
            {hover &&
                <DiagonalStripes className="opacity-0 group-hover/card:opacity-100 transition-opacity"/>}
            <div
                className={cn("z-10 relative", className)}>
                {children}
            </div>
        </div>
    );
};