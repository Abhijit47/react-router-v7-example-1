import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
// import autoprefixer from 'autoprefixer';
// import path from 'path';
import { reactRouterDevTools } from 'react-router-devtools';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// ↓ add this
import netlifyPlugin from '@netlify/vite-plugin-react-router';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      reactRouterDevTools({
        // appDir,
        // editor:""
      }),
      tailwindcss(),
      reactRouter(),
      tsconfigPaths(),
      netlifyPlugin(), // ← add this
    ],

    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, './src'),
    //   },
    // },

    build: {
      cssCodeSplit: true,
      emptyOutDir: false,
      modulePreload: true,
      sourcemap: false,
      rollupOptions: {
        treeshake: true,
        // plugins:
      },
    },

    define: {
      'process.env': env,
    },
  };
});

// export default defineConfig(({mode})=>return{
//   plugins: [
//     reactRouterDevTools(),
//     tailwindcss(),
//     reactRouter(),
//     tsconfigPaths(),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     cssCodeSplit: true,
//     emptyOutDir: false,
//     modulePreload: true,
//     sourcemap: false,
//     rollupOptions: {
//       treeshake: true,
//       // plugins:
//     },
//   },
//   define: {
//     'process.env': process.env,
//   },
// });
