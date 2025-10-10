import "./App.css";
import {Navigation} from "./components/Navigation.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {BackgroundGrid} from "./components/ui/backgroundGrid.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import {Home} from "./pages/Home.tsx";
import {CaseStudy} from "./pages/CaseStudy.tsx";
import ScrollToAnchor from "./components/ScrollToAnchor.tsx";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter basename={"/orbital-industries-portfolio"}>
                <div
                    className={`min-h-screen text-background dark:text-foreground overflow-hidden`}>
                    <main className="pt-20">
                        <BackgroundGrid/>
                        <Navigation/>
                        <ScrollToAnchor/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/case-study" element={<CaseStudy/>}/>
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
