document.addEventListener('DOMContentLoaded', function(){
    const signUpLink = document.getElementById('signUpLink');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    signUpLink.addEventListener('click', function(event){
       if(emailInput.value.trim() === '' || passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === ''){
        event.preventDefault();

        alert('Please fill out all fields.');
       }
    });
});