// перемещение по клику навигации
const elements = Array.from(document.getElementsByTagName('section'));
const navigationLinks = Array.from(document.querySelectorAll('.link__text'));
const navigationList = document.querySelector('.navigation');

function navigationClick() {
    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener('click', evt => {
            elements[i].scrollIntoView({block: 'start', behavior: 'smooth'})
            navigationList.classList.remove('navigation__show');
        })
    }
}

module.exports = navigationClick;