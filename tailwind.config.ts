// @ts-ignore
import nativewind from "nativewind/preset";
import { hairlineWidth } from "nativewind/theme";
import tailwindConfigBase from './tailwind.config.base';

export default {
  corePlugin: {
    backgroundOpacity: true,
  },
  content: ["./packages/web/**/*.{js,jsx,ts,tsx}", './packages/native/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  presets: [nativewind, tailwindConfigBase],
} satisfies import("tailwindcss").Config;

