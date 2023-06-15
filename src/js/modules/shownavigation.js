// всплытие главного меню
const navigationButton = document.querySelector('.menu__button');
const navigationList = document.querySelector('.navigation');

function showNavigation() {
    navigationButton.addEventListener('mouseover', evt => {
        if (!navigationList.classList.contains('navigation__show')) {
            navigationList.classList.add('navigation__show');
        }
    })
    navigationList.addEventListener('mouseleave', evt => {
        if (navigationList.classList.contains('navigation__show')) {
            navigationList.classList.remove('navigation__show');
        }
    })
}

module.exports = showNavigation;