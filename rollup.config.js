import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
      format: "iife",
      name: "SylvainComponentsLibrary", // the global which can be used in a browser
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    terser(),
  ],
};
