//затемнение проектов
const projects = Array.from(document.querySelectorAll('.projects-cell'))

function onMask() {
    for (let item of projects) {
        const infoDiv = item.querySelector('.project-info__hide');
        item.addEventListener('mouseover', evt => {
            if (!infoDiv.classList.contains('project-info__show')) {
                infoDiv.classList.add('project-info__show');
            }
        })

        item.addEventListener('mouseleave', evt => {
            if (infoDiv.classList.contains('project-info__show')) {
                infoDiv.classList.remove('project-info__show');
            }
        })
    }
}

module.exports = onMask;