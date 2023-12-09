import type { Config } from "tailwindcss";

const config: Config = {
  assetPrefix: '.',
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "480px",
      x: "540px",
      m: "768px",
      l: "1024px",
    },
    extend: {
      fontFamily: {
        nexon: 'var(--font-nexon)',
        pretend: 'var(--font-pretend)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
          },
          to: {
            opacity: "3",
            transform: "none",
          },
        },
        lineBar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        buttonShow: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10px)" },
          "40%": { transform: "translateY(0)" },
          "70%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        imageUp: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        imageDown: {
          "0%,100%": { transform: "translateY(-20px) translateX(0px) rotate(135deg)" },
          "50%": { transform: "translateY(0px) translateX(20px) rotate(135deg)" },
        },
        barUp: {
          "0%": { opacity: ".3" },
          "50%": { opacity: "1" },
          "100%": { opacity: ".3" },
        },
        mobileNavbar: {
          "0%": { transform: "translatex(300px)" },
          "100%": { transform: "translatex(0px)" },
        },
        mobileNavbarReverse: {
          "0%": { transform: "translatex(-300px)" },
          "100%": { transform: "translatex(0px)" },
        }
      },
      animation: {
        mobileNavbarReverse: "mobileNavbarReverse .3s ease",
        mobileNavbar: "mobileNavbar .3s ease",
        textShow: "textShow .5s ease",
        buttonShow: "buttonShow 2s ease",
        imageUp: "imageUp 2s ease infinite",
        imageDown: "imageDown .5s ease",
        barUp: "barUp .5s ease",
        // fadeIn: "fadeIn .5s ease"
      },
    },
  },
  plugins: [
    
  ],
  darkMode: "class",
};
export default config;
