import {Moon, Sun} from "lucide-react";
import {NavLink, Outlet} from "react-router";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";

export const NewsHeader = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const darkMode = theme === "dark";
    return (
        <div>
            <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
                darkMode ? "bg-neutral-900 border-neutral-800 backdrop-blur-lg" : "bg-white border-neutral-200 backdrop-blur-lg"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <NavLink to={"/news-example"} onClick={() => window.scrollTo(0, 0)} className="flex-shrink-0">
                            <h1 className={`text-2xl font-bold font-['Orbitron'] transition-colors ${
                                darkMode ? "text-white" : "text-neutral-900"
                            }`}>
                                ORBITAL NEWS
                            </h1>
                        </NavLink>
                        <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>
                            <div
                                className="flex items-center justify-center w-12 h-12 transition-colors md:hidden">
                                <img src={"/assets/logo.svg"}/>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                Back to Orbital Industries
                            </div>
                        </NavLink>

                        {/* Navigation */}
                        {/*<nav className="hidden md:flex items-center space-x-8">*/}
                        {/*    {["News", "Review", "Podcast", "Editorial"].map((type) => (*/}
                        {/*        <button*/}
                        {/*            key={type}*/}
                        {/*            className={`text-sm font-medium transition-colors ${*/}
                        {/*                darkMode*/}
                        {/*                    ? "text-neutral-300 hover:text-white"*/}
                        {/*                    : "text-neutral-700 hover:text-neutral-900"*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            {type}*/}
                        {/*        </button>*/}
                        {/*    ))}*/}
                        {/*</nav>*/}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setTheme(darkMode ? "light" : "dark")}
                            className={`p-2 rounded-lg transition-colors ${
                                darkMode
                                    ? "bg-neutral-800 text-yellow-400 hover:bg-neutral-700"
                                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                        </button>
                    </div>
                </div>
            </header>
            <Outlet/>
        </div>
    );
};