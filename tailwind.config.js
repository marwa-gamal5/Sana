/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/lib/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Poppins: ['Poppins'],
        Montserrat:['Montserrat']
      },
      screens: {
        'tablet': '1100px',
        // => @media (min-width: 900px) { ... }
        'tablet2': '850px',
        'laptop': '1300px',
        // => @media (min-width: 1250px) { ... }

        // 'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

     
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
