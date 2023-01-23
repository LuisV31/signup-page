const pw = document.querySelector('#pass');
const pwCon = document.querySelector('#confirm-pass');
const pwConError =document.querySelector('#confirm-pass-error');

pwCon.addEventListener('input', () => {
    if (pwCon.value !== pw.value) {
        pwConError.textContent = 'Passwords do not match';
    } else {
        pwConError.textContent = '';
    }
})
