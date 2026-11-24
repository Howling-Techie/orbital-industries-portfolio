export interface Post {
    title: string;
    subtitle: string;
    date: string; // ISO datetime string
    image: string;
    author: string;
    featured: boolean;
    tags: string[];
    type: "News" | "Review" | "Podcast" | "Editorial";
    slug: string;
    content: string; // Markdown content
}

export const posts: Post[] = [
    {
        title: "Elden Ring: Shadow of the Erdtree First Impressions",
        subtitle: "A harrowing first step into the Land of Shadow",
        date: "2025-06-21T12:00:00Z",
        image: "/assets/news/1.jpg",
        author: "Jane Doe",
        featured: true,
        tags: ["Elden Ring", "FromSoftware", "Action RPG"],
        type: "Review",
        slug: "elden-ring-shadow-of-the-erdtree-first-impressions",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Indie Gem 'Stray Gods' Gets a Surprise Update",
        subtitle: "New songs and stories are coming to the roleplaying musical!",
        date: "2025-07-18T15:30:00Z",
        image: "/assets/news/2.jpg",
        author: "Mark Absent",
        featured: false,
        tags: ["Stray Gods", "Indie", "RPG"],
        type: "News",
        slug: "stray-gods-surprise-update",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Podcast Ep. 42: The Future of Cloud Gaming",
        subtitle: "Is streaming the final frontier for video games?",
        date: "2025-07-20T18:00:00Z",
        image: "/assets/news/3.jpg",
        author: "Orbital News Team",
        featured: false,
        tags: ["Cloud Gaming", "Stadia", "GeForce Now", "Xbox Cloud Gaming"],
        type: "Podcast",
        slug: "podcast-ep-42-the-future-of-cloud-gaming",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Why 'Hades II' is a Masterclass in Early Access",
        subtitle: "Supergiant Games is setting a new standard for game development.",
        date: "2025-07-22T10:00:00Z",
        image: "/assets/news/4.jpg",
        author: "Laura Palmer",
        featured: true,
        tags: ["Hades II", "Supergiant Games", "Early Access", "Roguelike"],
        type: "Editorial",
        slug: "hades-ii-masterclass-in-early-access",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Cyberpunk 2077's Redemption Arc is Complete",
        subtitle: "From rocky launch to critical acclaim, a look back at the journey.",
        date: "2025-07-15T09:00:00Z",
        image: "/assets/news/5.jpg",
        author: "Mark Absent",
        featured: false,
        tags: ["Cyberpunk 2077", "CD Projekt Red", "RPG",],
        type: "Editorial",
        slug: "cyberpunk-2077-redemption-arc",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Baldur's Gate 3 Sweeps Game of the Year Awards",
        subtitle: "Larian Studios' masterpiece continues its reign of dominance.",
        date: "2025-03-22T20:00:00Z",
        image: "/assets/news/6.jpg",
        author: "Ryan Elbertson",
        featured: false,
        tags: ["Baldur's Gate 3", "Larian Studios", "RPG", "Game of the Year"],
        type: "News",
        slug: "baldurs-gate-3-sweeps-goty-awards",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Final Fantasy VII Rebirth Review: A Bold and Beautiful Sequel",
        subtitle: "Expanding on the original in every way imaginable.",
        date: "2025-02-29T14:00:00Z",
        image: "/assets/news/7.jpg",
        author: "Jane Doe",
        featured: true,
        tags: ["Final Fantasy VII Rebirth", "Square Enix", "JRPG", "PS5"],
        type: "Review",
        slug: "final-fantasy-vii-rebirth-review",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Helldivers 2: The Unlikely Hero of 2024",
        subtitle: "How a co-op shooter took the world by storm.",
        date: "2024-05-10T11:00:00Z",
        image: "/assets/news/8.jpg",
        author: "Orbital News Team",
        featured: false,
        tags: ["Helldivers 2", "Arrowhead Game Studios", "Co-op", "Shooter"],
        type: "Editorial",
        slug: "helldivers-2-unlikely-hero-2024",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "The Legend of Zelda: Tears of the Kingdom - One Year Later",
        subtitle: "Reflecting on the game that redefined open-world design.",
        date: "2025-05-12T16:00:00Z",
        image: "/assets/news/9.jpg",
        author: "Ryan Elbertson",
        featured: false,
        tags: ["Zelda", "Nintendo", "Open World", "Retrospective"],
        type: "Editorial",
        slug: "zelda-tears-of-the-kingdom-one-year-later",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Animal Crossing: New Horizons Celebrates its Fourth Anniversary",
        subtitle: "A look back at the game that got us through the pandemic.",
        date: "2025-03-20T13:00:00Z",
        image: "/assets/news/10.jpg",
        author: "Laura Palmer",
        featured: false,
        tags: ["Animal Crossing", "Nintendo", "Life Sim"],
        type: "News",
        slug: "animal-crossing-new-horizons-fourth-anniversary",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Podcast Ep. 43: The Rise of 'Cozy' Games",
        subtitle: "Why are we all obsessed with farming, crafting, and decorating?",
        date: "2025-07-27T18:00:00Z",
        image: "/assets/news/11.jpg",
        author: "Mark Absent",
        featured: false,
        tags: ["Cozy Games", "Stardew Valley", "Animal Crossing", "Life Sim"],
        type: "Podcast",
        slug: "podcast-ep-43-the-rise-of-cozy-games",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    },
    {
        title: "Starfield Expansion Details Leaked",
        subtitle: "A new datamine reveals potential story and gameplay features.",
        date: "2025-07-25T09:00:00Z",
        image: "/assets/news/12.jpg",
        author: "Ryan Elbertson",
        featured: true,
        tags: ["Starfield", "Bethesda", "RPG", "Leak"],
        type: "News",
        slug: "starfield-shattered-space-leak",
        content: `
## This is to demonstrate markdown rendering in practice

These can either be stored as **Markdown** files on the server, or served via an API or database.

### Headers can be used to create sections

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt nisl nisl nec nisl.

![Images can be embedded too](/assets/news/2.jpg)

> A relevant quote can be included as well

All in all it's a pretty flexible format, and it's easy to use. It's also easy to add custom components to the site.

### Lists can be used to create ordered and unordered lists

*   Item 1
*   Item 2
*   Item 3
`
    }
];