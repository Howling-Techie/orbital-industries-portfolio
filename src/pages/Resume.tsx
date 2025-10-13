import {Page} from "../components/page.tsx";
import {Card} from "../components/ui/card.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import type {JSX} from "react";
import {SiTypescript} from "react-icons/si";
import {BiSolidServer, BiSolidWindowAlt} from "react-icons/bi";
import {RiFilmFill} from "react-icons/ri";
import {buttonVariants} from "../components/ui/variants.ts";
import {cn} from "../components/ui/utils.ts";
import {Heading} from "../components/ui/heading.tsx";
import {FaCode, FaLaptop} from "react-icons/fa6";
import {MdEditDocument, MdGroups, MdOndemandVideo, MdSchool, MdViewTimeline, MdVolunteerActivism} from "react-icons/md";
import {IoBarChart, IoGitBranch} from "react-icons/io5";
import {AiFillDatabase} from "react-icons/ai";
import {ImTrello} from "react-icons/im";
import {PiCircuitryFill} from "react-icons/pi";
import {NavLink} from "react-router";

const description =
    `As a dedicated full-stack web developer, I am fuelled by a passion for crafting smooth, high quality user experiences. My transition into tech via Northcoders is backed by experience working on a diverse array programming projects, demonstrating adaptability and creativity. Prior roles honed my ability to deliver tailored insights efficiently, working both solo and in a team to meet tight deadlines and strict user requirements, while my active community involvement reflects my commitment to fostering positive, welcoming environments, and considering multiple user perspectives.`;

interface Tech {
    title: string,
    icon: JSX.Element,
    text: string
}

const coding: Tech[] = [
    {
        title: "Languages",
        icon: <SiTypescript className={"w-6 h-6"}/>,
        text: "JavaScript and Typescript (Node.js, React, React Native, Next.js, Express, NestJs), C# (.NET, Blazor)"
    },
    {
        title: "Database Management",
        icon: <AiFillDatabase className={"w-6 h-6"}/>,
        text: "PostgreSQL, SQLite, MySQL, MSSQL, Prisma, API development"
    },
    {
        title: "Front-End",
        icon: <BiSolidWindowAlt className={"w-6 h-6"}/>,
        text: "HTML, CSS, Lighthouse, Cypress testing"
    },
    {
        title: "Hosting",
        icon: <BiSolidServer className={"w-6 h-6"}/>,
        text: "Netlify, Render, Supabase, DigitalOcean, AWS"
    },
];

const management: Tech[] = [
    {
        title: "Project Management",
        icon: <MdViewTimeline className={"w-6 h-6"}/>,
        text: "Agile methodologies, SCRUM, test-driven development, and paired programming methodologies"
    },
    {
        title: "Version Control",
        icon: <IoGitBranch className={"w-6 h-6"}/>,
        text: "Git repository management"
    },
    {
        title: "Management Tools",
        icon: <ImTrello className={"w-6 h-6"}/>,
        text: "Project progress tools such as Trello and Jira"
    },
    {
        title: "Documentation",
        icon: <MdEditDocument className={"w-6 h-6"}/>,
        text: "Using Storybook, Swagger, and JSDoc for documentation"
    },
];

const other: Tech[] = [
    {
        title: "Community Engagement",
        icon: <MdGroups className={"w-6 h-6"}/>,
        text: "Online community management and moderation for large groups"
    },
    {
        title: "Streaming",
        icon: <MdOndemandVideo className={"w-6 h-6"}/>,
        text: "Run an affiliated Twitch livestream channel"
    },
    {
        title: "Entertainment",
        icon: <RiFilmFill className={"w-6 h-6"}/>,
        text: "Organising a weekly online movie night for over a dozen people"
    },
    {
        title: "Electronics",
        icon: <PiCircuitryFill className={"w-6 h-6"}/>,
        text: "In my spare time I enjoy tinkering with electronics and my HomeLab"
    },
];

interface Experience extends Tech {
    company: string,
    duration: string,
}

const experience: Experience[] = [
    {
        title: "Freelance Software Developer",
        icon: <FaCode/>,
        company: "Out There Media",
        duration: "September 2024- Current",
        text: "My largest client so far, I am working with Out There Media to provide a robust e-commerce platform that allows creators to upload and sell digital comics. This is a full stack project requiring a well-designed database, a sturdy back-end, and a welcoming front-end that’s both easy for creators to manage their work via dedicated, custom built dashboards, and for customers to browse, buy, and read the content distributed on the site. The entire project has been built using Typescript, using Next.JS on the front-end, NestJS on the backend, and PostgreSQL for the database."
    },
    {
        title: "Volunteer Software Developer ",
        icon: <MdVolunteerActivism/>,
        company: "WEEE Charity",
        duration: "February 2024 – May 2024",
        text: "I volunteered my time to a local e-waste based charity in the Warrington area, where I worked on multiple projects including a full stack request management and tracking system, which had the goal of moving the company from an almost entirely paper-based system to an electronic one, reducing not just paper usage but also the amount of lost/misplaced requests, orders, and items. I also created a guest sign-in/sign-out system to allow for better tracking of volunteers on site and working with other organisations to streamline the reporting process."
    },
    {
        title: "Trainee Full Stack Developer",
        icon: <MdSchool/>,
        company: "Northcoders",
        duration: "August 2023 – November 2023",
        text: "I was enrolled in an intensive Northcoders bootcamp, encompassing comprehensive training in both back-end and front-end development. While on the course I alternated between solo sprints and paired programming sessions, where I focused on constructing dynamic web applications. The program covers key languages and frameworks such as HTML, JavaScript, SQL, and React, with an emphasis on test-driven development.\n" +
            "Projects included constructing a server with a thorough and documented API server, a news/bloggings site, and projects that queried public APIs to present the data to the user using UI libraries such as MUI and Nivo Charts."
    },
    {
        title: "Freelance Software Developer",
        icon: <FaCode/>,
        company: "Various",
        duration: "Spring 2022 – Summer 2023",
        text: "During this time, I leveraged the opportunity provided by the Prince’s Trust scheme for self-employment. Projects ranged from Discord integrations and verification systems for multimillion-dollar enterprises to community organization tools employing a blend of Postgres, MySQL, React, and C#/Blazor technologies."
    },
    {
        title: "MI Analyst",
        icon: <IoBarChart/>,
        company: "Sainsburys Bank",
        duration: "Winter 2020 – Spring 2022",
        text: "Demonstrated proficiency in producing tailored analytical reports for stakeholders across multiple departments. Leveraged skills in data analysis, SQL, and VBA to ensure clarity and precision in meeting user requirements and utilized platforms like Microsoft PowerBI and PowerApps for intuitive data presentation."
    },
    {
        title: "IT Technician",
        icon: <FaLaptop/>,
        company: "Sainsburys Bank",
        duration: "Spring 2020 – Autumn 2020",
        text: "Helped lead the successful implementation of the Work from Home program for Sainsburys Bank and Argos Financial Services, ensuring seamless software and hardware setup for remote employees. Maintained stringent adherence to data protection and COVID-19 health and safety protocols. "
    },
    {
        title: "Computer Games Programming",
        icon: <MdSchool/>,
        company: "Teesside University ",
        duration: "2012-2016",
        text: "Graduated with a Diploma of Higher Education"
    },
];

export const Resume = () => {
    return (
        <Page title={"RESUME"} subtitle={"FULL_STACK DEVELOPER"} id={"resume"} description={description}>
            <a
                className={cn(
                    buttonVariants({variant: "primary"}),
                    "group"
                )}
                href={"assets/Matthew Berry - Resume.pdf"}
            >
                DOWNLOAD RESUME
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
            <main className="flex flex-col gap-8">
                <Card
                    className="lg:p-6">
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            SKILLS
                        </h1>
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="pb-2 text-xl">CODING</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                                    {coding.map((tech, index) => (
                                        <Card hover key={index}>
                                            <div
                                                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                                                <div className="flex justify-between flex-row">
                                                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{tech.title}</h1>
                                                    <div
                                                        className="text-international-orange dark:text-hazard-yellow dark:group-hover/card:text-foreground group-hover/card:text-background">
                                                        {tech.icon}
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    {tech.text}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="pb-2 text-xl">PROJECT MANAGEMENT</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                                    {management.map((tech, index) => (
                                        <Card hover key={index}>
                                            <div
                                                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                                                <div className="flex justify-between flex-row">
                                                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{tech.title}</h1>
                                                    <div
                                                        className="text-international-orange dark:text-hazard-yellow dark:group-hover/card:text-foreground group-hover/card:text-background">
                                                        {tech.icon}
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    {tech.text}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="pb-2 text-xl">OTHER</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                                    {other.map((tech, index) => (
                                        <Card hover key={index}>
                                            <div
                                                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                                                <div className="flex justify-between flex-row">
                                                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{tech.title}</h1>
                                                    <div
                                                        className="text-international-orange dark:text-hazard-yellow dark:group-hover/card:text-foreground group-hover/card:text-background">
                                                        {tech.icon}
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    {tech.text}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
                <Heading title={"Experience"}/>
                {experience.map((exp, index) => (
                    <Card
                        className="flex flex-col gap-8 lg:p-6" key={index}>
                        <section>
                            <div className="flex justify-between flex-row">
                                <div className="flex items-center gap-6">
                                    <div
                                        className="border-l-4 border-international-orange dark:border-hazard-yellow pl-4 space-y-1">
                                        <div>
                                            <div
                                                className="text-international-orange dark:text-hazard-yellow font-['Share_Tech_Mono'] mb-2">
                                                {exp.duration}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl dark:font-['Orbitron'] dark:font-bold text-background dark:text-foreground">
                                                {exp.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="text-international-orange dark:text-hazard-yellow text-4xl">
                                    {exp.icon}
                                </div>
                            </div>
                            <h1 className="text-xl lg:text-2xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                                {exp.company}
                            </h1>
                            <div>
                                <p>{exp.text}</p>
                            </div>
                        </section>
                    </Card>))}
                <div className="grid grid-cols-1 pb-20">
                    <NavLink
                        to={"/"}
                        onClick={() => window.scrollTo(0, 0)}
                        className={cn(
                            buttonVariants({variant: "secondary"}),
                            "group"
                        )}
                    >
                        <ChevronLeft className="ml-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        BACK TO ORBITAL INDUSTRIES
                    </NavLink>
                </div>
            </main>
        </Page>
    );
};