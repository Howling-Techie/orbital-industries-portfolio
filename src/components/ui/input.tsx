import * as React from "react";

import {cn} from "./utils";

function Input({className, type, ...props}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow",
                className,
            )}
            {...props}
        />
    );
}

export {Input};
