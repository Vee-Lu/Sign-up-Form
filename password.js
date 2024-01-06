var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm_password");
var invalidMessage = document.getElementById("invalid");

//If we made any changed to confirm password, and if it doesn't match the original password, show an error
confirmPassword.addEventListener("change", function () {
    if (confirmPassword.value != password.value) {
        confirmPassword.style.borderColor = "rgb(224, 6, 6)";
        confirmPassword.style.borderWidth = "2px";

        invalidMessage.innerText = "*Passwords must match";
        invalidMessage.style.color = "rgb(224, 6, 6)";
    }
    else {
        confirmPassword.style.borderColor ="#bdc1c8";
        confirmPassword.style.borderWidth = "1px";

        invalidMessage.innerText = "";
    }
});

//If we made any changes to  password, and if it doesn't match the original password, show an error
password.addEventListener("change", function () {
    if (confirmPassword.value != password.value) {
        confirmPassword.style.borderColor ="rgb(224, 6, 6)";
        confirmPassword.style.borderWidth = "2px";

        invalidMessage.innerText = "*Passwords must match";
        invalidMessage.style.color = "rgb(224, 6, 6)";
    }
    else {
        confirmPassword.style.borderColor ="#bdc1c8";
        confirmPassword.style.borderWidth = "1px";

        invalidMessage.innerText = "";
    }
});



