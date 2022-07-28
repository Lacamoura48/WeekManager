import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


library.add(faHouse, faCircleInfo, faGithub)











import './assets/main.css'


const app = createApp(App)

app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')


