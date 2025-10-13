import {Page} from "../components/page.tsx";
import {Card} from "../components/ui/card.tsx";
import {CheckCircle2, ChevronLeft, ChevronRight} from "lucide-react";
import type {JSX} from "react";
import {SiJest, SiNextdotjs, SiPrisma, SiTailwindcss} from "react-icons/si";
import {BiSolidShip} from "react-icons/bi";
import {RiWindow2Fill} from "react-icons/ri";
import {FaPassport} from "react-icons/fa";
import {buttonVariants} from "../components/ui/variants.ts";
import {cn} from "../components/ui/utils.ts";
import {NavLink} from "react-router";

const description =
    `A full-stack web application built with Next.js and Nestjs that enables digital comic creators to sell their work through personal storefronts, while giving customers an easy-to-use purchasing and reading experience.`;

interface Tech {
    title: string,
    icon: JSX.Element,
    text: string
}

const frontend: Tech[] = [
    {
        title: "Next.js",
        icon: <SiNextdotjs className={"w-6 h-6"}/>,
        text: "With built in features such as image optimization, automatic static optimization, and server components, Next.js was an ideal choice for this project."
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className={"w-6 h-6"}/>,
        text: "Tailwind CSS was used to create a clean and responsive design that was easy to maintain and extend, and when combined with HeadlessUI it allowed for a highly customizable and extensible UI library."
    },
    {
        title: "ArkType",
        icon: <BiSolidShip className={"w-6 h-6"}/>,
        text: "A relatively new library, ArkType is a TypeScript validation library that allows for easy and type-safe validation of data structures, and is used to validate the input of the API endpoints."
    },
    {
        title: "Other Libraries",
        icon: <RiWindow2Fill className={"w-6 h-6"}/>,
        text: "Tools such as MDXEditor, Marked, ApexCharts, DND Kit, React Dropzone, and more were used to create a variety of custom components and utilities."
    },
];

const backend: Tech[] = [
    {
        title: "NestJS",
        icon: <SiNextdotjs className={"w-6 h-6"}/>,
        text: "Between its modular architecture and its support for TypeScript, NestJS was a great choice for this project."
    },
    {
        title: "PostgreSQL with Prisma",
        icon: <SiPrisma className={"w-6 h-6"}/>,
        text: "Using an ORM like Prisma allowed for a seamless integration between the database and the application, allowing for a clean and type-safe way to interact with the database."
    },
    {
        title: "Passport.js",
        icon: <FaPassport className={"w-6 h-6"}/>,
        text: "Using an off the shelf authentication library, Passport.js, allowed for a simple and secure way to handle user authentication."
    },
    {
        title: "Jest",
        icon: <SiJest className={"w-6 h-6"}/>,
        text: "Jest was used to write unit and integration tests for the application, and to ensure that the code was working as expected."
    },
];

export const CaseStudy = () => {
    return (
        <Page title={"WELCOME CHANGE"} subtitle={"CASE_STUDY"} id={"case-study"} description={description}>
            <a
                className={cn(
                    buttonVariants({variant: "primary"}),
                    "group"
                )}
                href={"https://wechange.me"}
            >
                VISIT SITE
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
            <main className="flex flex-col gap-8">
                <Card
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:p-6">
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            Project Initialization
                        </h1>
                        <div>
                            <p>In September of 2024 I began work with Out There Media to create a new digital comics
                                platform that would cater to artists that come to find themselves being restricted by
                                the
                                mainstream digital storefronts.</p>
                            <p>My role as a full-stack developer was to design, develop, and deploy the site from start
                                to
                                finish, so with that in mind our initial design document was collaboratively written,
                                with
                                the core objectives being:</p>
                            <div className="space-y-4 my-8 ">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                    <div>
                                        <div className="font-mono text-sm mb-1">
                                            Create an Independent Digital Storefront
                                        </div>
                                        <div className="text-sm text-accent-background dark:text-accent-foreground">
                                            Develop an online storefront for creators to sell digital products (i.e.
                                            comics
                                            and bundles) directly to customers.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                    <div>
                                        <div className="font-mono text-sm mb-1">
                                            Content Hosting and Display
                                        </div>
                                        <div className="text-sm text-accent-background dark:text-accent-foreground">
                                            Provide functionality to display webcomics or galleries of images to view
                                            comics
                                            online, and allow comics to be downloaded to be viewed offline.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                    <div>
                                        <div className="font-mono text-sm mb-1">
                                            Creator Control and Customization
                                        </div>
                                        <div className="text-sm text-accent-background dark:text-accent-foreground">
                                            Allow creators to manage their store pages, upload content, and fix
                                            formatting
                                            and other smaller issues.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                    <div>
                                        <div className="font-mono text-sm mb-1">
                                            Focus on Security and Privacy
                                        </div>
                                        <div className="text-sm text-accent-background dark:text-accent-foreground">
                                            Prioritize cybersecurity and data privacy, especially given the mature
                                            nature of
                                            the content and high-risk merchant categorization.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                    <div>
                                        <div className="font-mono text-sm mb-1">
                                            Seamless User Experience
                                        </div>
                                        <div className="text-sm text-accent-background dark:text-accent-foreground">
                                            Ensure the platform is easy to use for both creators managing their work and
                                            for
                                            customers making purchases and managing their library.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <img src={"assets/case-study/design-document.png"} alt={"screenshot of the design document"}/>
                </Card>
                <Card
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:p-6">
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            PLANNING STAGE
                        </h1>
                        <div>
                            <p>The next steps were to start creating mockups for the site layout, and to start planning
                                the structure of the database.</p>
                            <p>For creating a style guide for this project, Storybook was used as it allowed for rapid
                                prototyping of pages and components programmatically and easily sharing the designs via
                                a static github pages site. The core pages of the site were created, and would act as a
                                reference for all future pages that would be created.</p>
                            <p>The database schema was designed with flexibility and future proofing in mind, to ensure
                                the site could be deployed with the minimum requirements while leaving ample room for
                                any features that were considered lower priority at the time. Considerations also had to
                                be made for 3rd party integrations such as payment providers and sign-in options.</p>
                        </div>
                    </section>
                    <img src={"assets/case-study/storybook.png"}
                         alt={"screenshot of a Storybook page showing a creator's storefront"}/>
                </Card>
                <Card
                    className="lg:p-6">
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            SYSTEM ARCHITECTURE
                        </h1>
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="pb-2 text-xl">FRONT-END</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                                    {frontend.map((tech, index) => (
                                        <Card hover key={index}>
                                            <div
                                                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                                                <div className="flex justify-between flex-row">
                                                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{tech.title}</h1>
                                                    <div
                                                        className="text-international-orange dark:text-hazard-yellow dark:group-hover:text-foreground group-hover:text-background">
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
                                <h2 className="pb-2 text-xl">BACK-END</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                                    {backend.map((tech, index) => (
                                        <Card hover key={index}>
                                            <div
                                                className="flex flex-col divide-y divide-background dark:divide-hazard-yellow/20">
                                                <div className="flex justify-between flex-row">
                                                    <h1 className="font-mono dark:text-hazard-yellow pb-4">{tech.title}</h1>
                                                    <div
                                                        className="text-international-orange dark:text-hazard-yellow dark:group-hover:text-foreground group-hover:text-background">
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
                <Card
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:p-6">
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            FEATURE HIGHLIGHT
                        </h1>
                        <div>
                            <p>The most technically complex part of the site revolves around the uploading and
                                processing of comics.</p>
                            <p>For instance, a creator has the option to upload either a collection of images, a single
                                PDF, or both. Depending on what the user chooses, they can select which pages
                                should be free to preview on the site, and optionally upload a custom cover to be
                                displayed on the store page.</p>
                            <p>If the user only provides a PDF version of their comic, once uploaded the file as added
                                to a queue which handles converting the file to a series of images, allowing it to be
                                easily viewed on the site's built in e-reader, without having to be concerned about
                                integrating additional PDF support.</p>
                            <p>The upload process also allows creators to set more advanced features, such as allowing
                                customers to set a custom price (above a minimum), add chapters, and launching the comic
                                at a specific date and time. Care was also taken to provide feedback to creators before
                                publishing their work to help maximise visibility of their work.</p>
                            <p>Time was also taken to build the components with modularity in mind, allowing them to be
                                easily adapted to related site functionality, such as creating collections of comics or
                                editing the comic's details post-launch.</p>
                        </div>
                    </section>
                    <img src={"assets/showcase/comicUpload.png"}
                         alt={"screenshot of part of the comic upload process"}/>
                </Card>
                <Card>
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            OBSTACLE RESOLUTION
                        </h1>
                        <div>
                            <p>One of the biggest hurdles to overcome during this process was handling 3rd party payment
                                integration.</p>
                            <p>Despite having worked with companies like Stripe and their API before, working with
                                CCBill presented a greater difficulty due to their tools and documentation being lacking
                                compared to its more well known competitors.</p>
                            <p>This issue though allowed me to explore technologies I hadn't used before such as Ngrok,
                                which allowed me to build and test integration with them from start to finish, including
                                testing webhooks. Thanks to these tools, once it came to deploying the features it was
                                smooth sailing.</p>
                            <p className="pt-2">Another issue I had to resolve involved the processing of the PDFs being
                                uploaded.</p>
                            <p>There were two points that were impacting user experience on the site: first was when
                                comics were being uploaded, creators were having to wait a long time if PDFs were being
                                supplied during the upload; second, if multiple creators were uploading at the same
                                time, the site would start to noticeably slow down.</p>
                            <p>By implementing a job queue, both of these issues could be resolved. Now, when creators
                                upload PDFs instead of having to wait for the file to be processed before continuing,
                                the file is added to a job queue. This queue is then regularly checked when the worker
                                is idle, and processes each file one by one. This also solved the slowdown that was
                                occurring by ensuring only one task was completed at a time.</p>
                            <p>To keep the creators up to date on the comic's progress, a special Queue component was
                                added to the store page, letting the creator know the progress of the upload in
                                realtime.</p>
                        </div>
                        <img src={"assets/case-study/job-queue.png"}
                             alt={"screenshot of the job queue in action"}/>
                    </section>
                </Card>
                <Card>
                    <section>
                        <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-['Orbitron'] dark:font-bold text-international-orange dark:text-hazard-yellow">
                            PROJECT ANALYSIS
                        </h1>
                        <div>
                            <p>This is easily the largest project I've worked on, and each step of the way my knowledge
                                has been built up. From database design and 3rd party integrations on the backend, to
                                testing and deployment, this project has let me gain experience on almost every aspect
                                of full-stack web development.</p>
                        </div>
                        <h2 className="py-2 text-xl">KEY TAKEAWAYS</h2>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-8 ">
                            <div className="flex items-start gap-3">
                                <CheckCircle2
                                    className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                <div>
                                    <div className="font-mono text-sm mb-1">
                                        Design for modularity and reusability
                                    </div>
                                    <div className="text-sm text-accent-background dark:text-accent-foreground">
                                        When it came to UI design, focussing on creating reusable components not only
                                        helps create a more consistent and visually appealing user experience, but also
                                        allows for a much faster workflow when developing new features.
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2
                                    className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                <div>
                                    <div className="font-mono text-sm mb-1">
                                        Design tests early and often
                                    </div>
                                    <div className="text-sm text-accent-background dark:text-accent-foreground">
                                        It can be easy to put off writing tests, but working on them in parallel with
                                        the
                                        development process can help catch bugs early and prevent issues and headaches
                                        later.
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2
                                    className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                <div>
                                    <div className="font-mono text-sm mb-1">
                                        Get to know the stakeholders
                                    </div>
                                    <div className="text-sm text-accent-background dark:text-accent-foreground">
                                        During the early phases of development, I only spoke to the clients about what
                                        they expected from the platform. This was mostly fine as they were creators who
                                        were planning to use the store themselves, but when it was opened up to more
                                        creators, it became clear that there were a lot of different needs and
                                        expectations from the platform.
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2
                                    className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                <div>
                                    <div className="font-mono text-sm mb-1">
                                        Set realistic goals and deadlines
                                    </div>
                                    <div className="text-sm text-accent-background dark:text-accent-foreground">
                                        Partly due to not working on a project of this scale before and partly due to
                                        wanting to impress clients, I was very optimistic when it came to the project
                                        timeline.
                                        Thankfully the clients were very supportive and I was able to work with them to
                                        adjust the timeline as work progressed. With more experience, I should be able
                                        to set more realistic goals and deadlines going forward.
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2
                                    className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                                <div>
                                    <div className="font-mono text-sm mb-1">
                                        Burnout and burnout resistance
                                    </div>
                                    <div className="text-sm text-accent-background dark:text-accent-foreground">
                                        Working on this project solo for over 12 continuous months has been mentally
                                        challenging at times, and going forward if I am to commit to a project of this
                                        scale, I will need to work with my clients to make room for breaks and holidays.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
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
                    <a
                        className={cn(
                            buttonVariants({variant: "primary"}),
                            "group"
                        )}
                        href={"https://wechange.me"}
                    >
                        VISIT SITE
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
            </main>
        </Page>
    );
};