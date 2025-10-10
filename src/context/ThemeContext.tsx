import React, {createContext, useState, useEffect} from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => {
    }
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [mounted, setMounted] = useState(false);

    // Initialize the theme based on user preferences or localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        }
        setMounted(true);
    }, []);

    // Update localStorage when theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {mounted && children}
        </ThemeContext.Provider>
    );
};