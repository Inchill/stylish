import App from './App.vue'
import { createApp } from 'vue'
import router from './router'

const app = createApp(App)

console.log('app', app)
app.use(router)

app.mount('#app')

