import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffff',
      black: '#000000',
      lightgrey: '#444245',
      grey: 'rgba(0,0,0,0.55)',
      pink: '#df6751',
      bgpink: 'rgba(223, 103, 81, 0.15)',
      darkping: '#FEEDEA',
      lightbkack: '#333333',
      textbl: '#262626',
      footerlinks: 'rgba(54, 54, 54, 0.9)',
      bordertop: 'rgba(105, 120, 131, 0.16)',
      darkgrey: 'rgba(44, 9, 11, 0.8)'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fonsSize: {
      xs: ['0.75rem', {linearHeight: '1rem'}],
      sm: ['0.875rem', {linearHeight: '1.25rem'}],
      base: ['1rem', {linearHeight: '1.5rem'}],
      lg: ['1.125rem', {linearHeight: '1.75rem'}],
      xl: ['1.25rem', {linearHeight: '1.75rem'}],
      '2xl': ['1.5rem', {linearHeight: '2rem'}],
      '3xl': ['1.875rem', {linearHeight: '2.25rem'}],
      '4xl': ['2.25rem', {linearHeight: '2.5rem'}],
      '5xl': ['3rem', {linearHeight: '4.25rem'}],
      '6xl': ['3.75rem', {linearHeight: '1'}],
      '7xl': ['4.5rem', {linearHeight: '6.75rem'}],
      '8xl': ['6rem', {linearHeight: '1'}],
      '9xl': ['8rem', {linearHeight: '1'}],
    }
  },
  plugins: [],
};
export default config;
