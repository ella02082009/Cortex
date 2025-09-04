document.addEventListener('DOMContentLoaded', function(){
    const signInLink = document.getElementById('signInLink');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    signInLink.addEventListener('click', function(event){
       if(emailInput.value.trim() === '' || passwordInput.value.trim() === ''){
        event.preventDefault();

        alert('Please fill out both the email and password fields.');
       }
    });
});

