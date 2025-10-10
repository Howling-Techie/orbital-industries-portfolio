import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {NavLink} from "react-router";

export function Navigation() {
    const {theme, setTheme} = useContext(ThemeContext);
    const isLightMode = theme === "light";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-foreground dark:bg-background " : ""}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 text-background dark:text-foreground">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <NavLink to="/" onClick={() => window.scrollTo({behavior: "smooth", top: 0})}>
                            <div className="tracking-wider">
                                ORBITAL INDUSTRIES
                            </div>
                            <div className="text-xs font-mono">
                                SYS_ID: OI-0924
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
                            <NavLink
                                to="/#services"
                                className="hover:text-accent-background dark:hover:text-accent-foreground"
                            >
                                SERVICES
                            </NavLink>
                            <NavLink
                                to="/#about"
                                className="hover:text-primary transition-colors"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                to="/#projects"
                                className="hover:text-primary transition-colors"
                            >
                                PROJECTS
                            </NavLink>
                            <NavLink
                                to="/#contact"
                                className="hover:text-primary transition-colors"
                            >
                                CONTACT
                            </NavLink>
                            <button
                                onClick={() => setTheme(isLightMode ? "dark" : "light")}
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                            >
                                {isLightMode ? "Dark Mode" : "Light Mode"}
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}