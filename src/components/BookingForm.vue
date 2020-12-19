<template>
	  <div class="container">
        <div class=" mb-3">
        	<span class="alert alert-warning" >Lumicash : 120320120</span>
			 <form class="form-group" action="">
				  <label >Payement:</label>
				  <select class="form-control" >
				    <option value="lumicash">LUMICASH</option>
				    <option value="ecocash">ECOCASH</option>
				  </select>
				  <label class="mr-sm-2">Code Transaction : </label>
				  <input type="number" class="form-control ">
			  <button type="submit" class="btn btn-primary mb-2">Book</button>
			</form> 
        </div>

    </div>
</body>
</template>

<script>
import axios from 'axios';
export default {
  data(){
        return {
        		bus_driver : null,
        		driversData : null,
				bus : null,
				busData : null,
				start_point : null,
				end_point : null,
				pointsData : null,
				sacle_points : [],
				scalesData : null,
				start_hour : '',
				arrive_hour : '',
				amount : 0,
        }
    },
    mounted(){
    	this.getDrivers();
    	this.getBuses();
    	this.getProvinces();
    	this.getScales();
    },
    methods : {
    	getDrivers(){
    		axios.get('http://127.0.0.1:8000/api/drivers/')
    			.then((res)=>{
    				console.log(res);
    				this.driversData = res.data;
    			})
    	},
    	getBuses(){
    		axios.get('http://127.0.0.1:8000/api/buses/')
    			.then((res)=>{
    				console.log(res);
    				this.busData = res.data;
    			})
    	},
    	getProvinces(){
    		axios.get('http://127.0.0.1:8000/api/provinces/')
    			.then((res)=>{
    				console.log(res);
    				this.pointsData = res.data;
    			})
    	},
    	getScales(){
    		axios.get('http://127.0.0.1:8000/api/points/')
    			.then((res)=>{
    				console.log(res);
    				this.scalesData = res.data;
    			})
    	},

        addTrip(){
                axios.post('http://127.0.0.1:8000/api/trips/', {
                    bus_driver : this.bus_driver,
					bus : this.bus,
					start_point : this.start_point,
					end_point : this.end_point,
					sacle_points : this.sacle_points,
					start_hour : this.start_hour,
					arrive_hour : this.arrive_hour,
					amount : this.amount,
                        }).then(() => {
                            this.$route.push('/admin');
                        }).catch(error => console.log(error));
            }
            
        },
};
</script>
</script>

<style scoped>
	
</style>
