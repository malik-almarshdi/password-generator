const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordField = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const themeToggle = document.getElementById("themeToggle");

// تحديث الرقم عند تحريك السلايدر
lengthSlider.addEventListener("input", () => {
lengthValue.textContent = lengthSlider.value;
});

// توليد الباسورد
function generatePassword(){

let length = lengthSlider.value;

let characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password = "";

for(let i=0;i<length;i++){
password += characters.charAt(
Math.floor(Math.random()*characters.length)
);
}

passwordField.value = password;

checkStrength(password);

}

// نسخ الباسورد
function copyPassword(){

passwordField.select();

document.execCommand("copy");

let msg = document.getElementById("copyMsg");

msg.textContent = "Copied ✓";

msg.style.opacity = "1";

setTimeout(() => {
msg.style.opacity = "0";
},1500);

}

// فحص قوة الباسورد
function checkStrength(password){

let strength = password.length;

if(strength < 10){
strengthBar.style.width = "33%";
strengthBar.style.background = "red";
}

else if(strength < 18){
strengthBar.style.width = "66%";
strengthBar.style.background = "orange";
}

else{
strengthBar.style.width = "100%";
strengthBar.style.background = "green";
}

}

// Dark Mode
themeToggle.addEventListener("click", () => {

document.documentElement.classList.toggle("dark");

});