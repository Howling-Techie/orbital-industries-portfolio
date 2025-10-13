import {Page} from "./page.tsx";
import {Card} from "./ui/card.tsx";
import {
    AppWindowIcon,
    ChevronRight,
    DatabaseIcon,
    ServerIcon,
    ZapIcon
} from "lucide-react";
import type {JSX} from "react";
import {Tag} from "./ui/tag.tsx";
import {buttonVariants} from "./ui/variants.ts";
import {NavLink} from "react-router";

const techStack = [
    "TypeScript",
    "JavaScript",
    "Electron",
    "Jest",
    "React Native"
];

const frontend = [
    "Next.js",
    "Vite",
    "React",
    "Tailwind CSS",
    "Apexcharts",
    "Storybook"
];

const backend = [
    "Node.js",
    "Prisma",
    "NestJS",
    "Express",
    "Passport.js",
];

const database = [
    "MongoDB",
    "MSSQL",
    "PostgreSQL",
    "SQLite",
    "Supabase",
];

function SkillCard({title, skills, icon}: { title: string, skills: string[], icon: JSX.Element }) {
    return (
        <Card hover>
            <div
                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                <div className="flex justify-between flex-row">
                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{title}</h1>
                    <div
                        className="text-international-orange dark:text-hazard-yellow dark:group-hover/card:text-foreground group-hover/card:text-background">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4 z-20">
                    {skills.map((skill, index) => (
                        <Tag key={index} text={skill}/>))}
                </div>
            </div>
        </Card>
    );
}

export function About() {
    return (
        <Page title={"ABOUT ORBITAL"} id={"about"} subtitle={"SYSTEM_INFO"}
        >
            {/* Services Grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                <section>
                    <p>I'm solo full-stack developer specializing in modern web applications for small businesses.
                        Founded in 2024, Orbital Industries is built on a foundation of quality code, attention to
                        detail, and direct client collaboration.</p>
                    <p>Working with local businesses and entrepreneurs, I craft custom solutions that prioritize clean
                        architecture, responsive design, and seamless user experiences. Every project receives dedicated
                        focus and personalized service.</p>
                    <p>Whether you need a simple static website, a complex project with robust backend systems, or have
                        an existing project that could use some support,
                        Orbital Industries are here to help bring your project to reality.</p>
                    <p>Alternatively, if you're looking to expand your team I'm always open to new opportunities!</p>
                    <div className="flex mt-8">
                        <NavLink
                            to={"/resume"}
                            onClick={() => window.scrollTo(0, 0)}
                            className={
                                buttonVariants({variant: "secondary"})}
                        >
                            VIEW FULL RESUME
                            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                        </NavLink>
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:col-span-2">
                    <SkillCard title={"TECHNOLOGY"} skills={techStack} icon={<ZapIcon/>}/>
                    <SkillCard title={"FRONT_END"} skills={frontend} icon={<AppWindowIcon/>}/>
                    <SkillCard title={"BACK_END"} skills={backend} icon={<ServerIcon/>}/>
                    <SkillCard title={"DATABASES"} skills={database} icon={<DatabaseIcon/>}/>
                </div>
            </div>
        </Page>
    );
}