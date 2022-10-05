import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import App from './App.vue'

// import { fas } from '@fortawesome/pro-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
