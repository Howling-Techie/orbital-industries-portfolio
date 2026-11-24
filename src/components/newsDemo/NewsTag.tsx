import type {Post} from "../../content/newsContent.ts";


const getTypeColor = (type: Post["type"]) => {
    const colors = {
        News: "bg-blue-800 text-blue-100 border-blue-500/20",
        Review: "bg-purple-800 text-purple-100 border-purple-500/20",
        Podcast: "bg-green-800 text-green-100 border-green-500/20",
        Editorial: "bg-orange-800 text-orange-100 border-orange-500/20",
    };
    return colors[type];
};

export const NewsTag = ({postType}: { postType: "News" | "Review" | "Podcast" | "Editorial" }) => {
    return (
        <span className={`px-2 py-1 text-xs font-medium rounded border ${getTypeColor(postType)}`}>
            {postType}
          </span>
    );
};