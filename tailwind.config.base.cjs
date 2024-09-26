module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: {
                    '500': 'var(--primary-500)',
                    '600': 'var(--primary-600)',
                }
            },
        },
    },
    plugins: [],
    darkMode: 'class'
};
