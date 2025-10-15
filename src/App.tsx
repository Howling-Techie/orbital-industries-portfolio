import "./App.css";
import {Navigation} from "./components/Navigation.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {BackgroundGrid} from "./components/ui/backgroundGrid.tsx";
import {BrowserRouter, Outlet, Route, Routes} from "react-router";
import {Home} from "./pages/Home.tsx";
import {CaseStudy} from "./pages/CaseStudy.tsx";
import ScrollToAnchor from "./components/ScrollToAnchor.tsx";
import {Resume} from "./pages/Resume.tsx";
import {PortfolioDemo} from "./pages/PortfolioDemo.tsx";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter basename={"/orbital-industries-portfolio/"}>
                <div
                    className={`min-h-screen text-background dark:text-foreground overflow-hidden`}>
                    <ScrollToAnchor/>
                    <Routes>
                        <Route path="/portfolio-example" element={<PortfolioDemo/>}/>
                        <Route path="/" element={
                            <>
                                <BackgroundGrid/>
                                <Navigation/>
                                <main className="pt-20">
                                    <Outlet/>
                                </main>
                            </>
                        }>
                            <Route index element={<Home/>}/>
                            <Route path="/case-study" element={<CaseStudy/>}/>
                            <Route path="/resume" element={<Resume/>}/>
                            <Route path="/portfolio-example" element={<PortfolioDemo/>}/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
