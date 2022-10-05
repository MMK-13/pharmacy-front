import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from './pages/SplashScreen.vue'
import StartingPage from './pages/StartingPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import ConfimationPhone from './pages/ConfimationPhone.vue'
import HomePage from './pages/HomePage.vue'
import AccountPage from './pages/AccountPage.vue'
import SearchResult from './pages/SearchResult.vue'


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
		{path: '/search/:drug', name: 'search', component: SearchResult},
	]
})
export default router