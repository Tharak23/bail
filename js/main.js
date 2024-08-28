document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'lawyer' && password === 'lawyer') {
        window.location.href = 'lawyer-dashboard.html';
    } else if (username === 'judge' && password === 'judge') {
        window.location.href = 'judge-dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});
