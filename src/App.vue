<template>
  <div>
    <app-header></app-header>
    <hr>
    <div class="container-fluid">
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
  .mainBackground{
    background-color: rgb(196,216,226);
    height: 500px;
  }
  @media only screen and (max-width: 480px) {
  .mainBackground {
    width: auto;
    height: auto;
  }
}
</style>
