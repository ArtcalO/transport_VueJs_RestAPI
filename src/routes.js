import Home from './pages/home.vue';
import Connexion from './pages/connexion.vue';
import Register from './pages/register.vue';
import Admin from './pages/admin.vue';

export const routes = [
	{path: '', component: Home},
	{path: '/connexion', component: Connexion},
	{path: '/register', component: Register},
	{path: '/admin', component: Admin}
];