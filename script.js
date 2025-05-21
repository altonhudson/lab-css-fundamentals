const validate = () => {

// Validate name is not an emptry string
let name = document.getElementById("name").value;
//console.log(name);
if (name == "") {
    alert("Please enter full name");
    return false;
}



// Validating email address is entered
let email = document.getElementById("email").value;
//console.log(email)
if (email == "" || email.includes("@") == false) {
    alert("Please enter a valid email");
    return false;
}

//validating password length is greater than 6 characters
let password = document.getElementById("password").value;
//console.log(password)
if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
}
//validating one of the gender radio button is selected
let gender = document.querySelector('input[name="gender"]:checked');
//console.log(gender)
if (!gender) {
    alert("Please select a gender.")
    return false;
}
// validing date of birth is selected. 
let dob = document.getElementById("dob").value;
//console.log(dob)
if (dob === "") {
    alert("Please enter your date of birth")
    return false;
}
//validating terms and conditions is selected
let terms = document.getElementById("terms");
console.log(terms)
if (!terms.checked) {
    alert("Please agree to terms to continue");
    return false;
}
return true;
}
//Event to ensure all fields are filled out in order for user to register form
let submit = document.getElementById("submitbutton");

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (validate()) {
        document.querySelector("form").reset();
    }
});
