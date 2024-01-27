function validateForm() {
    console.log("validateForm is called");
    let name = document.getElementById('name').value;
    let email = document.getElementById('Email').value; 
    let phoneNumber = document.getElementById('Phone-number').value;
    let location = document.getElementById('Location').value;
    let message = document.getElementById('Message').value;

    let namePattern = /^[a-zA-Z\s\-\'\`]+$/;
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let phonePattern = /^[+]?[0-9\s\-]+$/;
    let locationPattern = /^[a-zA-Z0-9\s,.-]+$/;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error"); 
    let phoneError = document.getElementById("phone-number-error");
    let locationError = document.getElementById("location-error");
    let messageError = document.getElementById("message-error");

    if (!namePattern.test(name)) {
        nameError.innerText = "Please enter a valid name.";
        return false;
    }
    nameError.innerText = "";

    if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        return false;
    }
    emailError.innerText = "";

    if (!phonePattern.test(phoneNumber)) {
        phoneError.innerText = "Please enter a valid phone number.";
        return false;
    }
    phoneError.innerText = "";

    if (!locationPattern.test(location)) {
        locationError.innerText = "Please enter a valid location.";
        return false;
    }
    locationError.innerText = "";

    if (message.trim() === "") {
        messageError.innerText = "Message cannot be empty.";
        return false;
    }
    messageError.innerText = "";

}

