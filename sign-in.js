document.addEventListener('DOMContentLoaded', function(){
    const signInPage = document.getElementById('signInPage');

    signInPage.addEventListener('submit', function(event){
        event.preventDefault();

        const emailInput = signInPage.querySelector('input[type="text"]');
        const passwordInput = signInPage.querySelector('input[type="password"]');

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if(emailValue !== '' && passwordValue !== ''){
            window.location.href = 'homepaeg.html';
        }else{
            alert('Please fill out both the email and password fields.');
        }

    });
});