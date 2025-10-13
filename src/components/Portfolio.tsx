import {ProjectCard, type ProjectCardProps} from "./ui/projectCard.tsx";
import {Page} from "./page.tsx";
import {Card} from "./ui/card.tsx";
import Lightbox from "yet-another-react-lightbox";
import {Inline} from "yet-another-react-lightbox/plugins";

interface ProjectSlide {
    type: "project-slide";
    slide: ProjectCardProps;
}

const projects: ProjectSlide[] = [
    {
        type: "project-slide",
        slide: {
            title: "Eventful",
            description: "An events management platform where users could create and manage groups and events, including privacy and payment options. The site also featured Google Calendar integration, allowing users to manage invites, requests, and more. This project was created with a strict 4 week time limit, which was an excellent opportunity to plan, design, and develop a site from start to finish under a tight deadline.",
            tags: ["React", "Express", "Stripe", "Google API", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/eventful/01.png", "assets/eventful/02.png", "assets/eventful/03.png", "assets/eventful/04.png"],
            link: "https://github.com/Howling-Techie/events-platform-fe",
            label: "EXAMINE PROJECT / EVENT PLANNING"
        }
    },
    {
        type: "project-slide",
        slide: {
            title: "Materialize",
            description: "Materialize is a site dedicated to helping Discord Servers organise movie nights. Users can log in via Discord, register their server, and create movie nights. Other members of the server can then log in, submit movies that they'd like to watch on the night, and then finally cast their votes in a ranked ordering system to select what film they'd like to see.",
            tags: ["React", "Express", "Discord Auth", "TMDB API", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/materialize/01.png", "assets/materialize/02.png", "assets/materialize/03.png"],
            label: "EXAMINE PROJECT / ENTERTAINMENT ORGANISATION"
        }
    },
    {
        type: "project-slide",
        slide: {
            title: "InventorEEE",
            description: "InventorEEE was a management platform for a company that specialises in handling e-waste. They needed a service that would allow them to manage clients and their e-waste collection requests, assigning dates and drivers to the created collections. Once the orders have arrived at the facility, their progress could be tracked by applying the generated barcodes to each item which could be used to quickly look up the item and update its status, including the options to rename items, add notes, and upload data destruction certificates.",
            tags: ["React", "Express", "Tailwind CSS", "PostgreSQL"],
            images: ["assets/inventoreee/01.png", "assets/inventoreee/02.png", "assets/inventoreee/03.png"],
            label: "EXAMINE PROJECT / PRODUCT MANAGEMENT"
        }
    },
];

function RenderProjectSlide({slide}: { slide: ProjectSlide }) {
    return (
        <ProjectCard images={slide.slide.images} title={slide.slide.title} description={slide.slide.description}
                     tags={slide.slide.tags} link={slide.slide.link} label={slide.slide.label} key={slide.slide.label}/>
    );
}

export function Portfolio() {
    return (
        <Page title={"ADDITIONAL PROJECTS"} id={"projects"} subtitle={"RECENT_DEPLOYMENTS"}
        >
            <Card>
                <div
                    className="h-[700px] max-w-full">
                    <Lightbox
                        plugins={[Inline]}
                        inline={{
                            style: {
                                width: "100%",
                                height: "100%",
                            },
                        }}
                        controller={{disableSwipeNavigation: true}}
                        styles={{
                            container: {backgroundColor: "transparent"},
                            slide: {padding: 0, height: "100%"},
                        }}
                        // @ts-expect-error incorrectly reports type error
                        slides={projects}
                        render={{
                            slide: ({slide}) =>
                                // @ts-expect-error incorrectly reports type error
                                slide.type === "project-slide" ? (
                                    <RenderProjectSlide slide={slide}/>
                                ) : undefined,
                        }}
                    />
                </div>
            </Card>
        </Page>
    );
}