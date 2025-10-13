import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// @ts-expect-error - Fontsource is not typed
import "@fontsource-variable/space-grotesk";
// @ts-expect-error - Fontsource is not typed
import "@fontsource-variable/orbitron";
// @ts-expect-error - Fontsource is not typed
import "@fontsource/share-tech-mono";
// @ts-expect-error - Fontsource is not typed
import "@fontsource/rajdhani";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
