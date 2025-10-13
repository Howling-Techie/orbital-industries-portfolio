export const Heading = ({title, subtitle}: { title: string, subtitle?: string }) => {
    return (
        <div className="flex items-center gap-6">
            <div
                className="border-l-4 border-international-orange dark:border-hazard-yellow pl-4 space-y-1">
                <div>
                    {subtitle &&
                        <div
                            className="text-international-orange dark:text-hazard-yellow font-['Share_Tech_Mono'] mb-2">
                            {subtitle}
                        </div>
                    }
                    <h2 className="text-4xl md:text-5xl dark:font-orbitron dark:font-bold text-background dark:text-foreground">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};