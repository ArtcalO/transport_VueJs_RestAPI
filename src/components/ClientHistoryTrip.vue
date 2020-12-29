<template>
	<div>
		<div class="title mb-5">
	  		<h4>Pending</h4>
	  	</div>

	  	<div class="container">
	  	
		<div
			v-for="pendingD in pendingData"
			class="card-columns">
		  	<div class="card bg-light">
			    <div class="card-body text-center">
			      <p class="card-text bg-info ">Demandeur : 
			      	<span class="text-white" >NIYUNGEKO Carmel</span>
			      </p>
			      	<p>Voyage : <strong>
			      				{{ pendingD.trip.start_point.name }}
			      				</strong>
			      				vers
			      				<strong>
			      					{{ pendingD.trip.end_point.name }}
			      				</strong></p>
			      	<p>Code Trans : {{ pendingD.transaction_code }}</p>
			      	<p>Seat N°: {{ pendingD.seat }}</p>
			      	<p>Destination : {{ pendingD.destination }}</p>
			    
			      		<button class="btn btn-outline-danger">Code</button>
			    </div>
			</div>
		</div>
		</div>
		<div class="title mb-5">
	  		<h4>Booked</h4>
	  	</div>

	  	<div class="container">
	  	
        	<div class="card-columns">
			  <div class="card bg-light">
			    <div class="card-body text-center">
			      <p class="card-text">Voyage : Buja Muramva</p>
			      <p class="card-text">Escales : 
			      	<span class="badge badge-warning">Bubanza</span>
			      	<span class="badge badge-primary">Cankuzo</span>
			      	</p>
			      	<form method="POST">
			      		<button class="btn btn-outline-primary">Details</button>
			      	</form>
			    </div>
			  </div>
			</div>
		</div>

		<div class="title mb-5">
	  		<h4>Done</h4>
	  	</div>

	  	<div class="container">
	  	
        	<div class="card-columns">
			  <div class="card bg-light">
			    <div class="card-body text-center">
			      <p class="card-text">Voyage : Buja Muramva</p>
			      <p class="card-text">Escales : 
			      	<span class="badge badge-warning">Bubanza</span>
			      	<span class="badge badge-primary">Cankuzo</span>
			      	</p>
			      	<form method="POST">
			      		<button class="btn btn-outline-primary">Details</button>
			      	</form>
			    </div>
			  </div>
			</div>
		</div>
	</div>
	  
</template>
<script>
import axios from 'axios';
export default {

  	data(){
        return {
        	pending:'True',
        	booked:'True',
        	pendingData : null,
        	bookedData : null,
				
        }
    },
    mounted(){
    	this.getPendings();
    	this.getBooked();
    	
    },
    methods : {
    	getPendings(){
    		axios.get('http://127.0.0.1:8000/api/bookings/pending-'+this.pending)
    			.then((res)=>{
    				console.log(res.data);
    				if(res.data.length != 0){
    					this.pendingData = res.data;
    				}else{
    					console.log('error');
    				}

    			})
    	},

    	getBooked(){
    		axios.get('http://127.0.0.1:8000/api/bookings/booked-'+this.booked)
    			.then((res)=>{
    				console.log(res.data);
    				if(res.data.length != 0){
    					this.bookedData = res.data;
    				}else{
    					console.log('error');
    				}

    			})
    	},


    },
};
</script>

<style scoped>
	.title{
		width: 200px;
		border-bottom-style: dotted;
	}
</style>