
const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');

const registerButton = document.getElementById('register-button');
const registerForm = document.getElementById('register-form');

loginButton.addEventListener('click', () => {
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = 'none';
});

registerButton.addEventListener('click', () => {
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = 'none';
});

const checkInButton = document.getElementById('check-in');
const checkOutButton = document.getElementById('check-out');
function showDatePicker(button) {
    if (!button.datepicker) {

        const datepicker = new Datepicker(button, {
            autohide: true, 
            onHide: () => {
                
            }
        });
        datepicker.show(); 
        button.datepicker = datepicker;
    }
}

checkInButton.addEventListener('click', () => {
    showDatePicker(checkInButton);
});

checkOutButton.addEventListener('click', () => {
    showDatePicker(checkOutButton);
});
