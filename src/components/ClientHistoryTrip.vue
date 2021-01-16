<template>
	<div class="container">
			<div class="title mb-5">
		  		<h4>Pending</h4>
		  	</div>
		  	
			<div class="card-columns">
			  	<div
			  		v-for="pendingD in pendingData" 
			  		class="card bg-light">
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
	
		<div class="title mb-5">
	  		<h4>Booked</h4>
	  	</div>
	  	
		<div class="card-columns">
		  	<div
		  		v-for="bookedD in bookedData" 
		  		class="card bg-light">
			    <div class="card-body text-center">
			      <p class="card-text bg-info ">Demandeur : 
			      	<span class="text-white" >NIYUNGEKO Carmel</span>
			      </p>
			      	<p>Voyage : <strong>
			      				{{ bookedD.trip.start_point.name }}
			      				</strong>
			      				vers
			      				<strong>
			      					{{ bookedD.trip.end_point.name }}
			      				</strong></p>
			      	<p>Code Trans : {{ bookedD.transaction_code }}</p>
			      	<p>Seat N°: {{ bookedD.seat }}</p>
			      	<p>Destination : {{ bookedD.destination }}</p>
			    
			      		<button class="btn btn-outline-danger">Code</button>
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
        	pendingStat : 'True',
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
    		axios.get('http://127.0.0.1:8000/api/bookings/pending/'+this.pending)
    			.then((res)=>{
    				console.log(res.data);
    				if(res.data.length != 0){
    					this.pendingData = res.data;
    				}else{
    					console.log('error');
    					this.pendingStat='False';
    				}

    			})
    	},

    	getBooked(){
    		axios.get('http://127.0.0.1:8000/api/bookings/booked/'+this.booked)
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