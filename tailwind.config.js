/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0.8)" },
          "10%": { transform: "scale(0.9)" },
          "15%": { transform: "scale(0.8)" },
          "20%": { transform: "scale(1)" },
          "30%": { transform: "scale(0.8)" },
          "60%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      spacing: {
        auto: "auto",
        unset: "unset",
        none: "none",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        40: "40px",
        48: "48px",
        60: "60px",
        80: "80px",
        100: "100px",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
