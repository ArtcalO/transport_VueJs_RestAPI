<template>
  <div>
    <div class="container-fluid" >
      <h2>Disposition du Bus</h2>
    </div>
    <div class="container">
      <div class="bus" >
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
        <div class="seat">1</div>
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
  export default {
    
  };
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