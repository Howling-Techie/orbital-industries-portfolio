import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";

export function BackgroundGrid() {
    const {theme} = useContext(ThemeContext);
    const isLightMode = theme === "light";
    const color = isLightMode ? "#000000" : "#ffd700";
    return (
        <div
            className="fixed inset-0 bg-foreground dark:bg-background">
            <div
                className="fixed inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                    backgroundSize: "50px 50px"
                }}/>
        </div>
    );
}