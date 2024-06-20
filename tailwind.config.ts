import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        ImgRegister:
          "url(https://img.freepik.com/photos-gratuite/piece-or-lettre-b-dessus_1340-34158.jpg?t=st=1717769960~exp=1717773560~hmac=452104b703d169770653cdb8c4ee1cdbefdab20e68c1042f8d38423ed2288e0c&w=740)",
        ImgMain:
          "url(https://images.unsplash.com/photo-1609554496796-c345a5335ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      },
    },
  },
  plugins: [],
};
export default config;
