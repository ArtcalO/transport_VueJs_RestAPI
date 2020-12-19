<template>
	<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="booking-bg"></div>
						<form>
							<div class="form-header">
								<h2>Ajout Chauffeur</h2>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Nom</span>
										<input
										 v-model="name"
										 class="form-control"
										 type="text"
										 placeholder="Votre nom">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Prenom</span>
										<input
											v-model="subname"
											class="form-control"
											type="text"
											placeholder="Votre prenom">
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">Matricule</span>
								<input
									v-model="matricule"
									class="form-control"
									type="text"
									placeholder="Matricule">
							</div>
							<div class="form-group">
								<span class="form-label">Tel</span>
								<input
									v-model="phone"
									class="form-control"
									type="number"
									placeholder="Tel">
							</div>
							
							<div class="form-btn">
								<button
									type="button"
									class="submit-btn" 
									@click.prevent="addDriver"
								>Enregistrer</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
        return {
            name : '',
			subname : '',
			matricule : '',
			phone : 0,
        }
    },
    methods : {
        addDriver(){
                axios.post('http://127.0.0.1:8000/api/drivers/', {
                    name : this.name,
                    subname : this.subname,
                    matricule : this.matricule,
                    phone : this.phone,
                        }).then(() => {
                            this.$route.push('/admin');
                        }).catch(error => console.log(error));
            }
            
            
        },
};
</script>
<style scoped >
.section {
	position: relative;
	height: 100vh;
}

.section .section-center {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}

#booking {
	font-family: 'Cabin', sans-serif;
	background-color: #f7f9fa;
}

.booking-form {
	position: relative;
	max-width: 642px;
	width: 100%;
	margin: auto;
	background: #fff;
	-webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.3);
}

.booking-form>.booking-bg {
	position: absolute;
	left: 0px;
	top: 0px;
	bottom: 0px;
	width: 250px;
	background-image: url('../pages/img/background.jpg');
	background-size: cover;
	background-position: center;
}

.booking-form>form {
	margin-left: 250px;
	padding: 30px;
	border: 1px solid #f9fafc;
	border-left: 0px;
}

.booking-form .form-header {
	margin-bottom: 30px;
}

.booking-form .form-header h2 {
	margin: 0;
	margin-bottom: 0px;
	font-weight: 700;
	color: #122244;
	font-size: 35px;
	text-transform: capitalize;
}

.booking-form .form-group {
	position: relative;
	margin-bottom: 20px;
}

.booking-form .form-control {
	background-color: #f7f9fa;
	height: 40px;
	padding: 0px 10px;
	border-radius: 0px;
	-webkit-transition: 0.2s;
	transition: 0.2s;
	color: #122244;
	border: 0px;
	font-size: 16px;
	font-weight: 700;
	-webkit-box-shadow: inset 0 1px 4px rgba(181, 193, 204, 0.3);
	box-shadow: inset 0 1px 4px rgba(181, 193, 204, 0.3);
}

.booking-form .form-control::-webkit-input-placeholder {
	color: #dde3e8;
}

.booking-form .form-control:-ms-input-placeholder {
	color: #dde3e8;
}

.booking-form .form-control::placeholder {
	color: #dde3e8;
}

.booking-form .form-control:focus {
	-webkit-box-shadow: inset 0 1px 4px rgba(181, 193, 204, 0.3);
	box-shadow: inset 0 1px 4px rgba(181, 193, 204, 0.3);
}

.booking-form input[type="date"].form-control:invalid {
	color: #dde3e8;
}

.booking-form select.form-control {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.booking-form select.form-control+.select-arrow {
	position: absolute;
	right: 0px;
	bottom: 4px;
	width: 32px;
	line-height: 32px;
	height: 32px;
	text-align: center;
	pointer-events: none;
}

.booking-form select.form-control+.select-arrow:after {
	content: '\279C';
	display: block;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
	color: #dddee9;
	font-size: 14px;
}

.booking-form .form-label {
	color: #b5c1cc;
	font-weight: 700;
	-webkit-transition: 0.2s;
	transition: 0.2s;
	text-transform: uppercase;
	line-height: 24px;
	height: 24px;
	font-size: 14px;
	z-index: 1;
}

.booking-form .form-btn {
	margin-top: 10px;
}

.booking-form .submit-btn {
	color: #fff;
	background-color: #6499ff;
	font-weight: 700;
	padding: 13px 35px;
	font-size: 16px;
	border: none;
	width: 100%;
}

@media only screen and (max-width: 480px) {
	.booking-form>.booking-bg {
		display: none;
	}
	.booking-form>form {
		margin-left: 0px;
	}
}
	
</style>