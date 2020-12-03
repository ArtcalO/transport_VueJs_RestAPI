import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Connexion from './pages/Connexion.vue';
import Admin from './pages/Admin.vue';
import AddTrip from './components/AddTrip.vue';

export const routes = [
	{path: '', component: Home},
	{path: '/register', component: Register},
	{path: '/connexion', component: Connexion},
	{path: '/admin/add_trip', component: AddTrip},
	{path: '/admin', component: Admin}
];