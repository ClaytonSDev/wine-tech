import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wine-tech/", // 👈 necessário para GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
  },
});
