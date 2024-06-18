import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Especifica la ruta base de tu aplicación
  build: {
    outDir: 'build', // Directorio de salida de la construcción
    assetsDir: 'assets', // Directorio para archivos estáticos
    manifest: true, // Generar un archivo manifest.json
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js', // Ruta de salida para los archivos JavaScript
        chunkFileNames: 'assets/[name].[hash].js', // Ruta de salida para los archivos de fragmentos JavaScript
        assetFileNames: 'assets/[name].[hash].[ext]' // Ruta de salida para otros archivos estáticos
      }
    }
  }
})
