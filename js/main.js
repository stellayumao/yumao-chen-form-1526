let fm = document.querySelector("form");
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let ms = document.getElementById("message");
let btn = document.getElementById("submit-button");


let emailfilter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function validateForm() {
	console.clear();
	
	let errors = [];
	let collectedData = {};
	
	if (fn.value !== "") {
        collectedData.fname = fn.value;
    } else {
        errors.push("Full name is missing");
    }
	
	if (em.value !== "") {
		if (emailfilter.test(email.value)) {
			collectedData.email = em.value;
		} else {
			errors.push("INVALID EMAIL FORMAT");
		}
    } else {
        errors.push("Email is missing");
    }
	
	if (ms.value !== "") {
        collectedData.message = ms.value;
    } else {
        errors.push("Message is missing");
    }
	
	if (errors.length === 0) {
        console.log(collectedData);
        fm.reset();
    } else {
		console.log(errors);
	}
}



btn.addEventListener("click", validateForm);