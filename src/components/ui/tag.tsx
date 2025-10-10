export const Tag = ({
                        text
                    }: { text: string }) => {
    return (
        <div
            className="border dark:border-hazard-yellow border-background px-3 py-1 text-xs font-mono"
        >
            {text}
        </div>
    );
};