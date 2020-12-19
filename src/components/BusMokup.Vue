<template>
  <div>
    <div class="container-fluid" >
      <h2>Disposition du Bus</h2>
    </div>
    <div class="container">
      <div class="bus" >
        <div
            v-for="seat in seatData"
            class="seat"
            @click="bookForm"
        >{{ seat.id }}</div>
      </div>

    <div class="caption">
      <div class="captionBox">
        <p class="captionTag">Libre</p>
      </div>
      <div class="captionBox">
        <p class="captionTag">Reservé</p>
      </div>
      <div class="captionBox">
        <p class="captionTag">Attente</p>
      </div>
    </div>
    
  </div>
</div>
  </div>
</template>

<script>
  import { eventBus } from '../main';
  import BookingForm from './BookingForm.vue';
  import axios from 'axios';
  export default {
    data(){
      return{
        seatData : null,
      }
    },
    props :['bus_Id'],
    components : {
      BookingForm : 'app-booking-form'
    },
    created(){
        eventBus.$on('detailEmited',(bus_Id)=>{
          this.bus_Id = bus_Id;
          alert(this.bus_Id);
      });
    },
    mounted(){
      this.getSeats();
    },
    methods :{
      bookForm(){
        this.$router.push('/booking')
      },
      getSeats(){
        axios.get('http://127.0.0.1:8000/api/seats/3')
          .then((res)=>{
            console.log(res);
            this.seatData = res.data;
          })
      },
    },
  }
</script>

<style scoped>
  .bus{
    background-color: gray;
    width: 700px;
    height: 300px;
    padding: 25px;
    float: left;

  }

  .caption{
    width: 300px;
    height: 300px;
    padding:30px;
    background-color: gray;
    margin-left: 800px;
    
  }

  .seat{
    width: 50px;
    height: 50px;
    display: inline-block;
    background-color: red;
    text-align: center;
    padding: 10px;
    margin:auto;
    margin-right: 15px;
    margin-bottom: 15px;

  }

  .seat:hover{
    width: 50px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    border:0.5px solid black;
    color: blue;
  }

  .captionBox{
    width: 50px;
    height: 50px;
    background-color: red;
    padding: 10px;
    margin:20px;
    display: block;

  }

  .captionTag{
    margin-left: 100px;
  }

  @media only screen and (max-width: 480px) {
  .bus {
    float: none;
    width: auto;
    height: auto;
    margin-bottom: 10px;
  }
  .caption{
    width: auto;
    display: block;
    margin: auto;
  }
}



</style>