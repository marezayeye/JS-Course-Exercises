//defining variables
let userEmail = document.querySelector("#email").value;
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-btn");
const emailWarning = document.querySelector(".email-warning");
const passwordWarning = document.querySelector(".password-warning");
const loginDone = document.querySelector(".login-done");
const loginFailed = document.querySelector(".login-failed");

//adding an event listener to submit button
submitBtn.addEventListener("click", btnHandler);

//handles the main logic and calls needed functions
function btnHandler(event){
    event.preventDefault();
    if (validateEmail() === true && validatePassword() === true){
        console.log("Validation Done");
        sendData();
    } else {
        console.log("Validation Failed");
    };
};

//validates the contents of the email input type
function validateEmail(){
    console.log("Validating Email");
    let emailIsValid = false;
    if(userEmail.length > 0 && userEmail.includes('@') && userEmail.includes('.')){
        emailIsValid = true;
    } else {
        emailIsValid = false;
        emailWarning.innerHTML = `${userEmail} is not a valid Email Address`;
        userEmail = "";
    }
    console.log(emailIsValid);
    return emailIsValid;
};

//validates the contents of the password input type
function validatePassword(){
    console.log("Validating Password");
    const passwordValue = passwordInput.value;
    let passwordIsValid = true;
    if(passwordValue.length === 0 || passwordValue === userEmail){
        passwordWarning.innerHTML = "Invalid or Empty Password ";
        passwordIsValid = false;
        userPwd = "";
    } else {
        passwordIsValid = true;
        }
        return passwordIsValid;
};


//called when the validation done successfully
//sets headers and request body and then checks response
function sendData(){
    const passwordValue = passwordInput.value;
    const requestBody = JSON.stringify({
        username : userEmail,
        password : passwordValue
    });

    const requestHeader = {"Content-Type": "application/json"};
    const requestUrl = "https://jsonplaceholder.ir/posts";
    console.log("Sending Data");
    fetch(requestUrl, {
        method : "POST",
        body : requestBody,
        headers : requestHeader
    })
    .then(response => {
        if(response.ok){
            console.log(response)
            loginDone.innerText = "Login Successfull";
        } else {
            loginFailed.innerText = "Login Unsuccessful";
        }
    })
    };


