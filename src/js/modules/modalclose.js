//закрытие модального окна
const buttonCLose = document.querySelector('.button__close');
const modal = document.querySelector('.modal');

function modalClose() {
    buttonCLose.addEventListener('click', evt => {
        modal.style.display = 'none';
    })
}

module.exports = modalClose;