//всплытие языкового меню
const languageButton = document.querySelector('.language__button');
const languageList = document.querySelector('.language__list');

function showLanguage() {
    languageButton.addEventListener('click', evt => {
        languageList.style.display = 'flex';
    })
}

module.exports = showLanguage;