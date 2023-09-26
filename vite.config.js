import { defineConfig } from 'vite';
import { join } from 'path';
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   root: join(process.cwd(), 'src'),
//   server: {
//     port: 3000,
//     open: '/index.html',
//   },
//   preview: {
//     port: 8080,
//   },
//   build: {
//     outDir: join(process.cwd(), 'dist'),
//   },
// });
export default defineConfig({
  base: "/unsplash/",
  plugins: [react()],
});
