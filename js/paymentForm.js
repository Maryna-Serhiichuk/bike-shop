const payListGoodsForm = document.querySelector('#pay-list-goods');
const payListGoodsComent = document.querySelector('#pay-list-goods-coment');

const namePay = document.querySelector('#name-pay');
const surnamePay = document.querySelector('#surname-pay');
const addressPay = document.querySelector('#address-pay');
const cityPay = document.querySelector('#city-pay');
const zipPay = document.querySelector('#zip-pay');
const phonePay = document.querySelector('#phone-pay');
const deliveryAddressPay = document.querySelector('#delivery-address-pay');

const visaTypeCard = document.querySelector('#visa-type-card');
const mastercardTypeCard = document.querySelector('#mastercard-type-card');
const numberCardPay = document.querySelector('#number-card-pay');
const expirationCardPay = document.querySelector('#expiration-card-pay');
const cvvCardPay = document.querySelector('#cvv-card-pay');
const nameCreateAccountPay = document.querySelector('#name-create-account-pay');
const passCreateAccountPay = document.querySelector('#pass-create-account-pay');
const conPassCreateAccountPay = document.querySelector('#con-pass-create-account-pay');

///////////////////////////////////////////////////////////////////////////////////////////

let payListGoodsVal = payListGoodsForm.value.trim();
let payListGoodsComentVal = payListGoodsComent.value.trim();

let namePayVal = namePay.value.trim();
let surnamePayVal = surnamePay.value.trim();
let addressPayVal = addressPay.value.trim();
let cityPayVal = cityPay.value.trim();
let zipPayVal = zipPay.value.trim();
let phonePayVal = phonePay.value.trim();

let deliveryAddressPayVal = deliveryAddressPay.value.trim();

let visaTypeCardVal = visaTypeCard;
let mastercardTypeCardVal = mastercardTypeCard;
let numberCardPayVal = numberCardPay.value.trim();
let expirationCardPayVal = expirationCardPay.value.trim();
let cvvCardPayVal = cvvCardPay.value.trim();

let nameCreateAccountPayVal = nameCreateAccountPay.value.trim();
let passCreateAccountPayVal = passCreateAccountPay.value.trim();
let conPassCreateAccountPayVal = conPassCreateAccountPay.value.trim();

let numPayFormMessage;

let numMessageCreAcc;

let messageTextPayForm = document.querySelectorAll('.payment-message__text');
let messageCreAcc = document.querySelectorAll('.cre-acc-payment-message__text');

let paymentButton = document.querySelector('#payment__button');

let statusPayValidateForm = false;

paymentButton.addEventListener('click', function(e) {
	e.preventDefault();

	payListGoodsVal = payListGoodsForm.value.trim();
	payListGoodsComentVal = payListGoodsComent.value.trim();

	namePayVal = namePay.value.trim();
	surnamePayVal = surnamePay.value.trim();
	addressPayVal = addressPay.value.trim();
	cityPayVal = cityPay.value.trim();
	zipPayVal = zipPay.value.trim();
	phonePayVal = phonePay.value.trim();

	deliveryAddressPayVal = deliveryAddressPay.value.trim();

	visaTypeCardVal = visaTypeCard;
	mastercardTypeCardVal = mastercardTypeCard;
	numberCardPayVal = numberCardPay.value.trim();
	expirationCardPayVal = expirationCardPay.value.trim();
	cvvCardPayVal = cvvCardPay.value.trim();

	nameCreateAccountPayVal = nameCreateAccountPay.value.trim();
	passCreateAccountPayVal = passCreateAccountPay.value.trim();
	conPassCreateAccountPayVal = conPassCreateAccountPay.value.trim();

	payFormValidate();
})

function payFormValidate(){
	numPayFormMessage = 0

	let numbers = /[0-9]/g;
	let letter = /[a-z]/g;
	let upperCaseLetters = /[A-Z]/g;

	// Choose model of bike
	if(payListGoodsVal == ''){
		controlPayFormFalse(payListGoodsForm, "Select the product");
		return false
	} else {
		controlPayFormTrue(payListGoodsForm);
	}

	// First Name
	if(namePayVal == '' || namePayVal.length <= 2){
		controlPayFormFalse(namePay, "Name cannot be blank");
		return false
	} else {
		controlPayFormTrue(namePay);
	}

	// Last Name
	if(surnamePayVal == '' || surnamePayVal.length <= 2){
		controlPayFormFalse(surnamePay, "Last Name cannot be blank");
		return false
	} else {
		controlPayFormTrue(surnamePay);
	}

	// Street Address
	if(addressPayVal == '' || addressPayVal.length <= 2){
		controlPayFormFalse(addressPay, "Address cannot be blank");
		return false
	} else {
		controlPayFormTrue(addressPay);
	}

	// Region
	if(cityPayVal == ''){
		controlPayFormFalse(cityPay, "Enter your city");
		return false
	} else {
		controlPayFormTrue(cityPay);
	}

	// Zip
	if(zipPayVal == '' || zipPayVal.length < 5){
		controlPayFormFalse(zipPay, "Zip cannot be blank");
		return false
	} else if (zipPayVal.match(letter)) {
		controlPayFormFalse(zipPay, "Zip is not has letters");
		return false
	} else {
		controlPayFormTrue(zipPay);
	}

	// Phone
	if(phonePayVal == '' || !phonePayVal.match(numbers)){
		controlPayFormFalse(phonePay, "Phone cannot be blank");
		return false
	} else if (phonePayVal.match(letter)) {
		controlPayFormFalse(phonePay, "Phone is not has letters");
		return false
	} else if (phonePayVal.length < 12 ) {
		controlPayFormFalse(phonePay, "Ukrainian phone has 12 numeric");
		return false
	} else {
		controlPayFormTrue(phonePay);
	}

	// Delivery Address
	if(!deliveryAddressCheckbox.checked){
		if(deliveryAddressPayVal == ''){
			controlFormDesignFalse(deliveryAddressPay);
			document.querySelector('.delivery-address-repeat__message').innerText = "Delivery Address cannot be blank";
			return false
		} else {
			controlFormDesignTrue(deliveryAddressPay);

			document.querySelector('.delivery-address-repeat__message').innerText = '';
		}
	} else {
		deliveryAddressPay.value = 'DELIVERY to HOME';
	}

	// Type of Credit Card
	if(visaTypeCardVal.checked){	
		document.querySelector('.pay-type-card__message').innerText = "";
		localStorage.setItem("typeOfCard", "visa");
	} else if (mastercardTypeCard.checked){
		document.querySelector('.pay-type-card__message').innerText = "";
		localStorage.setItem("typeOfCard", "mastercard");
	} else {
		document.querySelector('.pay-type-card__message').innerText = "Choose the type of your card";
		return false
	}

	// Card number
	if(numberCardPayVal == '' || !numberCardPayVal.match(numbers)){
		controlPayFormFalse(numberCardPay, "Card number cannot be blank");
		return false
	} else if (numberCardPayVal.match(letter)) {
		controlPayFormFalse(numberCardPay, "Card number is not has letters");
		return false
	} else if (numberCardPayVal.length < 12 || numberCardPayVal.length > 12) {
		controlPayFormFalse(numberCardPay, "Card number has 12 numeric");
		return false
	} else {
		controlPayFormTrue(numberCardPay);
	}

	// Expiration
	let sing = '/';
	if(expirationCardPayVal == '' || expirationCardPayVal < 5){
		controlPayFormFalse(expirationCardPay, "Expiration cannot be blank");
		return false
	} else if (expirationCardPayVal.match(letter)) {
		controlPayFormFalse(expirationCardPay, "Expiration is not has letters");
		return false
	} else if (!expirationCardPayVal.match(sing)) {
		controlPayFormFalse(expirationCardPay, "Enter as in the example - 12/06");
		return false
	} else {
		controlPayFormTrue(expirationCardPay);
	}

	//CVV } else if () {
	if(cvvCardPayVal == '' || cvvCardPayVal.length < 3){
		controlPayFormFalse(cvvCardPay, "CVV cannot be blank");
		return false
	} else if (cvvCardPayVal.match(letter)) {
		controlPayFormFalse(cvvCardPay, "CVV is not has letters");
		return false
	} else {
		controlPayFormTrue(cvvCardPay);
	}

	// Create account
	if(createAccountCheckbox.checked){

		numMessageCreAcc = 0;

		// Name
		if(nameCreateAccountPayVal == ''){
			controlInputsCreateAccountFalse(nameCreateAccountPay, "Name cannot be blank");
			return false
		} else {
			controlFormDesignTrue(nameCreateAccountPay);

			controlInputsCreateAccountTrue();
		}

		// Password
		if(passCreateAccountPayVal == ''){
			controlInputsCreateAccountFalse(passCreateAccountPay, "Password cannot be blank");
			return false
		} else if (passCreateAccountPayVal.length < 8){
			controlInputsCreateAccountFalse(passCreateAccountPay, "Password is not valid");
			return false
		} else {
			controlFormDesignTrue(passCreateAccountPay);

			controlInputsCreateAccountTrue();
		}

		// Confirm Password
		if(conPassCreateAccountPayVal == ''){
			controlInputsCreateAccountFalse(conPassCreateAccountPay, "Password cannot be blank");
			return false
		} else if (conPassCreateAccountPayVal != passCreateAccountPayVal){
			controlInputsCreateAccountFalse(conPassCreateAccountPay, "Password does not match");
			return false
		} else {
			controlFormDesignTrue(conPassCreateAccountPay);
			controlInputsCreateAccountTrue();
		}
	} else {
		nameCreateAccountPay.value = 'none';
		passCreateAccountPay.value = 'none';
		conPassCreateAccountPay.value = 'none';
	}

	getLocalStoragePaymentForm();

	location.replace('paymentBlank.html')
}

function getLocalStoragePaymentForm(){
	let itemBlank = document.querySelectorAll('.pay-blank__item-set');
	let setLocalBlank = [];

	for(let i = 0; i < itemBlank.length; i++){
		setLocalBlank.push(itemBlank[i].value.trim())
	}

	localStorage.setItem("dataPayBlank", JSON.stringify(setLocalBlank));

	console.log(setLocalBlank);
}

function controlInputsCreateAccountFalse(input, message){
	controlFormDesignFalse(input);
	textFormCreateAccount(message);
}
function controlInputsCreateAccountTrue(){
	messageCreAcc[numMessageCreAcc].innerText = '';
	numMessageCreAcc++;
}
function textFormCreateAccount(message){
	messageCreAcc[numMessageCreAcc].innerText = message;
}
function controlPayFormFalse(input, message){
	controlFormDesignFalse(input);

	messageTextPayForm[numPayFormMessage].innerText = message;
}

function controlPayFormTrue(input){
	controlFormDesignTrue(input);

	messageTextPayForm[numPayFormMessage].innerText = '';
	numPayFormMessage++;
}

function controlFormDesignFalse(input){
	input.classList.remove('true-registr');
	input.classList.add('error-registr');
}
function controlFormDesignTrue(input){
	input.classList.remove('error-registr');
	input.classList.add('true-registr');
}