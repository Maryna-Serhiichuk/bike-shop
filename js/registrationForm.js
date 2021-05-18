const nameRegistr = document.querySelector('#name-registr');
const emailRegistr = document.querySelector('#email-registr');
const passwordRegistr = document.querySelector('#password-registr');
const conPasswordRegistr = document.querySelector('#confirm-password-registr');

let nameRegistrVal;
let emailRegistrVal;
let passwordRegistrVal;
let conPasswordRegistrVal;

let data;
let buttonRegistr = document.querySelector('#registration__button');
let numMessage;
let messageText = document.querySelectorAll('.regitr-message__text');

buttonRegistr.addEventListener('click', function(e) {
	e.preventDefault();

	nameRegistrVal = nameRegistr.value.trim();
	emailRegistrVal = emailRegistr.value.trim();
	passwordRegistrVal = passwordRegistr.value.trim();
	conPasswordRegistrVal = conPasswordRegistr.value.trim();

	checkInputs();
})

function checkInputs() {
	numMessage = 0;

	if(nameRegistrVal === '' || nameRegistrVal == ' ' || nameRegistrVal.length <= 2){
		controlFalse(nameRegistr, "Name cannot be blank");
		return false
	} else {
		controlTrue(nameRegistr);
	}

	if (emailRegistrVal == ''){
		controlFalse(emailRegistr, "Email cannot be blank");
		return false
	} else if (!validateEmail(emailRegistrVal)) {
		controlFalse(emailRegistr, "Email is not valid"); //
		return false
	} else{
		controlTrue(emailRegistr);
	}

	if(passwordRegistrVal == ''){
		controlFalse(passwordRegistr, "Password cannot be blank");
		return false
	} else if (passwordRegistrVal.length < 8){
		controlFalse(passwordRegistr, "Password is not valid"); //
		return false
	} else {
		controlTrue(passwordRegistr);
	}

	if(conPasswordRegistrVal == ''){
		controlFalse(conPasswordRegistr, "Password cannot be blank");
		return false
	} else if (conPasswordRegistrVal !== passwordRegistrVal) {
		controlFalse(conPasswordRegistr, "Password does not match"); //
		return false
	} else {
		controlTrue(conPasswordRegistr);
	}

	setLocalStorage();

}

function controlFalse(input, message){
	input.classList.remove('true-registr');
	input.classList.add('error-registr');

	messageText[numMessage].innerText = message;

}

function controlTrue(input){
	input.classList.remove('error-registr');
	input.classList.add('true-registr');

	messageText[numMessage].innerText = '';
	numMessage++;
}

function validateEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setLocalStorage() {
	data = {
		"name": nameRegistrVal,
		"email": emailRegistrVal,
		"password": passwordRegistrVal
	}

	localStorage.setItem(emailRegistrVal, JSON.stringify(data));
	let dataGet = localStorage.getItem(emailRegistrVal);
	dataGet = JSON.parse(dataGet);
	console.log(dataGet);
}