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
  </div>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<style scoped >

  a{
    text-decoration: none;
  }

</style>