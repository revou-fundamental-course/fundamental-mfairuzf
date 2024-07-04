function replaceName() {
    let username = prompt("Siapakah namamu?", "");
    console.log("Username entered:", username);  // Debugging
    let usernameElement = document.getElementById("username")
    console.log("Element found:", usernameElement);  // Debugging
    if (usernameElement) {
        usernameElement.innerHTML = username;
    }
}

replaceName();

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("This can't be blank!");
        return false
    }

    setSendurUI(name, birthDate, gender, messages);
    
    return false
}

function setSendurUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}