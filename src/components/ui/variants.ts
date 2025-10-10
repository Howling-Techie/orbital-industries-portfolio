import {cva} from "class-variance-authority";

export const cornerBorderVariants = cva(
    "absolute w-20 h-20",
    {
        variants: {
            position: {
                "top-left": "top-8 left-8 border-l-4 border-t-4",
                "top-right": "top-8 right-8 border-r-4 border-t-4",
                "bottom-left": "bottom-8 left-8 border-l-4 border-b-4",
                "bottom-right": "bottom-8 right-8 border-r-4 border-b-4",
            },
            theme: {
                light: "border-black",
                dark: "border-hazard-yellow",
            }
        },
        defaultVariants: {
            theme: "light",
        }
    }
);

export const buttonVariants = cva(
    "px-8 py-6 rounded-none uppercase tracking-wider border-2 h-10 inline-flex items-center justify-center group",
    {
        variants: {
            variant: {
                primary: [
                    "bg-international-orange hover:bg-international-orange/70 text-foreground border-background",
                    "dark:border-hazard-yellow dark:bg-hazard-yellow dark:text-background dark:hover:bg-hazard-yellow/90",
                ],
                secondary: [
                    "bg-foreground hover:bg-background hover:text-foreground text-background border-background",
                    "dark:border-hazard-yellow dark:bg-background dark:text-hazard-yellow dark:hover:bg-hazard-yellow/20 dark:hover:text-hazard-yellow",
                ],
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export const titleVariants = cva("text-6xl md:text-8xl leading-none tracking-tight w-2xl", {
    variants: {
        mode: {
            light: "font-['Space Grotesk'] text-background",
            dark: "font-['Orbitron'] font-black text-foreground",
        },
        status: {
            hidden: "hidden",
            visible: "",
            absolute: "absolute top-0 left-0",
        },
        transition: {
            wipeIn: "transition-wipe-in",
            wipeOut: "transition-wipe-out",
            none: "",
        }
    },
    defaultVariants: {
        status: "visible",
        transition: "none",
    }
});

export const technicalReadoutVariants = cva(
    "border-l-4 pl-4 space-y-1",
    {
        variants: {
            theme: {
                light: "border-international-orange",
                dark: "border-hazard-yellow",
            }
        },
        defaultVariants: {
            theme: "light",
        }
    }
);