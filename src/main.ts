import { createApp } from 'vue'
import { Vue } from 'vue-class-component'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'

const app = createApp(App)
app.config.globalProperties.$convertToExcel = utils.convertToExcel
app.config.globalProperties.$getCurrentDate = utils.getCurrentDate
app.use(store).use(router).mount('#app')