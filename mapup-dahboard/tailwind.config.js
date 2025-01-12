/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./src/components/**/*.{html,js,jsx,ts,tsx}",
  "./src/pages/**/*.{html,js,jsx,ts,tsx}",
];

export const theme = {
  darkMode: 'class',
  extend: {
    colors: {
      border: '#000',
      'bg-background': '#fff', // Correctly define a color for `bg-background`.
    },
  },
};

export const plugins = [];
