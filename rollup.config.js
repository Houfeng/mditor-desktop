import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  input: './dist/es/index.js',
  output: [
    {
      file: './dist/cjs/mota.js',
      format: 'cjs'
    },
    {
      file: './dist/umd/mota.js',
      format: 'umd',
      name: "mota"
    },
    {
      file: './dist/iife/mota.js',
      format: 'iife',
      name: "mota"
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};