import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from './pages/SplashScreen'
import StartingPage from './pages/StartingPage'
import RegisterPage from './pages/RegisterPage'
import ConfimationPhone from './pages/ConfimationPhone'
import HomePage from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import SearchResult from './pages/SearchResult'
import NotificationPage from './pages/NotificationPage'
import MapsPage from './pages/MapsPage'

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
		{path: '/notifications', name: 'notifications', component: NotificationPage},
		{path: '/maps', name: 'maps', component: MapsPage},
	]
})
export default router