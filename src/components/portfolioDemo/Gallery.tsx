import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {X} from "lucide-react";

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    tags: string[];
    title: string;
    description: string;
}

export interface GalleryProps {
    images: GalleryImage[];
    tags: string[];
}

export const Gallery = ({images, tags}: GalleryProps) => {
    const [selectedTag, setSelectedTag] = useState<string>("all");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = selectedTag === "all"
        ? images
        : images.filter(img => img.tags.includes(selectedTag));

    return (
        <div className="w-full">
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <button
                    onClick={() => setSelectedTag("all")}
                    className={`px-4 py-2 rounded-full transition-all ${
                        selectedTag === "all"
                            ? "bg-rose-500 text-white shadow-lg"
                            : "bg-white text-neutral-700 hover:bg-rose-100"
                    }`}
                >
                    All
                </button>
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 rounded-full transition-all ${
                            selectedTag === tag
                                ? "bg-rose-500 text-white shadow-lg"
                                : "bg-white text-neutral-700 hover:bg-rose-100"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {filteredImages.map((image) => (
                    <motion.div
                        key={image.id}
                        layout
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.4}}
                        onClick={() => setSelectedImage(image)}
                        whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-neutral-800">
                                {image.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{type: "spring", duration: 0.5}}
                            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
                        >
                            <div
                                className="bg-white rounded-2xl shadow-2xl w-full h-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                                >
                                    <X className="w-6 h-6 text-neutral-800"/>
                                </button>
                                <div
                                    className="grow lg:max-w-1/2 2xl:max-w-2/3 max-h-96 h-fit lg:max-h-full lg:h-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        className="min-h-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-col shrink p-6 lg:p-8 overflow-y-auto">
                                    <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                                        {selectedImage.title}
                                    </h2>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedImage.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-600 text-lg leading-relaxed">
                                        {selectedImage.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};