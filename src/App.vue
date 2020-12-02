<template>
  <div class="container-fluid" >
    <app-header></app-header>
    <hr>
    <div>
      <h3>Body</h3>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header  from './components/shared/header.vue';
import Footer  from './components/shared/footer.vue';

export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer
  }
  
};
</script>
	
<style>

</style>