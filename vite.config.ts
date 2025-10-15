import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {chunkSplitPlugin} from "vite-plugin-chunk-split";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        chunkSplitPlugin({strategy: "unbundle"})
    ],
    base: "/orbital-industries-portfolio/",
});
