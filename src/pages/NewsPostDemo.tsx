import {useMemo, useContext} from "react";
import {useParams, Link} from "react-router";
import {posts} from "../content/newsContent.ts";
import ReactMarkdown from "react-markdown";
import {ArrowLeft, Calendar, User, Tag} from "lucide-react";
import {ArticleCard, formatDate} from "../components/newsDemo/NewsCards.tsx";
import {NewsTag} from "../components/newsDemo/NewsTag.tsx";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const NewsPostDemo = () => {
    const {slug} = useParams<{ slug: string }>();
    const {theme} = useContext(ThemeContext);
    const darkMode = theme === "dark";

    // Find the current post by slug
    const post = useMemo(
        () => posts.find((p) => p.slug === slug),
        [slug]
    );

    // Get three most recent posts of the same type (excluding current post)
    const relatedPosts = useMemo(() => {
        if (!post) return [];

        return posts
            .filter((p) => p.type === post.type && p.slug !== post.slug)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3);
    }, [post]);

    // If post not found
    if (!post) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${
                darkMode ? "dark bg-neutral-900" : "bg-neutral-50"
            }`}>
                <div className="text-center">
                    <h1 className={`text-4xl font-bold mb-4 ${
                        darkMode ? "text-white" : "text-neutral-900"
                    }`}>
                        Post Not Found
                    </h1>
                    <Link
                        to="/news-example"
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-600"
                    >
                        <ArrowLeft size={20}/>
                        Back to News
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            darkMode ? "dark bg-neutral-900" : "bg-neutral-50"
        }`}>
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode
                        ? "from-neutral-900 via-neutral-900/80 to-neutral-900/20"
                        : "from-black/80 via-black/60 to-black/20"
                }`}/>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <NewsTag postType={post.type}/>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white my-4">
                            {post.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-neutral-200 mb-6">
                            {post.subtitle}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-neutral-300">
                            <div className="flex items-center gap-2">
                                <User size={18}/>
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18}/>
                                <span>{formatDate(post.date)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm outline font-medium rounded-lg transition-colors ${
                                darkMode
                                    ? "bg-neutral-800 text-neutral-300 outline-transparent"
                                    : "bg-white text-neutral-700 outline-neutral-200"
                            }`}
                        >
              <Tag size={14}/>
                            {tag}
            </span>
                    ))}
                </div>

                {/* Article Content */}
                <div className={`prose prose-lg max-w-none transition-colors ${
                    darkMode
                        ? "prose-invert prose-headings:text-white prose-p:text-neutral-300 prose-strong:text-white prose-a:text-blue-400 prose-blockquote:text-neutral-400 prose-blockquote:border-neutral-700 prose-code:text-neutral-300 prose-code:bg-neutral-800 prose-pre:bg-neutral-800 prose-li:text-neutral-300"
                        : "prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-neutral-900 prose-a:text-blue-600 prose-blockquote:text-neutral-600 prose-blockquote:border-neutral-300 prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-li:text-neutral-700"
                }`}>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <section className={`border-t transition-colors ${
                    darkMode ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-white"
                }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h2 className={`text-3xl font-bold mb-8 transition-colors ${
                            darkMode ? "text-white" : "text-neutral-900"
                        }`}>
                            More {post.type} Posts
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <ArticleCard
                                    key={relatedPost.slug}
                                    post={relatedPost}
                                    darkMode={darkMode}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className={`border-t transition-colors ${
                darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className={`text-center text-sm transition-colors ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                        2025 - Orbital Industries
                    </p>
                </div>
            </footer>
        </div>
    );
};