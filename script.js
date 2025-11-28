function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strengthText");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    let strength = 0;

    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Reset bars
    bar1.style.background = bar2.style.background = bar3.style.background = "lightgray";

    if (strength === 1) {
        bar1.style.background = "red";
        strengthText.innerText = "Strength: Weak";
    } else if (strength === 2) {
        bar1.style.background = "yellow";
        bar2.style.background = "yellow";
        strengthText.innerText = "Strength: Medium";
    } else if (strength === 3) {
        bar1.style.background = "green";
        bar2.style.background = "green";
        bar3.style.background = "green";
        strengthText.innerText = "Strength: Strong";
    } else {
        strengthText.innerText = "Strength: ";
    }
}

function togglePassword() {
    const input = document.getElementById("password");
    const btn = document.getElementById("toggleBtn");

    if (input.type === "password") {
        input.type = "text";
        btn.innerText = "Hide";
    } else {
        input.type = "password";
        btn.innerText = "Show";
    }
}

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;
    checkPasswordStrength();
}
