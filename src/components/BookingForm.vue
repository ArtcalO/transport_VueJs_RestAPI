<template>
	  <div class="container">
        <div class=" mb-3">
        	<span class="alert alert-warning" >Lumicash : 120320120</span>
			 <form class="form-group" action="">
				  <label class="mr-sm-2">Code Transaction : </label>
				  <input
                    v-model="transCode "
                    type="number"
                    class="form-control ">
                <button
                    @click.prevent="book"
                    type="submit"
                    class="btn btn-primary mb-2"
                >Book</button>
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
                transCode:0,
        }
    },
    created(){
        this.bus_Id=this.$store.state.idDetail;
    },
    methods : {
        book(){
            axios.post('http://127.0.0.1:8000/api/bookings/', {
                seat : this.$store.state.seatIdDeatail,
                payement : 1,
                transaction_code : this.transCode, 
                trip : 2,
                pending : true,
                destination : this.$store.state.destination                   
                    }).then(() => {
                    	axios.patch('http://127.0.0.1:8000/api/seats/'+this.$store.state.seatIdDeatail+'/',{
                    		pending : 'True'
                    		
                    	});
                        this.$router.push('/bus_mokup');
                    }).catch(error => console.log(error));
            }

            
        },
};
</script>
</script>

<style scoped>
	
</style>
