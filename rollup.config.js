import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import pkg from './package.json';
const extensions = ['.js'];

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
            extract: "./dist/styles.css",
            minimize: true  
          }),
        commonjs(),
        resolve({
            extensions 
        }),
    ]
};