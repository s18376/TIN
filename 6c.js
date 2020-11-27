function validateForm() {
    const emailError = document.querySelector('#mail + span.error');
    
    document.myForm.addEventListener('submit', function (event) {
        let nmb = validateNumber();
        let mail = validateEmail();
        
        if (!nmb) {
            document.myForm.Numb.className = 'invalid';
        } else {
            document.myForm.Numb.className = '';
        }

        if (!mail) {
            document.myForm.mail.className = 'invalid';
            emailError.textContent = 'Entered email incorrect.';
        } else {
            document.myForm.mail.className = '';
            emailError.innerHTML = '';
        }

        event.preventDefault();
    });
}

function validateNumber() {
    let x = document.myForm.Numb.value;

    if (isNaN(Number.parseInt(x))) {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {

    if (document.myForm.mail.value == "") {
        return false;
    }

    let emailID = document.myForm.mail.value;
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailID.match(mailformat)) {
        console.log(emailID)
        return true;
    }
    return false;
}
