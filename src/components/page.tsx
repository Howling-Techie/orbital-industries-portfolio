import {Heading} from "./ui/heading.tsx";
import React from "react";

export interface PageProps {
    title: string;
    id: string;
    subtitle?: string;
    description?: string;
    children: React.ReactNode;
}

export const Page = ({title, id, subtitle, description, children}: PageProps) => {
    return (
        <section
            className="min-w-screen min-h-screen z-10 relative">
            <div
                className="absolute bottom-0 left-0 w-full h-32 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.02)_20px,rgba(0,0,0,0.02)_40px)]"/>
            <section id={id}
                     className="py-16 pt-32 flex flex-col space-y-12 justify-center mx-auto px-6 container">
                <Heading title={title} subtitle={subtitle}/>
                <div className="max-w-4xl text-xl text-accent-background dark:text-accent-foreground leading-relaxed">
                    {description}
                </div>
                {children}
            </section>
        </section>
    );
};