let sessionToken = sessionStorage.getItem('sessionToken');
let usersData = JSON.parse(localStorage.getItem('usersData'));
console.log(sessionToken);

let welcomeMessage = document.createElement('h3');

let loggedInUserData = {};

let documentCookie = document.cookie;


if (documentCookie.length > 0) {
    let indexOfEqualSign = documentCookie.indexOf('=');
    sessionToken = documentCookie.slice(indexOfEqualSign + 1);
}

let resultText = document.getElementById("result");

if (sessionToken) {
    resultText.innerHTML = "Login Success";
    

    for (let user of usersData) {
        console.log(user.sessionToken, sessionToken);
        if (user.sessionToken === sessionToken) {
            loggedInUserData = user;
        }
    }
    console.log(loggedInUserData);

    welcomeMessage.innerHTML = `Welcome ${loggedInUserData.firstName}! with surname ${loggedInUserData.lastName}`;

    document.body.appendChild(welcomeMessage);
} else {
    resultText.innerHTML = "You need to be logged in to access this page!";
}
