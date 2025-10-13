import {Hero} from "../components/Hero.tsx";
import {Services} from "../components/Services.tsx";
import {Showcase} from "../components/Showcase.tsx";
import {Portfolio} from "../components/Portfolio.tsx";
import {Contact} from "../components/Contact.tsx";
import {About} from "../components/About.tsx";

export const Home = () => {
    return (
        <main>
            <Hero/>
            <Services/>
            <About/>
            <Showcase/>
            <Portfolio/>
            <Contact/>
            <section>
                <div className="container p-16 pt-0 relative min-w-screen flex items-center justify-center">
                    <a href={"https://github.com/Howling-Techie/orbital-industries-portfolio"}
                       className="uppercase text-2xl dark:font-['Orbitron'] dark:font-bold dark:text-foreground text-background dark:hover:text-hazard-yellow hover:text-international-orange cursor-pointer">
                        View this site on GitHub
                    </a>
                </div>
            </section>
        </main>
    );
};