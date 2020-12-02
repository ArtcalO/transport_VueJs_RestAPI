<template>
  <div class="container-fluid">
    <app-header></app-header>
    <hr>
    <div>
      <router-view ></router-view>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header  from './components/shared/Header.vue';
import Footer  from './components/shared/Footer.vue';

export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer
  }
  
};
</script>

<style>

</style>
