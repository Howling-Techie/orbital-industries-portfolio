import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";

export function DiagonalStripes({className = ""}: { className?: string }) {
    const {theme} = useContext(ThemeContext);
    const isLightMode = theme === "light";
    const color = isLightMode ? "rgba(251,111,36,0.1)" : "rgba(251, 191, 36, 0.1)";
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          ${color} 10px,
          ${color} 20px
        )`
            }}/>
        </div>
    );
}
