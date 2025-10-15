import {BsPencil} from "react-icons/bs";
import {FaStar} from "react-icons/fa6";
import React, {useState} from "react";
import {RiContactsBookLine, RiGalleryLine} from "react-icons/ri";
import {AiOutlineControl} from "react-icons/ai";
import {Gallery, type GalleryImage} from "../components/portfolioDemo/Gallery.tsx";
import {AboutMe} from "../components/portfolioDemo/AboutMe.tsx";
import {SocialLinks} from "../components/portfolioDemo/SocialLinks.tsx";
import {ContactForm} from "../components/portfolioDemo/ContactForm.tsx";
import {NavLink} from "react-router";

const features: {
    title: string,
    description: string,
    icon: React.ReactNode,
    image: string,
    caption: string
}[] = [
    {
        title: "Gallery",
        description: "Present your work in a beautiful gallery, including a feature image and a caption.",
        icon: <RiGalleryLine className="text-cyan-400 text-2xl"/>,
        caption: "Photo by Matheus Viana: https://www.pexels.com/photo/woman-looking-at-paintings-2372979/",
        image: "assets/demo/gallery.jpg",
    },
    {
        title: "Contact Form",
        description: "Allow users to send you a message through a contact form for fast and easy communication.",
        icon: <RiContactsBookLine className="text-fuchsia-400 text-2xl"/>,
        caption: "Photo by Suzy Hazelwood: https://www.pexels.com/photo/shallow-focus-of-letter-paper-1157151/",
        image: "assets/demo/contact.jpg",
    },
    {
        title: "Content Management",
        description: "Easily manage content, including adding, editing, and deleting pieces or blog posts.",
        icon: <AiOutlineControl className="text-emerald-400 text-2xl"/>,
        caption: "Photo by Jakub Zerdzicki: https://www.pexels.com/photo/smartphone-and-laptop-creative-electronic-devices-17561470/",
        image: "assets/demo/cms.jpg",
    }
];

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "assets/demo/gallery.jpg",
        alt: "Art Gallery",
        tags: ["Photography", "Art"],
        title: "Art Gallery Exhibition",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
    {
        id: 2,
        src: "assets/demo/contact.jpg",
        alt: "Letter Writing",
        tags: ["Photography", "Design"],
        title: "Handwritten Letters",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
    {
        id: 3,
        src: "assets/demo/cms.jpg",
        alt: "Digital Workspace",
        tags: ["Technology", "Design"],
        title: "Modern Workspace",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
    {
        id: 4,
        src: "assets/demo/gallery.jpg",
        alt: "Gallery View",
        tags: ["Art", "Design"],
        title: "Contemporary Exhibition",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
    {
        id: 5,
        src: "assets/demo/contact.jpg",
        alt: "Stationery",
        tags: ["Photography"],
        title: "Vintage Stationery",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
    {
        id: 6,
        src: "assets/demo/cms.jpg",
        alt: "Tech Setup",
        tags: ["Technology"],
        title: "Digital Creation Station",
        description: "Here you can talk about your project. It could even support rich text or markdown."
    },
];

const galleryTags = ["Photography", "Art", "Design", "Technology"];

export const PortfolioDemo = () => {
    const [commsOpen, setCommsOpen] = useState(true);
    return (
        <main className="w-full min-h-screen text-neutral-900 font-sans bg-[#fef8f5] pt-20 relative">
            <div className="absolute inset-0 z-10 min-h-full">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b9d]/10 rounded-full blur-3xl"/>
                <div className="absolute top-100 right-20 w-40 h-40 bg-[#ffd93d]/20 rounded-full blur-3xl"/>
                <div
                    className="absolute top-40 right-40 w-24 h-24 bg-[#a8dadc]/20 rounded-full blur-2xl transition-none"/>
            </div>
            <div className="relative z-20">
                <section className="relative container mx-auto p-16 flex flex-col items-center justify-center">
                    <button onClick={() => setCommsOpen(!commsOpen)}
                            className={`${commsOpen ? "text-rose-500 bg-rose-100 hover:bg-rose-400 hover:text-white cursor-pointer" : "text-rose-700/50 bg-rose-300/20 cursor-not-allowed hover:text-rose-900/50 hover:bg-rose-500/20"} rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-300 ease-in-out`}>
                        <BsPencil/> Commissions Are {commsOpen ? "Open" : "Closed"}
                    </button>
                    <h1 className="text-5xl md:text-7xl py-8 bg-gradient-to-r from-rose-300 to-cyan-300 text-transparent bg-clip-text text-center">
                        Portfolio Example
                    </h1>
                    <p className="text-xl text-neutral-600 text-center">
                        This is an example of a basic portfolio we could build for you
                    </p>
                    <NavLink
                        to={"/"}
                        className={`
                            py-4 px-6 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-orange-400 to-orange-600
                            hover:from-orange-600 hover:to-orange-800
                            focus:ring-4 focus:ring-orange-300
                            transition-colors duration-300 mt-16 w-full max-w-3xl
                            flex items-center justify-center gap-2
                        `}
                    >
                        Back to Orbital Industries
                    </NavLink>
                </section>
                <section className="relative container mx-auto p-16 pt-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 text-4xl text-center">
                        <FaStar className="text-rose-400 text-2xl mt-2"/>
                        Potential Features
                        <FaStar className="text-rose-400 text-2xl mt-2"/>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-8 w-full">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-xl w-full group hover:-translate-y-2 transition-transform overflow-hidden">
                                <div className={"relative w-full h-64 overflow-clip"}>
                                    <img src={feature.image} alt={feature.title}
                                         className="w-full h-64 object-cover group-hover:scale-105 transition-transform delay-50"/>
                                </div>
                                <div className="p-6 pt-3 gap-4">
                                    <div className="flex flex-row items-center gap-2">
                                        {feature.icon}
                                        <h2 className="text-lg mb-2 pt-1.5">{feature.title}</h2>
                                    </div>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative container mx-auto p-16 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 text-4xl mb-8">
                        Gallery Example
                    </div>
                    <Gallery images={galleryImages} tags={galleryTags}/>
                </section>

                <section className="relative container mx-auto p-16 flex flex-col items-center justify-center">
                    <AboutMe/>
                </section>

                <section className="relative container mx-auto p-8 flex flex-col items-center justify-center">
                    <SocialLinks/>
                </section>

                <section className="relative container mx-auto p-8 flex flex-col items-center justify-center">
                    <ContactForm/>
                    <NavLink
                        to={"/"}
                        onClick={() => window.scrollTo({behavior: "smooth", top: 0})}
                        className={`
                            py-4 px-6 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-orange-400 to-orange-600
                            hover:from-orange-600 hover:to-orange-800
                            focus:ring-4 focus:ring-orange-300
                            transition-colors duration-300 mt-16 w-full max-w-3xl
                            flex items-center justify-center gap-2
                        `}
                    >
                        Back to Orbital Industries
                    </NavLink>
                </section>

                {/* Footer */}
                <footer
                    className="relative container mx-auto px-16 py-8 text-center text-neutral-500 border-t border-neutral-200">
                    <p>2025 Portfolio Demo. Built by Orbital Industries</p>
                </footer>
            </div>
        </main>
    );
};