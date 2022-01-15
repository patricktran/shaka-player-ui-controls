import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import path from 'path';
import pkg from './package.json';

//figure out how to build css file to dist folder
export default 
{
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
         },
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    plugins: [
        postcss({
            include: "**/styles.css",
            extract: path.resolve("dist/styles.css"),
          }),
        commonjs(),
        resolve(),
        terser()
    ]
};