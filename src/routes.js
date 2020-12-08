import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Connexion from './pages/Connexion.vue';
import Admin from './pages/Admin.vue';
import AddTrip from './components/AddTrip.vue';
import AddDriver from './components/AddDriver.vue';
import AddBus from './components/AddBus.vue';
import AddPoint from './components/AddPoint.vue';

export const routes = [
	{path: '', component: Home},
	{path: '/register', component: Register},
	{path: '/connexion', component: Connexion},
	{path: '/admin/add_trip', component: AddTrip},
	{path: '/admin', component: Admin},
	{path: '/admin/add_driver', component: AddDriver},
	{path: '/admin/add_bus', component: AddBus},
	{path: '/admin/add_scale_point', component: AddPoint},
];