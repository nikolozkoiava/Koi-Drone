function registration() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;

  let oldUsersData = localStorage.getItem('usersData');
  oldUsersData = JSON.parse(oldUsersData);

  let user = {
      email: email,
      password: password,
      password2: password2,
  }

  if (oldUsersData.some(existingUser => existingUser.password === password)) {
      let errorMessage = document.getElementById("password-error");
      errorMessage.style.color = "red";
      errorMessage.innerHTML = "This password is already used!";
  } else {
      oldUsersData.push(user);
      localStorage.setItem('usersData', JSON.stringify(oldUsersData));
      window.location.href = "./Login.html";
  }
}

// reCAPTCHA
document.getElementById('myForm').addEventListener('submit', function(event) {
    let recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
      alert('Please complete the reCAPTCHA challenge.');
      event.preventDefault(); 
    }
  });

//   unclock and lock password
  let iconLock1 = document.getElementById("iconLock1");
  let iconLock2 = document.getElementById("iconLock2");
  let password1 = document.getElementById("password");
  let password2 = document.getElementById("password2");
  
  iconLock1.onclick = function () {
    togglePasswordVisibility(password1, iconLock1);
  };
  
  iconLock2.onclick = function () {
    togglePasswordVisibility(password2, iconLock2);
  };
  
  function togglePasswordVisibility(passwordInput, iconLock) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      iconLock.classList.remove('fa-lock');
      iconLock.classList.add('fa-lock-open');
    } else {
      passwordInput.type = 'password';
      iconLock.classList.remove('fa-lock-open');
      iconLock.classList.add('fa-lock');
    }
  }
// Verification
  function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    let emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let submittedError = document.getElementById("submitted_successfully");

   if(!emailPattern.test(email)){
    emailError.innerText = "Please enter a valid email address.";
    return false;
   }
   emailError.innerText = "";

   if(!passwordPattern.test(password)) {
    passwordError.innerText = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    return false;
   }
   passwordError.innerText = "";

   if(password2 !== password) {
    passwordError.innerText = "Two different passwords"
    return false;
   }
   passwordError.innerText = "";

   FormSubmission();

   submittedError.innerText = "submitted successfully"

   return false;
}
function FormSubmission(){
}


