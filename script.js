
/* login-button-2 function to switch Login to: "Logout" */
var loginButton = document.querySelector(".login-button-2");

function  logSwitch() {
    if(loginButton.innerText == "Logout") {
        loginButton.innerText = "Login"
    }
else {
    loginButton.innerText = "Logout"
}    
}




/* add-def-button-8 emoves Add Definition button when clicked */
function removeMe(element) {
    element.remove();
}


