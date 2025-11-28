const passwordInput = document.getElementById("password");
const strengthLabel = document.getElementById("strength-label");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const togglePassword = document.getElementById("togglePassword");
const generateBtn = document.getElementById("generateBtn");

passwordInput.addEventListener("input", updateStrength);

function updateStrength() {
    const pwd = passwordInput.value;

    let strength = 0;
    if (pwd.length >= 6) strength++;
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) strength++;

    resetBars();

    if (strength === 1) {
        bar1.style.background = "red";
        strengthLabel.innerText = "Weak";
        strengthLabel.style.color = "red";
    } else if (strength === 2) {
        bar1.style.background = "orange";
        bar2.style.background = "orange";
        strengthLabel.innerText = "Medium";
        strengthLabel.style.color = "orange";
    } else if (strength === 3) {
        bar1.style.background = "green";
        bar2.style.background = "green";
        bar3.style.background = "green";
        strengthLabel.innerText = "Strong";
        strengthLabel.style.color = "green";
    } else {
        strengthLabel.innerText = "N/A";
    }
}

function resetBars() {
    bar1.style.background = "#d3d3d3";
    bar2.style.background = "#d3d3d3";
    bar3.style.background = "#d3d3d3";
}

// Toggle Password Visibility
togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
});

// Generate Strong Password
generateBtn.addEventListener("click", () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?:{}";
    let newPass = "";
    for (let i = 0; i < 12; i++) newPass += chars[Math.floor(Math.random() * chars.length)];

    passwordInput.value = newPass;
    updateStrength();
});
