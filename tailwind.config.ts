// @ts-ignore
import nativewind from "nativewind/preset";
import { hairlineWidth } from "nativewind/theme";
// import colors from 'tailwindcss/colors';
import tailwindAnimation from 'tailwindcss-animate';

// //this will eventually not be needed, but for now, the colors object is including some deprecated colors that we need to wipeout
// // @ts-ignore
// delete colors['lightBlue'];
// // @ts-ignore
// delete colors['warmGray'];
// // @ts-ignore
// delete colors['trueGray'];
// // @ts-ignore
// delete colors['coolGray'];
// // @ts-ignore
// delete colors['blueGray'];

export default {
  corePlugin: {
    backgroundOpacity: true,
  },
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  presets: [nativewind],
  theme: {
    // ...colors,
    extend: {
      fontSize: {
         '3xs': 'text-[8px]',
         '2xs': 'text-[10px]',
      },
      boxShadow: {
          'xs' : '0px 3px 8px rgba(0, 0, 0, 0.045)',
      },
      colors: {
        border: {
          DEFAULT: "var(--border)",
          primary: "var(--border-primary)",
        },
        input: "var(--input)",
        ring: "var(--ring)",
        wrapper: {
          DEFAULT: "var(--wrapper)",
          primary: "var(--wrapper-primary)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        translucent: "var(--translucent)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          backfill: "var(--primary-backfill)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        banner: {
          purple: "var(--banner-purple)",
        },
        positive: {
          DEFAULT: "var(--positive-background)",
          foreground: "var(--positive-foreground)",
        },
        negative: {
          DEFAULT: "var(--negative-background)",
          foreground: "var(--negative-foreground)",
        },
        neutral: {
          DEFAULT: "var(--neutral-background)",
          foreground: "var(--neutral-foreground)",
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindAnimation,
  ],
} satisfies import("tailwindcss").Config;

