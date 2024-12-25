// password check
const link = document.getElementById("btn");
const inputPassword = document.getElementById("password");
const inputUsername = document.getElementById("username");
const button = document.getElementById("button");
const key = "elkerdasy";

button.addEventListener('click', function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند الضغط على الزر
    if (inputPassword.value && inputUsername.value === key) {
        link.style.display = "block"; // إظهار الرابط
    } else {
        alert("Wrong key");
    }
});

    
   
