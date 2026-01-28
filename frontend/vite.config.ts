import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({mode}) => {

  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],

    base: env.VITE_BASE,

    preview: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      strictPort: true,
      allowedHosts: [env.VITE_ALLOWED_HOST_1]
    }
  }
})
