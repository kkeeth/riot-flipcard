import { resolve } from "path";
import { defineConfig } from "vite";
import riot from "rollup-plugin-riot";

export default defineConfig({
  root: process.cwd(),
  plugins: [riot()],
  build: {
    lib: {
      entry: resolve(__dirname, "app.js"),
      name: "flipcard",
      fileName: (format) => `flipcard.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["riot"],
      output: {
        globals: {
          riot: "riot",
        },
      },
    },
    outDir:
      "lib" /** https://vitejs.dev/config/build-options.html#build-outdir */,
    minify:
      "esbuild" /** https://vitejs.dev/config/build-options.html#build-minify */,
    target:
      "esnext" /** https://vitejs.dev/config/build-options.html#build-target */,
  },
});
