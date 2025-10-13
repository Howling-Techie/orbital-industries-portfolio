import * as React from "react";

import {cn} from "./utils";

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "resize-none flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base",
                "outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow",
                className,
            )}
            {...props}
        />
    );
}

export {Textarea};
