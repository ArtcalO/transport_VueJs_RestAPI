<template>
	<div>
		<h4 class="mb-4">Historique</h4>
		<div class="card-columns">
		  	<div
		  		v-for="bookingD in bookingData"
		  		class="card bg-light">
			    <div class="card-body text-center">
			      <p class="card-text bg-info ">Demandeur : 
			      	<span class="text-white" >NIYUNGEKO Carmel</span>
			      </p>
			      <center >
			      	<p>Voyage : <strong>
			      				{{ bookingD.trip.start_point.name }}
			      				</strong>
			      				vers
			      				<strong>
			      					{{ bookingD.trip.end_point.name }}
			      				</strong></p>
			      	<p>Code Trans : {{ bookingD.transaction_code }}</p>
			      	<p>Seat N°: {{ bookingD.seat }}</p>
			      	<p>Destination : {{ bookingD.destination }}</p>
			      </center>
			      	<form method="POST">
			      		<button 
			      			@click.prevent="details"
			      			class="btn btn-outline-primary">Details</button>
			      	</form>
			    </div>
			</div>
		</div>
	</div>
</body>
</template>

<script>
import axios from 'axios';
export default {

  	data(){
        return {
        	pending:'False',
        	booked:'True',
        	bookingData : null,
        }
    },
    mounted(){
    	this.getBookings();
    	
    },
    methods : {
    	getBookings(){
    		axios.get('http://127.0.0.1:8000/api/bookings/')
    			.then((res)=>{ 
    				if(res.data.length != 0){
    					this.bookingData = res.data;
    				}else{
    					console.log('error');
    				}

    			})
    	}   
    },
};
</script>

<style scoped>
	.title{
		width: 200px;
		border-bottom-style: dotted;
	}

	@media only screen and (max-width: 480px) {
	.booking-form>.booking-bg {
		display: none;
	}
	.booking-form>form {
		margin-left: 0px;
	}
}

</style>