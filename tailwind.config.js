/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home-background': "url('/src/assets/home-background.png')",
            }
        },
    },
    plugins: [],
}