<template>
  <div class="container" >

    <div class="card-columns">
      <div class="card bg-outline-warning">
        <div class="card-body text-center">
          <router-link to="/admin/add_driver"><h3 class="mb-0">+ Driver</h3></router-link>
        </div>
      </div>
      <div class="card bg-outline-warning">
        <div class="card-body text-center">
          <router-link to="/admin/add_bus"><h3 class="mb-0">+ Bus</h3></router-link>
        </div>
      </div>
      <div class="card bg-outline-warning">
        <div class="card-body text-center">
          <router-link to="/admin/add_trip"><h3 class="mb-0">+ Trip</h3></router-link>
        </div>
      </div>
      <div class="card bg-outline-warning">
        <div class="card-body text-center">
          <router-link to="/admin/add_scale_point"><h3 class="mb-0">+ Scale Points</h3></router-link>
        </div>
      </div>
      <div class="card bg-outline-warning">
        <div class="card-body text-center">
          <router-link to="/admin/booking_history"><h3 class="mb-0">Bookings</h3></router-link>
        </div>
      </div>
  </div>

  <hr>
  <h3>En attente de validation</h3>
    <app-request-booking></app-request-booking>
  </div>
</template>

<script>
  import RequestBooking from '../components/RequestBooking.vue'
  export default {
    components : {
      'app-request-booking':RequestBooking
    }
  };
</script>

<style scoped >

  a{
    text-decoration: none;
  }

</style>