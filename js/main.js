// burger


 function openClose(id) {
    var burger = document.getElementById(id);
    if (burger.style.display == 'block'){
				burger.style.display ='none';
		} else {
			burger.style.display = 'block';
		}
}



//función para desplegar sección

function abrir(idContent){

document.getElementById(idContent).style.display = 'block';
}

//función para cerrar sección
function cerrar(idContent){
document.getElementById(idContent).style.display = 'none';
}

// función para completar los campos del formulario
function completar () {
	var namePrompt = prompt("Introduce tu nombre");
	var surnamesPrompt = prompt("Introduce tus apellidos");
	var telephonePrompt = prompt("Introduce tu número de teléfono");
	var dateBirthPrompt = prompt("Introduce tu fecha de nacimiento");
	var emailPrompt = prompt("Introduce tu dirección de correo electrónico");
	var addressPrompt = prompt("Introduce tu dirección de correo postal");

	document.querySelector("#nombrePrompt").innerHTML = namePrompt;
	document.querySelector("#apellidoPrompt").innerHTML = surnamesPrompt;
	document.querySelector("#telefonoPrompt").innerHTML = telephonePrompt;
	document.querySelector("#nacimientoPrompt").innerHTML = dateBirthPrompt;
	document.querySelector("#correoElectronicoPrompt").innerHTML = emailPrompt;
	document.querySelector("#direccionPrompt").innerHTML = addressPrompt;
}
