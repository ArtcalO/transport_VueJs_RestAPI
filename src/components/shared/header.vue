
<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Bus Booking</router-link>
    </div>
    <nav>
      <ul class="nav nav-pills">
     		<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/history" tag="li" active-class="active" exact><a>History</a></router-link>
     		<router-link to="/admin" tag="li" active-class="active" ><a>Admin <span class="badge badge-light">{{ bookingData }}</span></a></router-link>
        <router-link to="/home" tag="li" active-class="active" exact><a>Client <span class="badge badge-light">9</span></a></router-link>
     		<router-link to="/register" tag="li" active-class="active" ><a>Register</a></router-link>
     		<router-link to="/connexion" tag="li" active-class="active" ><a>Connexion</a></router-link>
    	</ul>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return {
          pending:'True',
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
            console.log(res.data);
            if(res.data.length != 0){
              this.bookingData = res.data.length;
            }else{
              console.log('error');
            }

          })
      },
    }
};

</script>

<style scoped >
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2,41,191);
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: white;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>