module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                valentino: ['Valentino', "sans-serif"],
                valentinoItalic: ['ValentinoItalic', "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: {
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    200: "var(--primary-200)"
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
