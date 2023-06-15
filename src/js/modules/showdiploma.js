//вызов модального окна
const diplomaIcons = Array.from(document.querySelectorAll('.diploma-icon'));
const medalIcons = Array.from(document.querySelectorAll('.medal-icon'));
const modal = document.querySelector('.modal');
const header = document.querySelector('.diploma__header');
const img = document.querySelector('.diploma__img');

function showDiploma() {
    for (let item of diplomaIcons) {        
        item.addEventListener('click', evt => {            
                modal.style.display = 'block';
                switch (item.parentElement.parentElement.firstElementChild.textContent) {
                    case 'Alfa Campus' :
                        header.textContent = 'Alfa Campus';
                        img.src = 'src/images/diploms/alfa-campus.png';
                        return;
                    case 'Институт Физики Металлов (ИФМ УрО РАН)' :
                        header.textContent = 'ИФМ';
                        img.src = 'src/images/diploms/imp.jpg';
                        return;
                    case 'Образовательная онлайн-платформа Нетология' :
                        header.textContent = 'Нетология';
                        img.src = 'src/images/diploms/netology.png';
                        return;
                }
            }
        )
    }
    for (let i = 0; i < medalIcons.length; i++) {
        medalIcons[i].addEventListener('click', evt => {
            modal.style.display = 'block';
            switch (i) {
                case 0:
                    header.textContent = 'Умник диплом';
                    img.src = 'src/images/diploms/umnik1.jpg';
                    return;
                case  1:
                    header.textContent = 'Умник сертификат о прохождении программы';
                    img.src = 'src/images/diploms/umnik2.jpg';
            }
        })
    }
}

module.exports = showDiploma;