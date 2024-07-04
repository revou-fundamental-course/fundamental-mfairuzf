/*buat input nama user*/
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

/*buat hamburger menu*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
/*buat autoslider show*/
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const transformValue = `translateX(-${index * 100}%)`;
        slider.style.transform = transformValue;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
});
/*buat validasi form*/
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
/*buat hasil validasi form*/
function setSendurUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}