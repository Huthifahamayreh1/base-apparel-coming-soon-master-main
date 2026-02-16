const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
        alert('Success! Thank you for subscribing.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}