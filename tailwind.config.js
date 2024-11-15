const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px -8px 12px 0px rgba(0, 0, 0, 0.03)",
      },
      backgroundColor: {
        "custom-gray": "rgba(34, 34, 34, 0.37)",
      },
      colors: {
        "text-blue": "#3498DB"
      },
      keyframes: {
        expandModal: {
          'from': {
            transform: 'translateY(40)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        shrinkModal: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        }
      },
      animation: {
        expandModal: 'expandModal 0.5s ease-out forwards',
        shrinkModal: 'shrinkModal 0.5s ease-out forwards',
      }

    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

