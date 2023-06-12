import { CardType } from "../types/CardType";


export function shuffle(): CardType[] {
    const assets = [
        // { image: "/assets/browserstack.png" },
        { image: "/assets/css.png" },
        // { image: "/assets/github.png" },
        // { image: "/assets/html5.png" },
        // { image: "/assets/js.png" },
        // { image: "/assets/node.png" },
        // { image: "/assets/playwright.png" },
        // { image: "/assets/react.png" },
        // { image: "/assets/selenium.png" },
        // { image: "/assets/ts.png" },
    ];
    return [...assets, ...assets].sort(() => Math.random() - 0.5)
        .map((asset) => ({ ...asset, id: Math.random(), matched: false }));
};