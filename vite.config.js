import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW", // genera automáticamente el SW
      injectRegister: "auto",
      includeAssets: [
        "favicon.svg",
        "hero.png", 
        "icons.svg",
        "Logo1.0.ico", 
        "react.svg", 
        "penguin.png", 
        "world.png",
        "vite.svg",
        "robots.txt"
      ],
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg,xml,webmanifest}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // aumenta límite de cache para archivos grandes
      },
      manifest: {
        name: "Mi PWA",
        short_name: "PWA",
        description: "Aplicación web progresiva creada para buscar un mejor control para tus gastos de tu vida pesada",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        screenshots: [
          {
            src: "/img/auww.png",
            sizes: '360x360', 
            type: 'image/png',
            form_factor: 'narrow',
            label: "Vista Móvil"
          },
          {
            src: '/img/auww.png',
            sizes: '360x360',
            type: 'image/png',
            form_factor: 'wide',
            label: "Vista Escritorio"
          } 
        ],
        icons: [
          {
            src: "/img/penguin.png",
            sizes: "512x512", 
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/img/penguin.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600, // evita warnings de chunks grandes
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor' // separa dependencias externas
        }
      }
    }
  }
});