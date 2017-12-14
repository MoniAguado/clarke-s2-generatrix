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
	var months = document.querySelectorAll('.month');
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
    options += '<option>' + meses[i]+ '</option>';
}
var monthsAll = document.querySelectorAll('.month');
for (var i = 0; i < monthsAll.length; i++) {
	monthsAll[i].innerHTML = options;
};
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


// SECCIÓN GUARDAR DATOS FORMULARIO EN PREVIEW (4FUNCIONES)
function printPersonalDataToPreview() {
 	document.getElementById('name-preview-id').innerHTML = document.getElementById('name').value;
	document.getElementById('surname-preview-id').innerHTML = document.getElementById('surname').value;
	document.getElementById('phone-preview-id').innerHTML = document.getElementById('telephone').value;
	document.getElementById('birthdate-preview-id').innerHTML = document.getElementById('date').value;
	document.getElementById('email-preview-id').innerHTML = document.getElementById('email').value;
	document.getElementById('address-preview-id').innerHTML = document.getElementById('address').value;

	// document.getElementById('Twitter-preview-id').innerHTML = document.getElementById('Twitter').value;
	// document.getElementById('Linkedin-preview-id').innerHTML = document.getElementById('Linkedin').value;
	// document.getElementById('Facebook-preview-id').innerHTML = document.getElementById('Facebook').value;
	// document.getElementById('Otros-preview-id').innerHTML = document.getElementById('Otros').value;
}
document.querySelector('.save-data-button').addEventListener('click',printPersonalDataToPreview);


function printProfessionalExperienceToPreview() {
	document.getElementById('job-preview-id').innerHTML = document.getElementById('puesto').value;
	document.getElementById('from-preview-id').innerHTML =
	document.getElementById('start_month').value + ' ' +
	document.getElementById('start_year').value;
	if (document.getElementById('actualidad').checked) {
		document.getElementById('until-preview-id').innerHTML = 'Diciembre 2017';
	}
	else {
		document.getElementById('until-preview-id').innerHTML =
		document.getElementById('end_month').value + ' ' +
		document.getElementById('end_year').value;
	}
	document.getElementById('place-preview-id').innerHTML = document.getElementById('lugar').value;
	document.getElementById('description-preview-id').innerHTML = document.getElementById('description').value;
}
document.querySelector('.save-experience-button').addEventListener('click',printProfessionalExperienceToPreview);


// function printFormationToPreview() {
// 	document.getElementById('titulo-preview-id').innerHTML = document.getElementById('titulo').value;
// 	document.getElementById('from-formation-preview-id').innerHTML =
// 	document.getElementById('start_month-formation').value + ' ' +
// 	document.getElementById('start_year-formation').value;
// 	if (document.getElementById('actualidad-formation').checked) {
// 		document.getElementById('until-formation-preview-id').innerHTML = 'Diciembre 2017';
// 	}
// 	else {
// 		document.getElementById('until-formation-preview-id').innerHTML =
// 		document.getElementById('end_month-formation').value + ' ' +
// 		document.getElementById('end_year-formation').value;
// 	}
// 	document.getElementById('centro-id').innerHTML = document.getElementById('centro').value;
// 	document.getElementById('description-formation-preview-id').innerHTML = document.getElementById('description-formation').value;
// }
// document.querySelector('.save-formation-button').addEventListener('click',printFormationToPreview);

// function printSkillsToPreview() {
// 	document.getElementById('language-name1-preview-id').innerHTML = document.getElementById('language-name1').value;
// 	document.getElementById('language-level1-preview-id').innerHTML = document.getElementById('language-level1').value;
//
// 	document.getElementById('it-name1-preview-id').innerHTML = document.getElementById('it-name1').value;
// 	document.getElementById('it-level1-preview-id').innerHTML = document.getElementById('it-level1').value;
//
// 	document.getElementById('skill-element1-preview-id').innerHTML = document.getElementById('skill-element1').value;
// }
// document.querySelector('.save-skills-button').addEventListener('click',printSkillsToPreview);


// GENERAR NUEVOS ELEMENTOS A PETICIÓN (experience)_______________________
var idExperienceModifier = 2;
function addItemExperience() {
	var repeatedItemExperience = '<div class="experience-element" id="experience-element' + idExperienceModifier + '"><input class="claseinput" id="puesto" type="text" name="puesto" placeholder="Puesto' + idExperienceModifier + '"><section class="experience-dates"><div class="desde"><label class="label" for="desde">Desde</label><select id="start_month' + idExperienceModifier + '" name="start_month" class="month"></select><select id="start_year' + idExperienceModifier + '" name="start_year" class="year"></select></div><div class="hasta"><label class="label" for="hasta">Hasta</label><select id="end_month' + idExperienceModifier + '" name="end_month" class="month"></select><select id="end_year' + idExperienceModifier + '" name="start_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad' + idExperienceModifier + ' "type="checkbox" name="actualidad"></div></div></section><input class="claseinput" id="lugar'+ idExperienceModifier + '" type="text" name="lugar" placeholder="Lugar"><textarea class="experience-text" id=description' + idExperienceModifier + ' name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea><button type="button" name="button" class="save-experience-button">Guardar</button></div>';

	document.querySelector('.experience-element').insertAdjacentHTML('beforeend', repeatedItemExperience);

	idExperienceModifier++;
}

var newExperienceButton = document.querySelector('.new-experience-button');
newExperienceButton.addEventListener('click',addItemExperience);





// GENERAR NUEVOS ELEMENTOS A PETICIÓN (formation)_______________________
var idFormationModifier = 2;
function addItemFormation() {
	var repeatedItemFormation = '<div class="formation-element" id="formation-element' + idFormationModifier + '"><label class="label" for="titulo"></label><input class="claseinput" id="titulo' + idFormationModifier + '" type="text" name="titulation" placeholder="Título*" required><section class="formation-dates"><div class="desde"><label class="label" for="desde">Desde</label><select id="start_month-formation' + idFormationModifier + '" name="start_month" class="month"></select><select id="start_year-formation' + idFormationModifier + '" name="start_year" class="year"></select></div><div class="hasta"><label class="label" for="hasta">Hasta</label><select id="end_month-formation' + idFormationModifier + '" name="end_month" class="month"></select><select id="end_year-formation' + idFormationModifier + '" name="start_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad-formation' + idFormationModifier + '" type="checkbox" name="actualidad"></div></div></section><label class="label" for="centro"></label><input class="claseinput" id="centro' + idFormationModifier + '" type="text" name="place" placeholder="Centro de estudios*" required><label class="label" for="description"></label><textarea class="description" id="description-formation' + idFormationModifier + '" cols="30" rows="10" name="description" placeholder="Descripción"></textarea><button type="button" name="button" class="save-formation-button">Guardar</button></div>'

	document.querySelector('.formation-element').insertAdjacentHTML('beforeend', repeatedItemFormation);

	idFormationModifier++;
}

document.querySelector('.new-formation-button').addEventListener('click',addItemFormation);


// GENERAR NUEVOS ELEMENTOS A PETICIÓN (idiomas)________________________
var idLanguageModifier = 2;
function addItemLanguage() {
	var repeatedItemLanguage = '<div class="language-element"><label class="label" for="language-name' + idLanguageModifier + '"></label>';
	repeatedItemLanguage+= '<input class="language-name" id="language-name' + idLanguageModifier + '" type="text" name="language-name" placeholder="Idioma ' + idLanguageModifier +'">';
	repeatedItemLanguage+= '<select id="level" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option><option>Nativo</option></select>';
	repeatedItemLanguage+= '</div>';

	var languageElement = document.querySelector('.language-element');

	languageElement.insertAdjacentHTML('beforeend', repeatedItemLanguage);

	idLanguageModifier++;
}

var newLanguageButton = document.querySelector('.new-language-button');
newLanguageButton.addEventListener('click',addItemLanguage);



// // GENERAR NUEVOS ELEMENTOS A PETICIÓN (it)__________________________
var idItModifier = 2;
function addItemIt() {
	var repeatedItemIt = '<div class="it-element"><label class="label" for="it-name' + idItModifier + '"></label><input class="it-name" id="it-name' + idItModifier + '" type="text" name="it-name" placeholder="Tecnología ' + idItModifier + '"><select id="it-level' + idItModifier + '" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option></select></div>';

	var itElement = document.querySelector('.it-element');

	itElement.insertAdjacentHTML('beforeend', repeatedItemIt);

	idItModifier++;
}

var newItButton = document.querySelector('.new-it-button');
newItButton.addEventListener('click',addItemIt);


// GENERAR NUEVOS ELEMENTOS A PETICIÓN (skills)___________________________
var idSkillsModifier = 2;
function addItemSkills() {
	var repeatedItemSkills = '<div class="skills-element"><label class="label" for="skill-element' + idSkillsModifier + '"></label><input class="skills-element claseinput" id="skill-element' + idSkillsModifier +'" type="text" name="skill-element" placeholder="Destreza ' + idSkillsModifier + '"></div>';

	var skillsElement = document.querySelector('.skills-element');

	skillsElement.insertAdjacentHTML('beforeend', repeatedItemSkills);

	idSkillsModifier++;
}

var newSkillsButton = document.querySelector('.new-skills-button');
newSkillsButton.addEventListener('click',addItemSkills);
