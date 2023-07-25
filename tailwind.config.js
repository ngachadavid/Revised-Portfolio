// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Montserrat', 'sans-serif'],
//       },
//     },
//   },
//   corePlugins: {
//     aspectRatio: false,
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/aspect-ratio'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primaryColor: "#8873ef",
          headingColor: "#081e21",
          smallTextColor: "#193256",
        },
      },
    },
    plugins: [],
  };
  