// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Amazon-Clone-584/",
  plugins: [react()],
  server: {
    port: 3000, // You can set the port for the dev server here
  },
  build: {
    outDir: "dist", // Output directory for the build files
  },
  resolve: {
    alias: {
      "@": "/src", // Example of setting up an alias
    },
  },
});
