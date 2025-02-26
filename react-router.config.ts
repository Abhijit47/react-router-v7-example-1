import type { Config } from '@react-router/dev/config';
// import { vercelPreset } from '@vercel/react-router/vite';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // presets: [vercelPreset()],
  // specific paths
  prerender: ['/', '/about', '/contact-us'],
  future: {
    unstable_splitRouteModules: true,
  },
} satisfies Config;
