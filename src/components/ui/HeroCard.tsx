export const HeroCard = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="bg-white border-4 border-black h-max">
            {children}
        </div>
    );
};