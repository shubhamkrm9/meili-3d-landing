
import type { Config } from "tailwindcss";

const config: Config = {
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
                plum: {
                    900: '#2e0249',
                },
                void: '#0a0a0a'
            },
            fontFamily: {
                display: ['var(--font-inter)', 'sans-serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
