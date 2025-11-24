const password = document.getElementById("password");
const strengthText = document.getElementById("strength-text");

const ruleLength = document.getElementById("rule-length");
const ruleLower = document.getElementById("rule-lower");
const ruleUpper = document.getElementById("rule-upper");
const ruleNumber = document.getElementById("rule-number");
const ruleSpecial = document.getElementById("rule-special");

password.addEventListener("input", () => {
    const value = password.value;

    let strength = 0;

    // Rules
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasLength = value.length >= 8;

    // UI updates
    updateRule(ruleLower, hasLower);
    updateRule(ruleUpper, hasUpper);
    updateRule(ruleNumber, hasNumber);
    updateRule(ruleSpecial, hasSpecial);
    updateRule(ruleLength, hasLength);

    // Strength Logic
    if (hasLower) strength++;
    if (hasUpper) strength++;
    if (hasNumber) strength++;
    if (hasSpecial) strength++;
    if (hasLength) strength++;

    if (value.length === 0) {
        strengthText.textContent = "Strength: ";
    } else if (strength <= 2) {
        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "red";
    } else if (strength === 3 || strength === 4) {
        strengthText.textContent = "Strength: Medium";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strength: Strong";
        strengthText.style.color = "green";
    }
});

function updateRule(element, condition) {
    if (condition) {
        element.style.color = "green";
        element.style.background = "#e6ffe6";
    } else {
        element.style.color = "red";
        element.style.background = "#ffe6e6";
    }
}
