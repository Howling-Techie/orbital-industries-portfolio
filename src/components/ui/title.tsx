export const Title = ({title, description}: { title: string, description?: string }) => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase my-4 text-international-orange dark:text-hazard-yellow dark:font-orbitron dark:font-bold">
                {title}
            </h1>
            {description &&
                <div
                    className="max-w-4xl text-xl text-accent-background dark:text-accent-foreground leading-relaxed mb-6">
                    {description}
                </div>
            }
        </div>
    );
};