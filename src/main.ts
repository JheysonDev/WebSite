import viteSSR from 'vite-ssr'
import routes from '@/routes'
import App from '@/App.vue'

export default viteSSR(App, { routes })
