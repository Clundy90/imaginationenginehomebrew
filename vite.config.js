import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // We explicitly disable any custom babel config that might be
      // getting picked up from your node_modules or root.
      babel: {
        babelrc: false,
        configFile: false,
      },
    }),
  ],
  server: {
    // Ensures the server remains on your preferred port
    port: 5173,
    open: true,
  },
});
