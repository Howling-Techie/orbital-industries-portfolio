import {NavLink} from "react-router";
import type {Post} from "../../content/newsContent.ts";
import {NewsTag} from "./NewsTag.tsx";

interface PostCardProps {
    post: Post;
    darkMode: boolean;
    large?: boolean;
}

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export const FeaturedPostCard = ({post, darkMode, large}: PostCardProps) => {
    return (
        <NavLink to={`/news-example/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
            <article
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl ${
                    large ? "h-[500px]" : "h-[240px]"
                } ${
                    darkMode
                        ? "bg-neutral-800"
                        : "bg-white"
                }`}>
                {/* Image */}
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                        darkMode
                            ? "from-neutral-900 via-neutral-900/60 to-transparent"
                            : "from-black/80 via-black/40 to-transparent"
                    }`}/>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        <NewsTag postType={post.type}/>
                        {post.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                    darkMode
                                        ? "bg-neutral-800/80 text-neutral-300"
                                        : "bg-white/80 text-neutral-700"
                                }`}
                            >
              {tag}
            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-2 line-clamp-2 transition-colors text-white group-hover:text-neutral-300`}>
                        {post.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-neutral-200 text-sm mb-3 line-clamp-2">
                        {post.subtitle}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center gap-3 text-sm text-neutral-300">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                    </div>
                </div>
            </article>
        </NavLink>
    );
};

export const ArticleCard = ({post, darkMode}: PostCardProps) => {
    return (
        <NavLink to={`/news-example/${post.slug}`} onClick={() => window.scrollTo(0, 0)}
                 className={`group flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl outline ${
                     darkMode
                         ? "bg-neutral-800 hover:bg-neutral-750 outline-transparent"
                         : "bg-white outline-neutral-200"
                 }`}>
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <NewsTag postType={post.type}/>
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                darkMode
                                    ? "bg-neutral-700 text-neutral-300"
                                    : "bg-neutral-100 text-neutral-700"
                            }`}
                        >
              {tag}
            </span>
                    ))}
                </div>

                <div className="flex flex-col justify-between grow">
                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-3 line-clamp-2 transition-colors ${
                        darkMode ? "text-white group-hover:text-neutral-300" : "text-neutral-900 group-hover:text-neutral-600"
                    }`}>
                        {post.title}
                    </h3>

                    {/* Author & Date */}
                    <div className={`flex items-center gap-2 text-sm transition-colors ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export const ArticleListItem = ({post, darkMode}: PostCardProps) => {
    return (
        <NavLink to={`/news-example/${post.slug}`} onClick={() => window.scrollTo(0, 0)}
                 className={`group flex gap-4 p-4 rounded-xl transition-all duration-300 ${
                     darkMode
                         ? "bg-neutral-800 hover:bg-neutral-750"
                         : "bg-white hover:shadow-md border border-neutral-200"
                 }`}>
            {/* Image */}
            <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        <NewsTag postType={post.type}/>
                        <div className="hidden sm:flex md:hidden">
                            {post.tags.slice(0, 1).map((tag) => (
                                <span
                                    key={tag}
                                    className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                        darkMode
                                            ? "bg-neutral-700 text-neutral-300"
                                            : "bg-neutral-100 text-neutral-700"
                                    }`}
                                >
                {tag}
              </span>
                            ))}
                        </div>
                        <div className="hidden md:flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                        darkMode
                                            ? "bg-neutral-700 text-neutral-300"
                                            : "bg-neutral-100 text-neutral-700"
                                    }`}
                                >
                {tag}
              </span>
                            ))}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-base font-bold mb-1 line-clamp-2 transition-colors ${
                        darkMode ? "text-white group-hover:text-neutral-300" : "text-neutral-900 group-hover:text-neutral-600"
                    }`}>
                        {post.title}
                    </h3>
                    <p className="hidden md:block text-sm">{post.subtitle}</p>
                </div>

                {/* Author & Date */}
                <div className={`flex items-center gap-2 text-sm transition-colors ${
                    darkMode ? "text-neutral-400" : "text-neutral-600"
                }`}>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                </div>
            </div>
        </NavLink>
    );
};