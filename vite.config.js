import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? "/IphoneClone/" : "/", // Use base only in production
  server: {
    port: 3000, // Set your desired port
  },
}))
