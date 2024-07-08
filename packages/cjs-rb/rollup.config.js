import typescript from '@rollup/plugin-typescript';
import externalDeps from 'rollup-plugin-peer-deps-external';

const config = {
    input: './src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
        },
    ],
    plugins: [typescript(), externalDeps()],
};

export default config;
