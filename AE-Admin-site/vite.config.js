import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      https: {
        key: "./frontend2-privateKey.key",
        cert: "./frontend2.crt",
      },
    },
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
