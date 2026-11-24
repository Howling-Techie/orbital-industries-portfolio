import {useState, useMemo, useContext} from "react";
import {posts, type Post} from "../content/newsContent.ts";
import {ArticleCard, ArticleListItem, FeaturedPostCard} from "../components/newsDemo/NewsCards.tsx";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const NewsDemo = () => {
    const {theme} = useContext(ThemeContext);
    const darkMode = theme === "dark";
    const [filterType, setFilterType] = useState<Post["type"] | "All">("All");

    // Sort posts by date (newest first)
    const sortedPosts = useMemo(
        () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        []
    );

    // Get featured posts
    const featuredPosts = useMemo(
        () => sortedPosts.filter((post) => post.featured),
        [sortedPosts]
    );

    // Get filtered articles
    const articles = useMemo(() => {
        return filterType === "All"
            ? sortedPosts
            : sortedPosts.filter((post) => post.type === filterType);
    }, [sortedPosts, filterType]);

    // Split articles into grid (first 6) and list (remaining)
    const gridArticles = articles.slice(0, 6);
    const listArticles = articles.slice(6);

    // Get unique post types for filter buttons
    const postTypes: Array<Post["type"] | "All"> = ["All", "News", "Review", "Podcast", "Editorial"];

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-neutral-900" : "bg-neutral-50"}`}>


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Posts Section */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 transition-colors ${
                        darkMode ? "text-white" : "text-neutral-900"
                    }`}>
                        Featured
                    </h2>

                    {featuredPosts.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Featured Post */}
                            <div className="lg:col-span-2">
                                <FeaturedPostCard post={featuredPosts[0]} darkMode={darkMode} large/>
                            </div>

                            {/* Side Featured Posts */}
                            <div className="flex flex-col gap-6">
                                {featuredPosts.slice(1, 3).map((post) => (
                                    <FeaturedPostCard
                                        key={post.slug}
                                        post={post}
                                        darkMode={darkMode}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {postTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all outline ${
                                filterType === type
                                    ? darkMode
                                        ? "bg-white text-neutral-900"
                                        : "bg-neutral-900 text-white"
                                    : darkMode
                                        ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 outline-transparent"
                                        : "bg-white text-neutral-700 hover:bg-neutral-100 outline-neutral-200"
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Articles Grid Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gridArticles.map((post) => (
                            <ArticleCard
                                key={post.slug}
                                post={post}
                                darkMode={darkMode}
                            />
                        ))}
                    </div>
                </section>

                {/* Articles List Section */}
                {listArticles.length > 0 && (
                    <section>
                        <h2 className={`text-2xl font-bold mb-6 transition-colors ${
                            darkMode ? "text-white" : "text-neutral-900"
                        }`}>
                            More Articles
                        </h2>
                        <div className="space-y-4">
                            {listArticles.map((post) => (
                                <ArticleListItem
                                    key={post.slug}
                                    post={post}
                                    darkMode={darkMode}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className={`border-t mt-20 transition-colors ${
                darkMode ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-200"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className={`text-center text-sm transition-colors ${
                        darkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}>
                        2025 Orbital Industries
                    </p>
                </div>
            </footer>
        </div>
    );
};
