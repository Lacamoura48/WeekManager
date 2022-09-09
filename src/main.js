import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCircleInfo, faGear, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


library.add(faHouse, faCircleInfo, faGithub, faGear, faTrash,faPenToSquare)











import './assets/main.css'


const app = createApp(App)

app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')


