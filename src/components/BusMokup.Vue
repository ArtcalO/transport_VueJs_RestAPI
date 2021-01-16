<template>
  <div>
    <div class="container-fluid medi mb-5" >
      <h2>Disposition du Bus</h2>
      <div class="minifiedCaption">
        <p>Libre</p>
        <p>Reservé</p>
        <p>Attente</p>
      </div>
    </div>
    <div class="container">
      <div class="bus" >
        <div
            v-for="seat in seatData"
            class="seat"
            @click="bookForm(seat.id)"
            :class="{pending:seat.pending, booked:seat.booked}"
        >{{ seat.seat_number }}</div>
      </div>

    <div class="caption">
      <div class="captionBox">
        <p class="captionTag text-white">Libre</p>
      </div>
      <div class="captionBox booked">
        <p class="captionTag text-white">Reservé</p>
      </div>
      <div class="captionBox pending">
        <p class="captionTag text-white">Attente</p>
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
        bus_Id:0,
        seatData : null,
      }
    },
    components : {
      BookingForm : 'app-booking-form'
    },
    created(){
      this.bus_Id=this.$store.state.idDetail;
    },
    mounted(){
      this.getSeatsForBus();
    },
    methods :{
      bookForm(data){
        this.$store.state.seatIdDeatail = data;
        this.$router.push({path: '/booking', query: { seat : this.$store.state.seatIdDeatail}});
      },
      getSeatsForBus(){
        axios.get('http://127.0.0.1:8000/api/seats/seatbybus/'+this.$store.state.idDetail)
          .then((res)=>{
            console.log(res);
            this.seatData = res.data;
          })
      },
    },
  };
</script>

<style scoped>
  .minifiedCaption{
    display: none;
  }
  .bus{
    border:1px solid blue;
    background-color:rgb(92,150,183);
    width: 640px;
    height: 300px;
    padding: 20px;
    float: left;

  }

  .caption{
    width: 300px;
    height: 300px;
    padding:30px;
    background-color:rgb(92,150,183);
    margin-left: 800px;
    
  }

  .seat{
    width: 50px;
    height: 50px;
    display: inline-block;
    background-color: rgb(0,75,132);
    color: white;
    text-align: center;
    padding: 10px;
    margin:auto;
    margin:7px ;
  }

  .seat:hover{
    background-color: rgb(44,44,255);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: white;
  }

  .captionBox{
    width: 50px;
    height: 50px;
    background-color: rgb(0,75,132);
    padding: 10px;
    margin:20px;
    display: block;

  }

  .booked{
    background-color: rgb(255,128,0);
    color: white;
    cursor: not-allowed;

  }
  .booked:hover{
    background-color: rgb(255,128,0);
    color: white;
    cursor: not-allowed;

  }
  .pending{
    background-color: gray;
    cursor: not-allowed;
  }

  .pending:hover{
    background-color: rgb(186,194,255);
    cursor: not-allowed;
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
    display: none;
  }
  .minifiedCaption{
    display: inline;
    background-color: gray;
  }

  .minifiedCaption p{
    display: inline;
  }
}



</style>