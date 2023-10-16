//Настройка языка
const languageItems = Array.from(document.querySelectorAll('.language__item'));
const languageButton = document.querySelector('.language__button');
const languageList = document.querySelector('.language__list');
let currentLang = "ru";

function language() {
    const languageArr = {
        "name-title": {
            ru: "Сергей Лучко",
            en: "Sergey Luchko",
        },
        "language_button": {
            ru: "язык",
            en: "language",
        },
        "navigation__link-about": {
            ru: "о себе",
            en: "about",
        },
        "navigation__link-careers": {
            ru: "опыт",
            en: "careers",
        },
        "navigation__link-projects": {
            ru: "мои проекты",
            en: "my projects",
        },
        "navigation__link-networks": {
            ru: "контакты",
            en: "networks",
        },
        "main-title": {
            ru: "Сергей Лучко",
            en: "Sergey Luchko",
        },
        "main-text": {
            ru: "31 год, frontend-разработчик, проживающий в г. Екатеринбурге, Россия.",
            en: "31 years old, frontend-developer living in Yekaterinburg, Russia.",
        },
        "description-header": {
            ru: "о себе",
            en: "about",
        },
        "description-text__main": {
            ru: "Моя цель – полностью перейти в сферу frontend-разработки и стать настоящим профессионалом в этой области.\n Прошел обучение на онлайн-платформе «Нетология» (12 месяцев), далее прошел отбор (из 2108 заявок взяли 30 человек) на стажировку в «Альфа-Банк» (4 месяца), поучаствовал в нескольких стартапах и сейчас нахожусь в поиске полноценного места работы.",
            en: "My goal is to completely move into the field of frontend development and become a true professional in this field. I completed training on the online platform «Netology» (12 months), then went through a selection process (out of 2108 applications, 30 people were chosen) for an internship at «Alpha Bank» (4 months), participated in several startups, and currently, I am looking for a full-time job."
        },
        "description-text__minor": {
            ru: "Знание английского – B2. Люблю спорт – играю в Екатеринбургской хоккейной лиге дивизион «Любитель»(победители сезона 2021-2022гг.), катаюсь на сноуборде; путешествую по России и миру; слушаю различную музыку и посещаю концерты любимых исполнителей.",
            en: "I have a B2 level of English proficiency. I enjoy sports - I play in the Yekaterinburg Hockey League, Division «Amateur» (winners of the 2021-2022 season), I love snowboarding, travel around Russia and the world, listen to various music genres, and attend concerts of my favorite artists."
        },
        "careers-header": {
            ru: "опыт",
            en: "careers",
        },
        "careers-header__work": {
            ru: "опыт работы",
            en: "work experience",
        },
        "place-work__gdeparking": {
            ru: "Стартап ГдеПаркинг",
            en: "Startup GdeParking",
        },
        "date-work__gdeparking": {
            ru: "август 2023 — н.в.",
            en: "august 2023 — present",
        },
        "header-work__gdeparking": {
            ru: "Frontend-разработчик",
            en: "Frontend-developer",
        },
        "maintext-gdeparking": {
            ru: "ГдеПаркинг – web-приложение для поиска свободного парковочного места во дворах, используя веб-камеры во дворе и ИИ, который определяет свободные места. Принимал участие в проекте в качестве основного frontend-разработчика, где решал следующие задачи:",
            en: "GdeParking is a web application for finding a free parking space in courtyards using webcams in the courtyard and an AI that detects vacant spaces. I participated in the project as the main frontend developer, where I addressed the following tasks:",
        },
        "skill1-work__gdeparking": {
            ru: "верстка основных страниц веб-приложения и различных всплывающих окон по макету;",
            en: "layout of the main web application pages of the web application and various pop-up windows according to the design;",
        },
        "skill2-work__gdeparking": {
            ru: "получение данных о камерах с сервера и добавление новых камер через форму отправки данных.",
            en: "fetching camera data from the server and adding new cameras through a data submission form.",
        },
        "place__gdeparking": {
            ru: "Москва",
            en: "Moscow",
        },
        "place-work__volkov": {
            ru: "ИП Волков Дмитрий Витальевич",
            en: "IP Volkov Dmitry Vitalievich",
        },
        "date-work__volkov": {
            ru: "январь 2023 — август 2023",
            en: "january 2023 — august 2023",
        },
        "header-work__volkov": {
            ru: "Frontend-разработчик",
            en: "Frontend-developer",
        },
        "maintext-work__volkov": {
            ru: "Принимал активное участие в разработке веб-приложений, где выполнял следующие задачи:",
            en: "Took an active part in the development of web applications, where performed the following tasks:",
        },
        "skill1-work__volkov": {
            ru: "проектирование и верстка внешнего вида основных страниц веб-приложений, а также окон авторизации. Для этого использовали чистый JavaScript и React, а также библиотеки MUI и Bootstrap для обеспечения современного и адаптивного дизайна;",
            en: "design and layout of the visual appearance of the main pages of web applications, as well as authentication windows. This was done using pure JavaScript and React, along with MUI and Bootstrap libraries to ensure a modern and responsive design;",
        },
        "skill2-work__volkov": {
            ru: "реализация навигации по страницам веб-приложений при помощи библиотеки React Router.",
            en: "implementation of page navigation for web applications using the React Router library.",
        },
        "place__volkov": {
            ru: "Екатеринбург",
            en: "Yekaterinburg",
        },
        "date-work__alfa": {
            ru: "ноябрь 2022 — март 2023",
            en: "november  2022 — march  2023",
        },
        "header-work__alfa": {
            ru: "Студент факультета «Frontend-разработка» (Junior frontend-разработчик)",
            en: "Student of the faculty «Frontend-development» (Junior frontend-developer)",
        },
        "maintext-work__alfa": {
            ru: "За период стажировки были освоены или усовершенствованны следующие навыки:",
            en: "During the internship period, the following skills were mastered or improved:",
        },
        "skill1-work__alfa": {
            ru: "усовершенствовал навыки верстки и программирования на JavaScript;",
            en: "improved the skills of layout and programming in JavaScript;",
        },
        "skill2-work__alfa": {
            ru: "изучил основы React и TypeScript;",
            en: "learned the basics of React and TypeScript;",
        },
        "skill3-work__alfa": {
            ru: "овладел основными принципами state management (Redux), которые использовал при создании проекта;",
            en: "mastered the basic principles of state management (Redux), which he used when creating the project;",
        },
        "skill4-work__alfa": {
            ru: "создал свое веб-приложение – магазин, с возможностью добавления товара в корзину и оформления заказа.",
            en: "i created my own web application - store, with the ability to add product to the cart and place an order.",
        },
        "place-work__alfa": {
            ru: "онлайн-стажировка",
            en: "online internship",
        },
        "place-work__imp": {
            ru: "Институт Физики Металлов (ИФМ УрО РАН)",
            en: " Institute of Metal Physics (IMP UB RAS)",
        },
        "date-work__imp": {
            ru: "июль 2015 — н.в.",
            en: "july 2015 — present",
        },
        "header-work__imp": {
            ru: "Младший научный сотрудник",
            en: "Junior researcher",
        },
        "maintext-work__imp": {
            ru: "В мои обязанности входит:",
            en: "My responsibilities include:",
        },
        "skill1-work__imp": {
            ru: "руководство/работа исполнителем в научных командных проектах, связанных с поиском различных методов упрочнения сталей и повышения их эксплуатационных характеристик;",
            en: "leadership/work as a performer in scientific team projects related to the search for various methods of strengthening steels and improving their performance characteristics;",
        },
        "skill2-work__imp__1": {
            ru: "написание",
            en: "writing",
        },
        "skill2-work__imp__2": {
            ru: "статей в рецензируемые журналы; выступления на конференциях (т.ч. и на международных);",
            en: "articles to peer-reviewed journals; speaking at conferences (including international ones);",
        },
        "article__imp": {
            ru: "статей",
            en: "articles",
        },
        "skill3-work__imp": {
            ru: "выполнение различных задач на высокотехнологичном оборудовании(обработка, испытание и измерение образцов).",
            en: "performing various tasks on high-tech equipment (processing, testing and measuring samples)."
        },
        "skill4-work__imp": {
            ru: "Победитель конкурсной программы на поддержку коммерчески ориентированных научно-технических проектов молодых исследователей «УМНИК»: «Разработка способа модифицирующей ультразвуковой ударно-фрикционной обработки сталей».",
            en: "The winner of the competitive program for the support of commercially oriented scientific and technical projects of young researchers «UMNIK»: «Development of a method for modifying ultrasonic impact-frictional treatment of steels»."
        },
        "place__imp": {
            ru: "Екатеринбург",
            en: "Yekaterinburg, Russia",
        },
        "education-header": {
            ru: "образование",
            en: "education",
        },
        "place-education__netology": {
            ru: "Образовательная онлайн-платформа Нетология",
            en: "Netology online educational platform",
        },
        "date-education__netology": {
            ru: "ноябрь 2021 — сентябрь 2022",
            en: "november 2021 — september 2022",
        },
        "header-education__netology": {
            ru: "Программист на JavaScript. Разработчик Web и мультимедийных приложений",
            en: "A JavaScript programmer. Developer of Web and multimedia applications",
        },
        "maintext-education__netology": {
            ru: "За год обучения освоил следующие навыки:",
            en: "During the year of study, I learned the following skills:",
        },
        "skill1-education__netology": {
            ru: "овладел навыками адаптивной и мобильной вертски, используя HTML/CSS;",
            en: "mastered the skills of adaptive and mobile layout using HTML/CSS;",
        },
        "skill2-education__netology": {
            ru: "изучил основы JavaScript;",
            en: "learned the basics of JavaScript;",
        },
        "skill3-education__netology": {
            ru: "освоил работу с Git.",
            en: "mastered working with Git.",
        },
        "date-education__imp": {
            ru: "июль 2015 — июль 2019",
            en: "july 2015 — july 2019",
        },
        "header-education__imp": {
            ru: "Исследователь. Преподаватель-исследователь по программе в аспирантуре по направлению подготовки: Технологии материалов",
            en: "Researcher. Lecturer-researcher in the postgraduate program in the field of training: Materials technologies",
        },
        "place-education__ufu": {
            ru: "УрФУ им. первого Президента России Б. Н. Ельцина",
            en: "UFU named after the first President of Russia B. N. Yeltsin",
        },
        "date-education__ufu2": {
            ru: "июль 2013 — июль 2015",
            en: "july 2013 — july 2015",
        },
        "header-education__ufu2": {
            ru: "Магистр по направлению: Материаловедение и технологии материалов",
            en: "Master's degree in Materials Science and Materials Technology",
        },
        "date-education__ufu1": {
            ru: "июль 2009 — июль 2013",
            en: "july 2009 — july 2013",
        },
        "header-education__ufu1": {
            ru: "Бакалавр по направлению: Металлургия",
            en: "Bachelor's degree in Metallurgy",
        },
        "projects-header": {
            ru: "мои проекты",
            en: "my projects",
        },
    }

    function changeLang() {
        for (const key in languageArr) {
            let elem = document.querySelector(`[data-lang=${key}]`);
            if (elem) {
                elem.textContent = languageArr[key][currentLang];
            }
        }
    }

    changeLang();

    languageItems.forEach((item => {
        item.addEventListener('click', evt => {
            currentLang = evt.target.dataset.li;
            item.classList.add(`active`);
            changeLang();
            if (currentLang === 'en') {
                languageButton.classList.add('gb-icon');
                languageButton.classList.remove('ru-icon');
            } else {
                languageButton.classList.add('ru-icon');
                languageButton.classList.remove('gb-icon');
            }
            languageList.style.display = 'none';
        })
    }));
}

module.exports = language;