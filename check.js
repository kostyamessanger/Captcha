document.querySelector('button').addEventListener('click', function() {
    const checkbox = document.getElementById('captchaCheckbox');
    const spinner = document.querySelector('.spinner');
    const resultElement = document.getElementById('result');

    if (checkbox.checked) {
        spinner.style.display = 'block';
        // Здесь можно добавить код для взаимодействия с GitHub API
        // Например, отправка запроса на проверку капчи
        setTimeout(() => {
            spinner.style.display = 'none';
            resultElement.innerText = 'Капча пройдена!';
        }, 10000);
    } else {
        resultElement.innerText = 'Капча не пройдена. Попробуйте еще раз.';
    }
});
 
