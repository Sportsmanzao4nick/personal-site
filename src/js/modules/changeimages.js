const wrapper = document.querySelector('.wallpaper__wrapper');
const images = Array.from(document.querySelectorAll('.wallpaper'));

function changeImage() {
    let i = 0;
    images[i].classList.add('wallpaper__show');
    setInterval(() => {
        if (i === 3) {
            images[i].classList.remove('wallpaper__show');
            i = 0;
            images[i].classList.add('wallpaper__show');
        } else {
            i++;
            images[i - 1].classList.remove('wallpaper__show');
            images[i].classList.add('wallpaper__show');
        }
    }, 2000)
}

module.exports = changeImage;