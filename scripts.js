document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    // Show registration form
    showRegister.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        clearMessages();
    });

    // Show login form
    showLogin.addEventListener('click', () => {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        clearMessages();
    });

    // Handle registration form submission
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (localStorage.getItem(username)) {
            registerMessage.textContent = 'Username already exists!';
        } else {
            const userData = { username, email, password };
            localStorage.setItem(username, JSON.stringify(userData));
            registerMessage.textContent = 'Registration successful!';
            registerMessage.style.color = 'green';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUser = localStorage.getItem(username);
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = 'green';
            } else {
                loginMessage.textContent = 'Incorrect password!';
            }
        } else {
            loginMessage.textContent = 'User not found!';
        }
    });

    // Clear messages
    function clearMessages() {
        loginMessage.textContent = '';
        registerMessage.textContent = '';
    }
});