import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ❌ This is not a real plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
