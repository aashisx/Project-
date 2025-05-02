function validation() {
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    if (!username.value || !password.value) {
        alert("fields are missing");
        return false
    }
    if (password.value.length < 4) {
        alert("password must be atleast 5 character long")
        return false
    }
    if (!username.value.includes('@')) {
        alert("username must  contain @")
        return false
    }
    return true;
}