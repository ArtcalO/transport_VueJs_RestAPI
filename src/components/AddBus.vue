<template>
	<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="booking-bg"></div>
						<form>
							<div class="form-header">
								<h2>Ajout Bus</h2>
							</div>

							<div class="form-group">
								<span class="form-label">Type de bus</span>
								<input
									v-model="bus_type"
									class="form-control"
									type="text"
									placeholder="type bus">
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Plaque</span>
										<input
											v-model="immatriculation"
											class="form-control"
											type="text"
											placeholder="plaque">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label">Places</span>
										<input
											v-model="total_seat"
											class="form-control"
											type="number"
											placeholder="places">
									</div>
								</div>
							</div>

							<div class="form-group">
								<span class="form-label">Marque</span>
								<input
									v-model="mark"
									class="form-control"
									type="text"
									placeholder="Mark">
							</div>
							<div class="form-btn">
								<button 
									@click.prevent="addBus"
									class="submit-btn">Enregistrer</button>
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
        	mark : '',
			total_seat :0,
			immatriculation : '',
			bus_type : '',
        }
    },

    methods : {
        addBus(){
                axios.post('http://127.0.0.1:8000/api/buses/', {
					mark : this.mark,
					total_seat : this.total_seat,
					immatriculation : this.immatriculation,
					bus_type : this.bus_type,
                        }).then(() => {
                            this.$router.push('/admin');
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