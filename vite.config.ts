import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  build: {
    outDir: "site",
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        manualChunks: {
          vendor: ["lucide-react", "react", "react-dom"],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/app.css";
          }

          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/app.js",
      },
    },
  },
  plugins: [react()],
});
