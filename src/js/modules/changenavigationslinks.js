// смена цвета в при наведении в навигации
const navigationLinks = Array.from(document.querySelectorAll('.link__text'));

function changeNavigationLinks() {
    for (let item of navigationLinks) {
        item.addEventListener('mouseover', evt => {
            item.style.color = '#0488db';
        });

        item.addEventListener('mouseleave', evt => {
            item.style.color = '#ffffff';
        });
    }
}

module.exports = changeNavigationLinks;