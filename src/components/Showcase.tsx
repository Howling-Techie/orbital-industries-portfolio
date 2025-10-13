import {
    AlertTriangle,
    CheckCircle2,
    ChevronRight
} from "lucide-react";
import {Card} from "./ui/card.tsx";
import {Page} from "./page.tsx";
import {TechnicalBadge} from "./ui/technicalBadge.tsx";
import {buttonVariants} from "./ui/variants.ts";
import {ImageCarousel} from "./ui/imageCarousel.tsx";
import {Tag} from "./ui/tag.tsx";
import {NavLink} from "react-router";

const techStack = ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma", "Passport.js", "Swagger", "Storybook", "Jest"];

export function Showcase() {
    return (
        <Page title={"FEATURED PROJECT"} id={"projects"} subtitle={"PRIORITY_DEPLOYMENT"}
        >
            {/* Services Grid */}
            <Card
                className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:p-12"
            >
                <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-background dark:text-hazard-yellow"/>
                        <TechnicalBadge>CASE STUDY LOADED / DIGITAL COMICS PLATFORM</TechnicalBadge>
                    </div>
                    <h1 className="text-4xl lg:text-5xl uppercase my-4 dark:font-orbitron dark:font-bold text-international-orange dark:text-hazard-yellow">
                        WELCOME CHANGE
                    </h1>
                    <div
                        className="max-w-4xl text-lg text-accent-background dark:text-accent-foreground leading-relaxed mb-6">
                        This project is a full-stack website designed for independent comic creators. It serves as a
                        dedicated e-commerce platform where artists can create storefronts to
                        sell their digital comics directly to fans. For customers, it provides a seamless purchasing
                        experience with a digital library where they can read their comics online or download them for
                        offline access.
                    </div>
                    <div className="space-y-4 mb-8 ">
                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                            <div>
                                <div className="font-mono text-sm mb-1">
                                    Digital Product Management
                                </div>
                                <div className="text-sm text-accent-background dark:text-accent-foreground">
                                    An intuitive dashboard allows creators to upload their comics as either images or
                                    PDFs,
                                    set prices, and manage their listings using a rich Markdown editor for detailed
                                    descriptions.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                            <div>
                                <div className="font-mono text-sm mb-1">
                                    Seamless E-commerce Flow
                                </div>
                                <div className="text-sm text-accent-background dark:text-accent-foreground">
                                    Customers can browse and follow creators, add comics to their cart, and complete
                                    purchases using a secure payment gateway.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2
                                className="w-5 h-5 text-international-orange dark:text-hazard-yellow mt-1 flex-shrink-0"/>
                            <div>
                                <div className="font-mono text-sm mb-1">
                                    Personal Digital Library
                                </div>
                                <div className="text-sm text-accent-background dark:text-accent-foreground">
                                    Upon purchase, comics are instantly added to the customer's personal library, where
                                    they can either use the built-in reader or download them for offline reading.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {techStack.map((tech, index) => (
                            <Tag text={tech} key={index}/>
                        ))}
                    </div>
                    <NavLink
                        to={"/case-study"}
                        onClick={() => window.scrollTo(0, 0)}
                        className={
                            buttonVariants({variant: "secondary"})}
                    >
                        VIEW FULL CASE STUDY
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </NavLink>
                </div>
                <ImageCarousel images={[
                    "assets/showcase/homepage.png",
                    "assets/showcase/comic.png",
                    "assets/showcase/artist.png",
                    "assets/showcase/profile.png",
                    "assets/showcase/comicUpload.png",
                ]}
                               height={850}/>
            </Card>
        </Page>
    );
}
