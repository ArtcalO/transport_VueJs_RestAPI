<template>
  <div class="container" >
    <div class="row">
        <div class="col-xl-3 col-sm-4 mb-1 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <a href="">
                    <div class="d-flex align-items-center align-self-start">
                      <router-link to="/admin/add_trip"><h3 class="mb-0">+ Driver</h3></router-link>
                    </div>
                  </a>
                </div>
              </div>
           </div>
          </div>
        </div>

        <div class="col-xl-2 col-sm-4 mb-1 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <a href="">
                    <div class="d-flex align-items-center align-self-start">
                      <router-link to="/admin/add_trip"><h3 class="mb-0">+ Bus</h3></router-link>
                    </div>
                  </a>
                </div>
              </div>
           </div>
          </div>
        </div>

        <div class="col-xl-2 col-sm-4 mb-1 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-9">
                  <a href="">
                    <div class="d-flex align-items-center align-self-start">
                      <router-link to="/admin/add_trip"><h3 class="mb-0">+ Trip</h3></router-link>
                    </div>
                  </a>
                </div>
              </div>
           </div>
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