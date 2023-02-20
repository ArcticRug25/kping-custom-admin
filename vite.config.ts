import { defineConfig } from 'vite'
import { resolve } from 'path'
import { pluginsConfig } from './build/pluginConfig'

export default defineConfig(({ command }) => {
    return {
        plugins: pluginsConfig(command === 'build'),
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3001/',
                    changeOrigin: true
                    // rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        build: {
            outDir: 'dist',
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[hash].[ext]',
                    manualChunks(id: any) {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            },
            // sourcemap: true,
            brotliSize: false
        }
    }
})
