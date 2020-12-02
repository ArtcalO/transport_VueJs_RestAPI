import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		courses : ['Kirundi'],
		students : [
			{Name : 'NIYUNGEKO', Subname : 'Carmel', Age : 30}
		],
		marks : [
			{Student : 'NIYUNGEKO Carmel', Course : 'Kirundi', Mark : 12}
		]
	},
});