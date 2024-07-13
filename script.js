function validateForm() {
    document.getElementById("firstname-error").innerText = "";
    document.querySelector(".errorIcon-firstname").classList.add("hidden");
    
    document.getElementById("lastname-error").innerText = "";
    document.querySelector(".errorIcon-lastname").classList.add("hidden");
  
    document.getElementById("email-error").innerText = "";
    document.querySelector(".errorIcon-email").classList.add("hidden");
  
    document.getElementById("password-error").innerText = "";
    document.querySelector(".errorIcon-password").classList.add("hidden");
  
    let isValid = true;
  
    const firstname = document.getElementById("fname").value;
    if (!firstname) {
      document.getElementById("firstname-error").innerText = "First name cannot be empty";
      document.querySelector(".errorIcon-firstname").classList.remove("hidden");
      isValid = false;
    }
  
    const lastname = document.getElementById("fsurname").value;
    if (!lastname) {
      document.getElementById("lastname-error").innerText = "Last name cannot be empty";
      document.querySelector(".errorIcon-lastname").classList.remove("hidden");
      isValid = false;
    }
  
    const email = document.getElementById("femail").value;
    if (!email) {
      document.getElementById("email-error").innerText = "Email cannot be empty";
      document.querySelector(".errorIcon-email").classList.remove("hidden");
      isValid = false;
    }
  
    const password = document.getElementById("fpassword").value;
    if (!password) {
      document.getElementById("password-error").innerText = "Password cannot be empty";
      document.querySelector(".errorIcon-password").classList.remove("hidden");
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("signupForm").submit();
    }
  }
  