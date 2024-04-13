import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
const processEnv = {
  REACT_SPINKIT_NO_STYLES: "true", // Example, adjust based on actual needs
};

export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
});
