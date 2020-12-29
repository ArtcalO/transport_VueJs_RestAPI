<template>
	<div>
		<div vi-f="searchResult == true">
			<div class="title mb-5">
		  		<h4>Resultat Recherche</h4>
		  	</div>
		  	<div class="container">
	        	<div
	        		v-for="tripD in tripsData"
	        		class="card-columns">
				  	<div class="card bg-light">
					    <div class="card-body text-center">
					      <p class="card-text bg-info ">Voyage : 
					      	<span class="text-white" >{{ tripD.start_point.name }}</span>
					      		vers
					      		<span class="text-white">{{ tripD.end_point.name }}</span>
					      </p>
					      <p class="card-text">Escales : 
					      	<span
					      		v-for=" scale in tripD.sacle_points"
					      		class="badge badge-warning mr-1">{{ scale.name_point }}</span>
					      	</p>
					      	<form method="POST">
					      		<button 
					      			@click.prevent="details(tripD.bus.id, tripD.id)"
					      			class="btn btn-outline-primary">Details</button>
					      	</form>
					    </div>
				 	</div>
	    		</div>
			</div>
		</div>
		<div v-if="searchResult == false">
			<div class="nullDatatFound mb-5 p-2">
		  		<h4>0 voyage touvé</h4>
		  		<p>Itineraire manquant : <strong>Depart :</strong>
		  									<span class="btn btn-outline-light mr-2 ml-2">{{ from }}</span>
		  									<strong>vers/escale</strong>
		  									<span class="btn btn-outline-light ml-2">{{ to }}</span>
		  		</p>
		  	</div>
		</div>
	</div>
	  
</body>
</template>

<script>
import { eventBus } from '../main';
import axios from 'axios';
export default {
	props : {
		from : {
			type:String
		},
		to : {
			type:String
		}
	},
  	data(){
        return {
        	searchResult : true,
        	tripsData : null,
				
        }
    },
    mounted(){
    	this.getTrips();
    	
    },
    methods : {
    	getTrips(){
    		axios.get('http://127.0.0.1:8000/api/trips/'+this.from+'-'+this.to)
    			.then((res)=>{ 
    				if(res.data.length != 0){
    					console.log(res.data)
    					this.tripsData = res.data;
    					
    				}else{
    					this.searchResult=false
    				}

    			})
    	},
    	details(dataBusId, dataTripId){
    		this.$store.state.idDetail = dataBusId;
    		this.$store.state.tripId = dataTripId;
    		this.$router.push({path: '/bus_mokup', query: { trip : this.from+'+to+'+this.to}});

    	}       
    },
};
</script>

<style scoped>
	.title{
		width: 200px;
		border-bottom-style: dotted;
	}
	.nullDatatFound{
		width: auto;
		background-color: orange;

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