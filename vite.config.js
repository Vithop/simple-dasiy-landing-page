import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";

import react from "@vitejs/plugin-react-swc";

console.log(dirname(import.meta.url));
console.log(resolve(dirname(import.meta.url)));
console.log();

// C:\Users\Vithuran\Documents\Github\simple-dasiy-landing-page\src\lib\index.js
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve("src/lib/index.js"),
      name: "simple-react-dasiy-landing-page",
      // the proper extensions will be added
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
