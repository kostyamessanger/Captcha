function checkCaptcha() {
    const checkbox = document.getElementById('captchaCheckbox');
    const spinner = document.querySelector('.spinner');
    const resultElement = document.getElementById('result');

    if (checkbox.checked) {
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            resultElement.innerText = 'Капча пройдена!';
        }, 10000);
    } else {
        spinner.style.display = 'none';
        resultElement.innerText = 'Капча не пройдена. Попробуйте еще раз.';
    }
}
 
