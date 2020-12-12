<template>
	  <div class="container-fluid">

        <div class="home mb-3">
        	<h1 class="display-4 text-white text-center">Connectez-Vous Pour reserver vos tiquets de voyages</h1>
        	<div class="connectSection">
				<router-link to="/connexion"><h3 class="btn btn-primary">Connexion</h3></router-link>
				<router-link to="/register"><h3 class="btn btn-warning">Register</h3></router-link>
			</div>
        </div>
    </div>
</body>
</template>

<script>
export default {

};
</script>

<style scoped>
	.home{
		height: 300px;
		background-color: cadetblue;
		background-image: url('img/bg.jpg');
		background-size: cover;
	}
	.connectSection{
		padding: 70px 600px;
	}
	@media only screen and (max-width: 480px) {
	h1 {
		display: none;
	}
	.home {
		width: 400px;
	}

	.connectSection{
		padding: 110px 105px;
	}
}
</style>