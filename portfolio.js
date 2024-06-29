
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank for visiting');

// form validate
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        setTimeout(function() {
            alert('Message sent successfully!');
            form.reset();
        }, 500);
    });
});

