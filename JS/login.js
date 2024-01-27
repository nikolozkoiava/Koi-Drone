// Regex

function validateForm() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let submittedError = document.getElementById("submitted_successfully");

    if (!emailPattern.test(emailInput)) {
      emailError.innerText = "Please enter a valid email address.";
      return false; 
    }
    emailError.innerText = "";

    if (!passwordPattern.test(passwordInput)) {
      passwordError.innerText = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
      return false; 
    }

    passwordError.innerText = "";

    simulateFormSubmission();

    submittedError.innerText = "Thanks for sign up";

    return false;
}

function simulateFormSubmission() {

    console.log("Simulating form submission...");
}


// Login
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function handleLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let savePasswordIsChecked = document.getElementById('savePassword').checked;
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    let userExists = false;

    let loginForm = document.querySelector('form');

    let timeNow = new Date();
    timeNow.setTime(timeNow.getTime() + (5 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + timeNow.toUTCString();
    
    let sessionToken = generateString(36);

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].email === email && usersData[user].password === password) {
            if (savePasswordIsChecked) {
                document.cookie = `sessionToken=${sessionToken}; ${expires}; path=/`;
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            }

            usersData[user].sessionToken = sessionToken;
            userExists = true;
            break; 
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    if (userExists) {
        window.location.href = 'LoginSuccessfully.html';
    } else {
        window.location.href = 'LoginFaild.html';
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}




