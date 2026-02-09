import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'date-fns',
    'framer-motion',
    'lucide-react',
    'react-datepicker',
  ],
  treeshake: true,
  splitting: false,
  minify: false,
  outDir: 'dist',
});
