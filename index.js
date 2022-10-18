const mapInput = (inputClass, displayClass) => {
	input = document.getElementsByClassName(inputClass)[0];
	
	input.addEventListener("input", () => {
		document.getElementsByClassName(displayClass)[0].innerHTML = input.value;
	});
}


//mapInput('nameInput', 'displayedName')
mapInput('CVC', 'displayedCVC')

cardNumberInput = document.getElementsByClassName('cardNumberInput')[0];
cardNumberInput.addEventListener('input', () => {
	document.getElementsByClassName('displayedCardNumber')[0].innerHTML = cardNumberInput.value;
})

nameInput = document.getElementsByClassName('nameInput')[0];
nameInput.addEventListener('input', () => {
	document.getElementsByClassName('displayedName')[0].innerHTML = nameInput.value
})