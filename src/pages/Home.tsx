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
        </main>
    );
};