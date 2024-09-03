import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      models: path.resolve(__dirname, "./src/models"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      services: path.resolve(__dirname, "./src/services"),
    },
  },
});
