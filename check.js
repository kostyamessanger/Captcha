function checkCaptcha() {
    const checkbox = document.getElementById('captchaCheckbox');
    const resultElement = document.getElementById('result');

    if (checkbox.checked) {
        resultElement.innerText = 'Капча пройдена!';
    } else {
        resultElement.innerText = 'Капча не пройдена. Попробуйте еще раз.';
    }
}
 
