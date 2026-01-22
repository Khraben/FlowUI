import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'components/index': 'src/app/components/index.ts',
    'constants/index': 'src/app/constants/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom', 'tailwindcss', 'next'],
  treeshake: true,
  splitting: false,
  minify: false,
  outDir: 'dist',
});
