// смена цвета ссылок footer
const socialLinks = Array.from(document.querySelectorAll('.network__text'));

function changeSocialLinks() {
    for (let item of socialLinks) {
        item.addEventListener('mouseover', evt => {
            item.style.color = '#f37120';
        });

        item.addEventListener('mouseleave', evt => {
            item.style.color = '#ffffff';
        });
    }
}

module.exports = changeSocialLinks;