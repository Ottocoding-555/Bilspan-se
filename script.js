const formParts = document.querySelectorAll('.formPart');
const progressBar = document.getElementById('progressBar');
let currentPart = 0;

function nextPart(partIndex) {
    if (validatePart(partIndex)) {
        formParts[partIndex].classList.remove('active');
        currentPart++;
        if (currentPart < formParts.length) {
            formParts[currentPart].classList.add('active');
        }
        updateProgressBar();
    }
}

function prevPart(partIndex) {
    if (partIndex > 0) {
        formParts[partIndex].classList.remove('active');
        currentPart--;
        formParts[currentPart].classList.add('active');
        updateProgressBar();
    }
}

function submitForm() {
    if (validatePart(currentPart)) {
        alert("Tack för dina svar!"); // Placeholder for form submission
        // Here you could implement actual form submission logic
    }
}

function validatePart(partIndex) {
    const part = formParts[partIndex];
    const inputs = part.querySelectorAll('input[type="radio"]:checked');
    if (inputs.length === part.querySelectorAll('.question').length) {
        return true;
    } else {
        alert("Vänligen besvara alla frågor i denna del.");
        return false;
    }
}

function updateProgressBar() {
    const progress = (currentPart + 1) / formParts.length * 100;
    progressBar.style.width = `${progress}%`;
}