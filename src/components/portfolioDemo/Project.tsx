import React from "react";

interface ProjectProps {
    title: string;
    subtitle: string;
    description: string;
    mainImage: string;
    tags: string[];
    image1: string;
}

export const Project: React.FC<ProjectProps> = ({
                                                    title,
                                                    subtitle,
                                                    description,
                                                    mainImage,
                                                    tags,
                                                    image1,
                                                }) => {
    return (
        <div className="w-full bg-[#fef8f5]">
            {/* Hero Image Section */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src={mainImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fef8f5] via-[#fef8f5]/40 to-transparent"/>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent h-12"/>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-8 md:px-16 -mt-32 relative z-10 flex flex-col lg:flex-row gap-6">
                {/* Project Info Card */}
                <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-4xl">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-neutral-700 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm uppercase tracking-wider text-cyan-500 mb-3">
                        {subtitle}
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 text-transparent bg-clip-text pb-6">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Additional Images Section */}
                <div className="group relative overflow-hidden rounded-xl shadow-xl hidden lg:block">
                    <img
                        src={image1}
                        alt={`${title} detail 1`}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};