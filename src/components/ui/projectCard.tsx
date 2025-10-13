import {AlertTriangle, ChevronRight} from "lucide-react";
import {TechnicalBadge} from "./technicalBadge.tsx";
import {cn} from "./utils.ts";
import {buttonVariants} from "./variants.ts";
import {ImageCarousel} from "./imageCarousel.tsx";
import {Card} from "./card.tsx";
import {Tag} from "./tag.tsx";
import {Title} from "./title.tsx";

export interface ProjectCardProps {
    title: string,
    label: string,
    description: string,
    tags: string[],
    link?: string,
    images: string[],
}

export const ProjectCard = ({title, description, label, tags, link, images}: ProjectCardProps) => {
    return (
        <Card fullHeight
              className="relative p-6 border-0 transition-all min-h-full flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:p-12"
        >
            <div className="flex flex-col text-background dark:text-foreground">
                <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-background dark:text-hazard-yellow"/>
                    <TechnicalBadge>{label}</TechnicalBadge>
                </div>
                <Title title={title}/>
                <div className="text-sm md:text-base">
                    {description}
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                    {tags.map((tag, index) => (
                        <Tag
                            key={index} text={tag}/>))}
                </div>
                {link && <a
                    href={link}
                    className={cn(
                        buttonVariants({variant: "secondary"}),
                        "h-10 inline-flex items-center justify-center"
                    )}
                >
                    VIEW ON GITHUB
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>}
            </div>
            <div className="hidden lg:block h-[500px]">
                <ImageCarousel images={images} height={500} swiping/>
            </div>
        </Card>
    );
};