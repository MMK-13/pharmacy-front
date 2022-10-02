import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import SplashScreen from './pages/SplashScreen.vue'
import StartingPage from './pages/StartingPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import ConfimationPhone from './pages/ConfimationPhone.vue'
import HomePage from './pages/HomePage.vue'
import AccountPage from './pages/AccountPage.vue'

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'rooter-link-active',
	routes: [
		{path: '/', component: SplashScreen, },
		{path: '/starting', component: StartingPage},
		{path: '/register', component: RegisterPage},
		{path: '/confirmation', component: ConfimationPhone},
		{path: '/home', name: 'home', component: HomePage},
		{path: '/account', name: 'account', component: AccountPage},
	]
})

// import { fas } from '@fortawesome/pro-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
