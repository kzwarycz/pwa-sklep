import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/main.scss'],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  hooks: {
    'pages:extend'(pages) {
        pages.push(
          {
              name: 'product',
              path: '/products/:id',
              file: '/pages/product.vue',
          }
        );
      }
    },
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      name: "pwa-sklep Nuxt3 PWA",
      shortname: "Nuxt3PWA",
      theme_color: "#f69435",
      useWebmanifestExtension: false,
      icons: [
        {
          src: "/pwa.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
            src: "/pwa_large.png",
            sizes: "512x512",
            type: "image/png"
        }
      ]
    }
  },
  server: {
    https:{
      key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem'))
    }
  }
})
