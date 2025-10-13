import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {Inline, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import {useState} from "react";
import {cn} from "./utils.ts";
import {buttonVariants} from "./variants.ts";

export const ImageCarousel = ({images, height, compact = false, swiping = false}: {
    images: string[],
    height: number,
    compact?: boolean,
    swiping?: boolean,
}) => {
    const [slide, setSlide] = useState(-1);
    const [index, setIndex] = useState(0);
    if (compact) {
        return (
            <div>
                <button
                    onClick={() => setSlide(0)}
                    className={cn(
                        buttonVariants({variant: "secondary"}),
                        "h-10 inline-flex items-center justify-center w-full"
                    )}
                >
                    VIEW IMAGES
                </button>
                <Lightbox
                    controller={{disableSwipeNavigation: !swiping}}
                    open={slide >= 0}
                    close={() => setSlide(-1)}
                    index={index}
                    plugins={[Zoom]}
                    slides={images.map(i => ({src: i}))}
                />
            </div>
        );
    }
    return (
        <div
            className={`border-1 border-accent-background dark:border-hazard-yellow/20 rounded-sm max-w-full`}
            style={{height: `${height}px`}}>
            <Lightbox
                plugins={[Thumbnails, Inline]}
                controller={{disableSwipeNavigation: !swiping}}
                thumbnails={{position: "bottom", vignette: false}}
                inline={{
                    style: {
                        width: "100%",
                        height: "100%",
                    },
                }}
                index={index}
                styles={{
                    container: {backgroundColor: "transparent"},
                    thumbnailsContainer: {backgroundColor: "transparent"},
                    thumbnail: {backgroundColor: "transparent", borderColor: "black"},
                    slide: {padding: "20px"},
                }}
                carousel={{imageFit: "contain"}}
                on={{
                    click: ({index}) => {
                        setSlide(index);
                    },
                    view: ({index: currentIndex}) => setIndex(currentIndex)
                }}
                slides={images.map(i => ({src: i}))}
            />
            <Lightbox
                controller={{disableSwipeNavigation: !swiping}}
                open={slide >= 0}
                close={() => setSlide(-1)}
                index={index}
                plugins={[Zoom]}
                slides={images.map(i => ({src: i}))}
                on={{
                    view: ({index: currentIndex}) => setIndex(currentIndex)
                }}
            />
        </div>
    );
};