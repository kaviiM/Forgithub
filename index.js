// Project for Git - Sample index.js

console.log("Hello from Git! index.js loaded successfully 🎉");

function showMessage() {
    const msg = document.getElementById('msg');
    if (msg) {
        msg.innerHTML = "Git init Success! Now you are tracking this file 🎉";
        msg.style.color = "#0a4d8c";
        msg.style.fontWeight = "bold";
    }
}

window.onload = function() {
    console.log("Page loaded!");
    console.log("Project: AWS SAA-NR - Project for Git");
};

function welcomeUser(name) {
    return `Welcome ${name}! Happy Learning Git!`;
}

console.log(welcomeUser("Vishnu"));