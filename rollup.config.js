import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
//import minify from "rollup-plugin-babel-minify";

export default {
  input: "_dud_input.js", // These are set in the exec() call
  output: {
    file: "_dud_output.js", // These are set in the exec() call
    format: "iife",
    strict: false
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs({
      sourceMap: false
    }),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    })
    /*minify({
      comments: false
    })*/
  ]
};
