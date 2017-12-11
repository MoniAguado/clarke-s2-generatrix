'use strict'

// burger

function openClose(idContent) {
	var burger = document.getElementById(idContent);
	if (burger.style.display == 'block'){
		burger.style.display ='none';
	} else {
		burger.style.display = 'block';
	}
}

// desplegables
var collapsableOpen = document.querySelector('.boton-abrir');
function desplegable(){
  collapsableOpen.style.display == 'block'
}
collapsableOpen.addEventListener('click', desplegable);

//función para desplegar sección

function abrir(idContent){
	document.getElementById(idContent).style.display = 'block';
}

//función para cerrar sección
function cerrar(idContent){
	document.getElementById(idContent).style.display = 'none';
}

//función para meses
function selectMonths() {
	var options = '';
	var monthsAll = document.querySelectorAll('.month');
	var meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	];

	for (var i = 0; i < meses.length - 1; i++){
		options += '<option value="'+i+'">' + meses[i]+ '</option>';
	}
	monthsAll.innerHTML+= options;
}
selectMonths();

//función para años
var years = 2018;
var selectYear = '';

for (var i=1950; i<years; i++) {
	selectYear = selectYear + '<option>' + (i) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = selectYear;
};



// función para completar los campos del formulario
// function completar () {
//
// 	var name= document.querySelector ('#box_number').value
// 	var namePrompt = prompt("Introduce tu nombre");
// 	var surnamesPrompt = prompt("Introduce tus apellidos");
// 	var telephonePrompt = prompt("Introduce tu número de teléfono");
// 	var dateBirthPrompt = prompt("Introduce tu fecha de nacimiento");
// 	var emailPrompt = prompt("Introduce tu dirección de correo electrónico");
// 	var addressPrompt = prompt("Introduce tu dirección de correo postal");
//
// 	document.querySelector("#nombrePrompt").innerHTML = namePrompt;
// 	document.querySelector("#apellidoPrompt").innerHTML = surnamesPrompt;
// 	document.querySelector("#telefonoPrompt").innerHTML = telephonePrompt;
// 	document.querySelector("#nacimientoPrompt").innerHTML = dateBirthPrompt;
// 	document.querySelector("#correoElectronicoPrompt").innerHTML = emailPrompt;
// 	document.querySelector("#direccionPrompt").innerHTML = addressPrompt;
// };

var inputFile = document.querySelector('#files');
var trigger = document.querySelector('.trigger');

	// hacemos clic en trigger y llamamos a la funcion
trigger.addEventListener('click', simularClic);

// función para que simule un clic en input
function simularClic(){
	inputFile.click();
}


function archivo(evt) {
	var files = evt.target.files; // FileList object
	//Obtenemos la imagen del campo "file".
	for (var i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
		if (!f.type.match('image.*')) {
			continue;
		}
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				// Creamos la imagen.
				trigger.style = "background-image:url(" + e.target.result + ");";
				document.querySelector(".preview-photo").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			};
		})(f);
		reader.readAsDataURL(f);
	}
}


inputFile.addEventListener('change', archivo);
