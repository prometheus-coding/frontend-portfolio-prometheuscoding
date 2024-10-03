import fluid, { extract } from "fluid-tailwind";

module.exports = {
    content: {
        files: [
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        extract,
    },
    theme: {
        screens: {
            xs: "20rem", // Extra small (320px)
            s: "30rem",  // Small (480px)
            md: "48rem", // Medium (768px)
            lg: "64rem", // Large (1024px)
            xlg: "80rem", // Extra large (1280px)
            xxlg: "96rem", // Double extra large (1536px)
        },
        extend: {
            fontFamily: {
                helvetica: ["Helvetica", "sans-serif"],
                helveticaOblique: ["HelveticaOblique", "sans-serif"],
                helveticaCompressed: ["HelveticaCompressed", "sans-serif"],
                helveticaBold: ["HelveticaBold", "sans-serif"], // You already used the "Helvetica" name, so it will reuse this for bold
                helveticaBoldOblique: ["BoldOblique", "sans-serif"],
                helveticaLight: ["HelveticaLight", "sans-serif"],
                helveticaLightOblique: ["HelveticaLightOblique", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    200: "var(--notte-200)",
                },
            },
        },
    },
    plugins: [fluid],
    // darkMode: "selector",
};

