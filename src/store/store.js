import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		idDetail:0,
		seatIdDeatail:0,
		tripId:0,
		destination : ''
	}
});