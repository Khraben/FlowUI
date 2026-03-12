import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  platform: 'browser',
  target: 'es2020',
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'date-fns',
    'framer-motion',
    'lucide-react',
    'react-datepicker',
    'next',
    'next/navigation',
  ],
  treeshake: true,
  splitting: false,
  minify: false,
  outDir: 'dist',
  shims: true,
  esbuildOptions(options) {
    options.mainFields = ['module', 'main'];
    options.conditions = ['module'];
  },
});
