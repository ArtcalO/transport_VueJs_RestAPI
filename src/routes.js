import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Connexion from './pages/Connexion.vue';
import Admin from './pages/Admin.vue';
import AddTrip from './components/AddTrip.vue';
import AddDriver from './components/AddDriver.vue';
import AddBus from './components/AddBus.vue';
import AddPoint from './components/AddPoint.vue';
import Client from './pages/Client.vue';
import ClientHistory from './components/ClientHistoryTrip.vue';
import BusMokup from './components/BusMokup.vue';
import BookingForm from './components/BookingForm.vue';
import DisplaTrip from './components/DisplayTrip.vue';
import AdminBookingHistory from './components/AdminBookingHistory.vue';

export const routes = [
	{path: '/', component: Home},
	{path: '/register', component: Register},
	{path: '/connexion', component: Connexion},
	{path: '/admin/add_trip', component: AddTrip},
	{path: '/admin', component: Admin},
	{path: '/admin/add_driver', component: AddDriver},
	{path: '/admin/add_bus', component: AddBus},
	{path: '/admin/add_scale_point', component: AddPoint},
	{path: '/admin/booking_history', component: AdminBookingHistory},
	{path: '/home', component: Client},
	{path: '/history', component: ClientHistory},
	{path: '/bus_mokup', component: BusMokup},
	{path: '/booking', component: BookingForm},
	{path: '/search', component: DisplaTrip},
];