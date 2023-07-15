import { defineConfig } from "astro/config";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    integrations: [
        astroExpressiveCode({
            theme: "vitesse-dark",
            styleOverrides: {
                codeFontSize: 'calc( var(--xs) - 0.2rem )',
            },
            frames: {
                styleOverrides: {
                    tooltipSuccessBackground: 'var(--highlight-color)',
                    tooltipSuccessForeground: 'var(--bg-color)'
                }
            },
            plugins: [{
                name: 'my-custom-css',
                baseStyles: `
                    margin-bottom: 2rem;
                `,
                hooks: []
            }]
        }),
    ],
});
