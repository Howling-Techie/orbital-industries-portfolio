import {AlertTriangle, ArrowRight} from "lucide-react";
import {TechnicalBadge} from "./ui/technicalBadge.tsx";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {buttonVariants, cornerBorderVariants, technicalReadoutVariants, titleVariants} from "./ui/variants";
import {cn} from "./ui/utils.ts";

export function Hero() {
    const {theme} = useContext(ThemeContext);
    const isLightMode = theme === "light";
    const [transitioning, setTransitioning] = useState(false);
    const [titleStatus, setTitleStatus] = useState(isLightMode ? 1 : -1);
    const [firstRun, setFirstRun] = useState(true);

    useEffect(() => {
        if (firstRun) {
            setFirstRun(false);
            return;
        }
        setTransitioning(true);
        setTitleStatus(0);
        const wipeTimer = setTimeout(() => {
            setTransitioning(false);
        }, 800);
        const titleTimer = setTimeout(() => {
            setTitleStatus(isLightMode ? 1 : -1);
        }, 600);

        return () => {
            clearTimeout(wipeTimer);
            clearTimeout(titleTimer);
        };
    }, [theme]);

    return (
        <section className="relative py-20 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
            {/* Corner Borders */}
            <div className={cornerBorderVariants({position: "top-left", theme: isLightMode ? "light" : "dark"})}/>
            <div className={cornerBorderVariants({position: "top-right", theme: isLightMode ? "light" : "dark"})}/>
            <div className={cornerBorderVariants({position: "bottom-left", theme: isLightMode ? "light" : "dark"})}/>
            <div className={cornerBorderVariants({position: "bottom-right", theme: isLightMode ? "light" : "dark"})}/>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                    <div className="space-y-8">
                        {/* Warning badge */}
                        <div className="flex items-center gap-3 overflow-visible">
                            <AlertTriangle className="w-6 h-6 text-background dark:text-hazard-yellow"/>
                            <TechnicalBadge>SYSTEM ONLINE / FULL-STACK ENGINEERING</TechnicalBadge>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-4 relative">
                            <h1 className={titleVariants({
                                mode: "light",
                                status: titleStatus === -1 ? "hidden" : "visible",
                                transition: transitioning
                                    ? (!isLightMode ? "wipeOut" : "wipeIn")
                                    : "none"
                            })}>
                                ORBITAL<br/>
                                <span className="relative text-international-orange">
                                    INDUSTRIES
                                </span>
                            </h1>
                            <h1 className={titleVariants({
                                mode: "dark",
                                status: titleStatus === 0
                                    ? "absolute"
                                    : (titleStatus === 1 ? "hidden" : "visible"),
                                transition: transitioning
                                    ? (isLightMode ? "wipeOut" : "wipeIn")
                                    : "none"
                            })}>
                                ORBITAL<br/>
                                <span className="relative text-hazard-yellow">
                                    INDUSTRIES
                                </span>
                            </h1>
                            <div className="flex items-center gap-4">
                                <p className="text-xl text-accent-background dark:text-accent-foreground font-['Rajdhani']">
                                    ADVANCED WEB SYSTEMS ENGINEERING
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={"#contact"}
                                className={cn(
                                    buttonVariants({variant: "primary"}),
                                    "group"
                                )}
                            >
                                Initialize Project
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
                            </a>

                            <a
                                href={"#services"}
                                className={
                                    buttonVariants({variant: "secondary"})}
                            >
                                View Capabilities
                            </a>
                        </div>

                        {/* Technical readout */}
                        <div className={technicalReadoutVariants({
                            theme: isLightMode ? "light" : "dark"
                        })}>
                            <div className="font-['Share_Tech_Mono'] text-sm text-background dark:text-hazard-yellow">
                                LAUNCH_READY
                            </div>
                            <div className="text-accent-background dark:text-accent-foreground">
                                Industrial-grade web development solutions. We engineer high-performance applications
                                built for scale and reliability.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}