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


// desplegables sin onclick
var botones = document.querySelectorAll('.boton-abrir');
function desplegable(event){
	// llamo al evento
	// currentTarget coge el elemento (en este caso un boton) que dispara el evento. Le ponemos data-plus porque queremos que busque la id del elemento que tiene que mostrar
	var plusId = event.currentTarget.getAttribute('data-idDesplegar');
	// data-plus: identificador del elemento, que queremos que se replique en el resto de elementos
	// hacemos una variable para crear el selector, event.currentTarget es el elemento que dispara el evento (hacer click)
	var cuadro = document.getElementById(plusId);
	if (cuadro.style.display == 'block'){
		cuadro.style.display = 'none';
	} else {
		cuadro.style.display = 'block';
	}
}
for (i=0; i<botones.length; i++){
	botones[i].addEventListener('click', desplegable);
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

// IMAGEN
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
