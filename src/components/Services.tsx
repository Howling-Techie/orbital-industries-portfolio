import {Layers, Database, Smartphone, Zap, Cloud, Terminal, ChevronRight} from "lucide-react";
import {Card} from "./ui/card.tsx";
import {Page} from "./page.tsx";
import {Tag} from "./ui/tag.tsx";
import {NavLink} from "react-router";
import {buttonVariants} from "./ui/variants.ts";

const services = [
    {
        id: "FS_001",
        icon: Layers,
        title: "Full-Stack Development",
        description: "End-to-end desktop, mobile, and web applications built with modern frameworks and best practices.",
        status: "ACTIVE"
    },
    {
        id: "BE-002",
        icon: Database,
        title: "Backend Engineering",
        description: "Scalable server architectures, APIs, and database solutions for enterprise needs.",
        status: "ACTIVE"
    },
    {
        id: "FS-003",
        icon: Smartphone,
        title: "Frontend Development",
        description: "Pixel-perfect interfaces that adapt seamlessly across all devices and platforms.",
        status: "ACTIVE"
    },
    {
        id: "CI-004",
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Deployment and management on AWS, Azure, and Google Cloud platforms.",
        status: "ACTIVE"
    },
    {
        id: "PO-005",
        icon: Zap,
        title: "Performance Optimization",
        description: "Lightning-fast load times and optimal user experiences through advanced optimization.",
        status: "ACTIVE"
    },
    {
        id: "DO-006",
        icon: Terminal,
        title: "DevOps & CI/CD",
        description:
            "Automated testing, deployment, and monitoring for continuous delivery excellence.",
        status: "ACTIVE"
    }
];

export function Services() {
    return (
        <Page title={"SERVICE MODULES"} id={"services"} subtitle={"CORE_CAPABILITIES"}
              description={"Comprehensive full-stack solutions engineered for modern businesses. " +
                  "From concept to deployment, we handle every aspect of your digital infrastructure."}
        >
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card key={index} hover>
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="text-international-orange dark:text-hazard-yellow dark:group-hover/card:text-foreground group-hover/card:text-background">
                                    <service.icon
                                        className="h-8 w-8"/>
                                </div>
                                <Tag text={service.id}/>
                            </div>

                            <h3 className="text-xl mb-3 text-background dark:text-foreground uppercase">
                                {service.title}
                            </h3>
                            <p className="text-accent-background dark:text-accent-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex justify-end mb-18">
                <NavLink
                    to={"/portfolio-example"}
                    onClick={() => window.scrollTo(0, 0)}
                    className={
                        buttonVariants({variant: "secondary"})}
                >
                    EXAMPLE ARTIST PORTFOLIO
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </NavLink>
            </div>
        </Page>
    );
}
