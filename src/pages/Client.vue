<template>
	  <div class="container">
        <div class="formular mb-3">
			 <form class="form-inline" action="">
			  <label for="email" class="mr-sm-2">Depart : </label>
			  <input
			  	v-model="from"
			  	type="text"
			  	class="form-control mb-2 mr-sm-2"
			  	placeholder="" >
			  <label for="text" class="mr-sm-2">Arrivé : </label>
			  <input
			  	v-model="to"
			  	type="text"
			  	class="form-control mb-2 mr-sm-2"
			  	placeholder="" >
			  
			  <button @click.prevent="change" type="submit" class="btn btn-primary mb-2">Rechercher</button>
			</form> 
        </div>

        <div v-if="research">
        	<app-display-trip :from="from" :to="to"></app-display-trip>
        </div>
    </div>
</body>
</template>

<script>
	import DisplayTrip from '../components/DisplayTrip.vue';
export default {
	data(){
		return {
			from :'',
			to :'',
			research : false,
		}
	},
	components : {
		'app-display-trip' : DisplayTrip,
	},
	methods : {
		change(){
			this.research = true;
			this.$store.state.destination = this.to;
		}
	}

};
</script>

<style scoped>
	.formular{
		height: 300px;
		background-color: cadetblue;
		padding: 100px 200px;
	}
</style>