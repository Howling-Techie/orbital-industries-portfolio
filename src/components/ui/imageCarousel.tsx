import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {Inline, Thumbnails} from "yet-another-react-lightbox/plugins";
import {useState} from "react";

export const ImageCarousel = ({images, height}: { images: string[], height: number }) => {
    const [slide, setSlide] = useState(-1);
    const [index, setIndex] = useState(0);
    return (
        <div
            className={`border-1 border-accent-background dark:border-hazard-yellow/20 rounded-sm max-w-full`}
            style={{height: `${height}px`}}>
            <Lightbox
                plugins={[Thumbnails, Inline]}
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
                open={slide >= 0}
                close={() => setSlide(-1)}
                index={index}
                slides={images.map(i => ({src: i}))}
                on={{
                    view: ({index: currentIndex}) => setIndex(currentIndex)
                }}
            />
        </div>
    );
};