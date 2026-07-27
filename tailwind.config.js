import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6F1",
          50: "#FFFFFF",
          100: "#FDFBF8",
          200: "#FAF6F1",
          300: "#F2E8DB",
          400: "#E6D6BF",
        },
        taupe: {
          DEFAULT: "#5C5752",
          50: "#F6F5F4",
          100: "#E9E6E3",
          200: "#CFC8C2",
          300: "#AFA69E",
          400: "#8C837B",
          500: "#5C5752",
          600: "#4A4642",
          700: "#383532",
          800: "#262422",
          900: "#141312",
        },
        blush: {
          DEFAULT: "#F3E3DC",
          100: "#FBF2EE",
          200: "#F3E3DC",
          300: "#E9C8BC",
          400: "#DFA595",
          500: "#D3897A",
        },
        olive: {
          DEFAULT: "#9A8360",
          50: "#F6F3EE",
          100: "#EBE0CE",
          200: "#D5C29C",
          300: "#BFA579",
          400: "#AC9269",
          500: "#9A8360",
          600: "#7D6A4C",
          700: "#61513B",
          800: "#453929",
          900: "#2A2218",
        },
        terracotta: {
          DEFAULT: "#B15F35",
          50: "#FBF1EC",
          100: "#F5DED2",
          200: "#E7B8A0",
          300: "#D6906D",
          400: "#C67447",
          500: "#EF8486",
          600: "#EF8486",
          700: "#CB7072",
          800: "#522B18",
          900: "#331A0F",
        },
      },
      fontFamily: {
        display: ['"Frank Ruhl Libre"', "ui-serif", "Georgia", "serif"],
        sans: ["Rubik", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(92, 87, 82, 0.14)",
      },
      typography: ({ theme }) => ({
        taupe: {
          css: {
            "--tw-prose-body": theme("colors.taupe[500]"),
            "--tw-prose-headings": theme("colors.taupe[600]"),
            "--tw-prose-lead": theme("colors.taupe[500]"),
            "--tw-prose-links": theme("colors.terracotta[600]"),
            "--tw-prose-bold": theme("colors.taupe[700]"),
            "--tw-prose-counters": theme("colors.terracotta[500]"),
            "--tw-prose-bullets": theme("colors.terracotta[300]"),
            "--tw-prose-hr": theme("colors.taupe[200]"),
            "--tw-prose-quotes": theme("colors.taupe[600]"),
            "--tw-prose-quote-borders": theme("colors.terracotta[200]"),
            "--tw-prose-th-borders": theme("colors.taupe[200]"),
            "--tw-prose-td-borders": theme("colors.taupe[100]"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
