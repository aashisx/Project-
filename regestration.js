function validation() {
    var name = document.getElementById("name")
    var lastname = document.getElementById("last-name")
    var number = document.getElementById("no.")
    var email = document.getElementById("email")
    var confirmemail = document.getElementById("confirm-email")



    if (!name.value || !lastname.value || !number.value || !email.value || !confirmemail.value) {
        alert("fields are missing");
        return false
    }
    if (number.value.length < 10) {
        alert("phone number must be 10 character long")
        return false
    }
    if (!email.value.includes('@')) {
        alert("Email must  contain @")
        return false
    } if(email.value != confirmemail.value){
        alert("Emails do not match")
        return false
    }
    return true;
}