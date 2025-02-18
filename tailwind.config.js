/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // All source files
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // App router pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // Components
    "./src/app/layout.tsx", // Root layout
    "./src/app/page.tsx"  // Root page
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Ensure Tailwind classes are generated
  safelist: [
    {
      pattern: /./, // This will include all classes
    },
  ],
} 