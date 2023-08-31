/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/changeimages.js":
/*!****************************************!*\
  !*** ./src/js/modules/changeimages.js ***!
  \****************************************/
/***/ ((module) => {

eval("const wrapper = document.querySelector('.wallpaper__wrapper');\r\nconst images = Array.from(document.querySelectorAll('.wallpaper'));\r\n\r\nfunction changeImage() {\r\n    let i = 0;\r\n    images[i].classList.add('wallpaper__show');\r\n    setInterval(() => {\r\n        if (i === 3) {\r\n            images[i].classList.remove('wallpaper__show');\r\n            i = 0;\r\n            images[i].classList.add('wallpaper__show');\r\n        } else {\r\n            i++;\r\n            images[i - 1].classList.remove('wallpaper__show');\r\n            images[i].classList.add('wallpaper__show');\r\n        }\r\n    }, 2000)\r\n}\r\n\r\nmodule.exports = changeImage;\n\n//# sourceURL=webpack://site-card/./src/js/modules/changeimages.js?");

/***/ }),

/***/ "./src/js/modules/changenavigationslinks.js":
/*!**************************************************!*\
  !*** ./src/js/modules/changenavigationslinks.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// смена цвета в при наведении в навигации\r\nconst navigationLinks = Array.from(document.querySelectorAll('.link__text'));\r\n\r\nfunction changeNavigationLinks() {\r\n    for (let item of navigationLinks) {\r\n        item.addEventListener('mouseover', evt => {\r\n            item.style.color = '#0488db';\r\n        });\r\n\r\n        item.addEventListener('mouseleave', evt => {\r\n            item.style.color = '#ffffff';\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = changeNavigationLinks;\n\n//# sourceURL=webpack://site-card/./src/js/modules/changenavigationslinks.js?");

/***/ }),

/***/ "./src/js/modules/changesociallinks.js":
/*!*********************************************!*\
  !*** ./src/js/modules/changesociallinks.js ***!
  \*********************************************/
/***/ ((module) => {

eval("// смена цвета ссылок footer\r\nconst socialLinks = Array.from(document.querySelectorAll('.network__text'));\r\n\r\nfunction changeSocialLinks() {\r\n    for (let item of socialLinks) {\r\n        item.addEventListener('mouseover', evt => {\r\n            item.style.color = '#f37120';\r\n        });\r\n\r\n        item.addEventListener('mouseleave', evt => {\r\n            item.style.color = '#ffffff';\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = changeSocialLinks;\n\n//# sourceURL=webpack://site-card/./src/js/modules/changesociallinks.js?");

/***/ }),

/***/ "./src/js/modules/language.js":
/*!************************************!*\
  !*** ./src/js/modules/language.js ***!
  \************************************/
/***/ ((module) => {

eval("//Настройка языка\r\nconst languageItems = Array.from(document.querySelectorAll('.language__item'));\r\nconst languageButton = document.querySelector('.language__button');\r\nconst languageList = document.querySelector('.language__list');\r\nlet currentLang = \"ru\";\r\n\r\nfunction language() {\r\n    const languageArr = {\r\n        \"name-title\": {\r\n            ru: \"Сергей Лучко\",\r\n            en: \"Sergey Luchko\",\r\n        },\r\n        \"language_button\": {\r\n            ru: \"язык\",\r\n            en: \"language\",\r\n        },\r\n        \"navigation__link-about\": {\r\n            ru: \"о себе\",\r\n            en: \"about\",\r\n        },\r\n        \"navigation__link-careers\": {\r\n            ru: \"опыт\",\r\n            en: \"careers\",\r\n        },\r\n        \"navigation__link-projects\": {\r\n            ru: \"мои проекты\",\r\n            en: \"my projects\",\r\n        },\r\n        \"navigation__link-networks\": {\r\n            ru: \"контакты\",\r\n            en: \"networks\",\r\n        },\r\n        \"main-title\": {\r\n            ru: \"Сергей Лучко\",\r\n            en: \"Sergey Luchko\",\r\n        },\r\n        \"main-text\": {\r\n            ru: \"30 лет, frontend-разработчик, проживающий в г. Екатеринбурге, Россия.\",\r\n            en: \"30 years old, frontend-developer living in Yekaterinburg, Russia.\",\r\n        },\r\n        \"description-header\": {\r\n            ru: \"о себе\",\r\n            en: \"about\",\r\n        },\r\n        \"description-text__main\": {\r\n            ru: \"Моя цель – полностью перейти в сферу frontend-разработки и стать настоящим профессионалом в этой области.\\n Прошел обучение на онлайн-платформе «Нетология» (12 месяцев), далее прошел отбор (из 2108 заявок взяли 30 человек) на стажировку в «Альфа-Банк» (4 месяца) поучаствовал в местном стартапе и сейчас нахожусь в поиске полноценного места работы.\",\r\n            en: \"My goal is to completely move into the field of frontend development and become a true professional in this field. I completed training on the online platform «Netology» (12 months), then went through a selection process (out of 2108 applications, 30 people were chosen) for an internship at «Alpha Bank» (4 months), participated in a local startup, and currently, I am looking for a full-time job.\"\r\n        },\r\n        \"description-text__minor\": {\r\n            ru: \"Знание английского – B2. Люблю спорт – играю в Екатеринбургской хоккейной лиге дивизион «Любитель»(победители сезона 2021-2022гг.), катаюсь на сноуборде; путешествую по России и миру; слушаю различную музыку и посещаю концерты любимых исполнителей.\",\r\n            en: \"I have a B2 level of English proficiency. I enjoy sports - I play in the Yekaterinburg Hockey League, Division «Amateur» (winners of the 2021-2022 season), I love snowboarding, travel around Russia and the world, listen to various music genres, and attend concerts of my favorite artists.\"\r\n        },\r\n        \"careers-header\": {\r\n            ru: \"опыт\",\r\n            en: \"careers\",\r\n        },\r\n        \"careers-header__work\": {\r\n            ru: \"опыт работы\",\r\n            en: \"work experience\",\r\n        },\r\n        \"place-work__volkov\": {\r\n            ru: \"ИП Волков Дмитрий Витальевич\",\r\n            en: \"IP Volkov Dmitry Vitalievich\",\r\n        },\r\n        \"date-work__volkov\": {\r\n            ru: \"январь 2023 — август 2023\",\r\n            en: \"january 2015 — august 2023\",\r\n        },\r\n        \"header-work__volkov\": {\r\n            ru: \"Frontend-разработчик\",\r\n            en: \"Frontend-developer\",\r\n        },\r\n        \"maintext-work__volkov\": {\r\n            ru: \"Принимал активное участие в разработке веб-приложений, где выполнял следующие задачи:\",\r\n            en: \"Took an active part in the development of web applications, where performed the following tasks:\",\r\n        },\r\n        \"skill1-work__volkov\": {\r\n            ru: \"проектирование и верстка внешнего вида основных страниц веб-приложений, а также окон авторизации. Для этого использовали чистый JavaScript и React, а также библиотеки MUI и Bootstrap для обеспечения современного и адаптивного дизайна;\",\r\n            en: \"design and layout of the visual appearance of the main pages of web applications, as well as authentication windows. This was done using pure JavaScript and React, along with MUI and Bootstrap libraries to ensure a modern and responsive design;\",\r\n        },\r\n        \"skill2-work__volkov\": {\r\n            ru: \"реализация навигации по страницам веб-приложений при помощи библиотеки React Router.\",\r\n            en: \"implementation of page navigation for web applications using the React Router library.\",\r\n        },\r\n        \"place__volkov\": {\r\n            ru: \"Екатеринбург\",\r\n            en: \"Yekaterinburg\",\r\n        },\r\n        \"date-work__alfa\": {\r\n            ru: \"ноябрь 2022 — март 2023\",\r\n            en: \"november  2022 — march  2023\",\r\n        },\r\n        \"header-work__alfa\": {\r\n            ru: \"Студент факультета «Frontend-разработка» (Junior frontend-разработчик)\",\r\n            en: \"Student of the faculty «Frontend-development» (Junior frontend-developer)\",\r\n        },\r\n        \"maintext-work__alfa\": {\r\n            ru: \"За период стажировки были освоены или усовершенствованны следующие навыки:\",\r\n            en: \"During the internship period, the following skills were mastered or improved:\",\r\n        },\r\n        \"skill1-work__alfa\": {\r\n            ru: \"усовершенствовал навыки верстки и программирования на JavaScript;\",\r\n            en: \"improved the skills of layout and programming in JavaScript;\",\r\n        },\r\n        \"skill2-work__alfa\": {\r\n            ru: \"изучил основы React и TypeScript;\",\r\n            en: \"learned the basics of React and TypeScript;\",\r\n        },\r\n        \"skill3-work__alfa\": {\r\n            ru: \"овладел основными принципами state management (Redux), которые использовал при создании проекта;\",\r\n            en: \"mastered the basic principles of state management (Redux), which he used when creating the project;\",\r\n        },\r\n        \"skill4-work__alfa\": {\r\n            ru: \"создал свое веб-приложение – магазин, с возможностью добавления товара в корзину и оформления заказа.\",\r\n            en: \"i created my own web application - store, with the ability to add product to the cart and place an order.\",\r\n        },\r\n        \"place-work__alfa\": {\r\n            ru: \"онлайн-стажировка\",\r\n            en: \"online internship\",\r\n        },\r\n        \"place-work__imp\": {\r\n            ru: \"Институт Физики Металлов (ИФМ УрО РАН)\",\r\n            en: \" Institute of Metal Physics (IMP UB RAS)\",\r\n        },\r\n        \"date-work__imp\": {\r\n            ru: \"июль 2015 — н.в.\",\r\n            en: \"july 2015 — present\",\r\n        },\r\n        \"header-work__imp\": {\r\n            ru: \"Младший научный сотрудник\",\r\n            en: \"Junior researcher\",\r\n        },\r\n        \"maintext-work__imp\": {\r\n            ru: \"В мои обязанности входит:\",\r\n            en: \"My responsibilities include:\",\r\n        },\r\n        \"skill1-work__imp\": {\r\n            ru: \"руководство/работа исполнителем в научных командных проектах, связанных с поиском различных методов упрочнения сталей и повышения их эксплуатационных характеристик;\",\r\n            en: \"leadership/work as a performer in scientific team projects related to the search for various methods of strengthening steels and improving their performance characteristics;\",\r\n        },\r\n        \"skill2-work__imp__1\": {\r\n            ru: \"написание\",\r\n            en: \"writing\",\r\n        },\r\n        \"skill2-work__imp__2\": {\r\n            ru: \"статей в рецензируемые журналы; выступления на конференциях (т.ч. и на международных);\",\r\n            en: \"articles to peer-reviewed journals; speaking at conferences (including international ones);\",\r\n        },\r\n        \"article__imp\": {\r\n            ru: \"статей\",\r\n            en: \"articles\",\r\n        },\r\n        \"skill3-work__imp\": {\r\n            ru: \"выполнение различных задач на высокотехнологичном оборудовании(обработка, испытание и измерение образцов).\",\r\n            en: \"performing various tasks on high-tech equipment (processing, testing and measuring samples).\"\r\n        },\r\n        \"skill4-work__imp\": {\r\n            ru: \"Победитель конкурсной программы на поддержку коммерчески ориентированных научно-технических проектов молодых исследователей «УМНИК»: «Разработка способа модифицирующей ультразвуковой ударно-фрикционной обработки сталей».\",\r\n            en: \"The winner of the competitive program for the support of commercially oriented scientific and technical projects of young researchers «UMNIK»: «Development of a method for modifying ultrasonic impact-frictional treatment of steels».\"\r\n        },\r\n        \"place__imp\": {\r\n            ru: \"Екатеринбург\",\r\n            en: \"Yekaterinburg, Russia\",\r\n        },\r\n        \"education-header\": {\r\n            ru: \"образование\",\r\n            en: \"education\",\r\n        },\r\n        \"place-education__netology\": {\r\n            ru: \"Образовательная онлайн-платформа Нетология\",\r\n            en: \"Netology online educational platform\",\r\n        },\r\n        \"date-education__netology\": {\r\n            ru: \"ноябрь 2021 — сентябрь 2022\",\r\n            en: \"november 2021 — september 2022\",\r\n        },\r\n        \"header-education__netology\": {\r\n            ru: \"Программист на JavaScript. Разработчик Web и мультимедийных приложений\",\r\n            en: \"A JavaScript programmer. Developer of Web and multimedia applications\",\r\n        },\r\n        \"maintext-education__netology\": {\r\n            ru: \"За год обучения освоил следующие навыки:\",\r\n            en: \"During the year of study, I learned the following skills:\",\r\n        },\r\n        \"skill1-education__netology\": {\r\n            ru: \"овладел навыками адаптивной и мобильной вертски, используя HTML/CSS;\",\r\n            en: \"mastered the skills of adaptive and mobile layout using HTML/CSS;\",\r\n        },\r\n        \"skill2-education__netology\": {\r\n            ru: \"изучил основы JavaScript;\",\r\n            en: \"learned the basics of JavaScript;\",\r\n        },\r\n        \"skill3-education__netology\": {\r\n            ru: \"освоил работу с Git.\",\r\n            en: \"mastered working with Git.\",\r\n        },\r\n        \"date-education__imp\": {\r\n            ru: \"июль 2015 — июль 2019\",\r\n            en: \"july 2015 — july 2019\",\r\n        },\r\n        \"header-education__imp\": {\r\n            ru: \"Исследователь. Преподаватель-исследователь по программе в аспирантуре по направлению подготовки: Технологии материалов\",\r\n            en: \"Researcher. Lecturer-researcher in the postgraduate program in the field of training: Materials technologies\",\r\n        },\r\n        \"place-education__ufu\": {\r\n            ru: \"УрФУ им. первого Президента России Б. Н. Ельцина\",\r\n            en: \"UFU named after the first President of Russia B. N. Yeltsin\",\r\n        },\r\n        \"date-education__ufu2\": {\r\n            ru: \"июль 2013 — июль 2015\",\r\n            en: \"july 2013 — july 2015\",\r\n        },\r\n        \"header-education__ufu2\": {\r\n            ru: \"Магистр по направлению: Материаловедение и технологии материалов\",\r\n            en: \"Master's degree in Materials Science and Materials Technology\",\r\n        },\r\n        \"date-education__ufu1\": {\r\n            ru: \"июль 2009 — июль 2013\",\r\n            en: \"july 2009 — july 2013\",\r\n        },\r\n        \"header-education__ufu1\": {\r\n            ru: \"Бакалавр по направлению: Металлургия\",\r\n            en: \"Bachelor's degree in Metallurgy\",\r\n        },\r\n        \"projects-header\": {\r\n            ru: \"мои проекты\",\r\n            en: \"my projects\",\r\n        },\r\n    }\r\n\r\n    function changeLang() {\r\n        for (const key in languageArr) {\r\n            let elem = document.querySelector(`[data-lang=${key}]`);\r\n            if (elem) {\r\n                elem.textContent = languageArr[key][currentLang];\r\n            }\r\n        }\r\n    }\r\n\r\n    changeLang();\r\n\r\n    languageItems.forEach((item => {\r\n        item.addEventListener('click', evt => {\r\n            currentLang = evt.target.dataset.li;\r\n            item.classList.add(`active`);\r\n            changeLang();\r\n            if (currentLang === 'en') {\r\n                languageButton.classList.add('gb-icon');\r\n                languageButton.classList.remove('ru-icon');\r\n            } else {\r\n                languageButton.classList.add('ru-icon');\r\n                languageButton.classList.remove('gb-icon');\r\n            }\r\n            languageList.style.display = 'none';\r\n        })\r\n    }));\r\n}\r\n\r\nmodule.exports = language;\n\n//# sourceURL=webpack://site-card/./src/js/modules/language.js?");

/***/ }),

/***/ "./src/js/modules/languagelist.js":
/*!****************************************!*\
  !*** ./src/js/modules/languagelist.js ***!
  \****************************************/
/***/ ((module) => {

eval("//всплытие языкового меню\r\nconst languageButton = document.querySelector('.language__button');\r\nconst languageList = document.querySelector('.language__list');\r\n\r\nfunction showLanguage() {\r\n    languageButton.addEventListener('click', evt => {\r\n        languageList.style.display = 'flex';\r\n    })\r\n}\r\n\r\nmodule.exports = showLanguage;\n\n//# sourceURL=webpack://site-card/./src/js/modules/languagelist.js?");

/***/ }),

/***/ "./src/js/modules/maskproject.js":
/*!***************************************!*\
  !*** ./src/js/modules/maskproject.js ***!
  \***************************************/
/***/ ((module) => {

eval("//затемнение проектов\r\nconst projects = Array.from(document.querySelectorAll('.projects-cell'))\r\n\r\nfunction onMask() {\r\n    for (let item of projects) {\r\n        const infoDiv = item.querySelector('.project-info__hide');\r\n        item.addEventListener('mouseover', evt => {\r\n            if (!infoDiv.classList.contains('project-info__show')) {\r\n                infoDiv.classList.add('project-info__show');\r\n            }\r\n        })\r\n\r\n        item.addEventListener('mouseleave', evt => {\r\n            if (infoDiv.classList.contains('project-info__show')) {\r\n                infoDiv.classList.remove('project-info__show');\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = onMask;\n\n//# sourceURL=webpack://site-card/./src/js/modules/maskproject.js?");

/***/ }),

/***/ "./src/js/modules/modalclose.js":
/*!**************************************!*\
  !*** ./src/js/modules/modalclose.js ***!
  \**************************************/
/***/ ((module) => {

eval("//закрытие модального окна\r\nconst buttonCLose = document.querySelector('.button__close');\r\nconst modal = document.querySelector('.modal');\r\n\r\nfunction modalClose() {\r\n    buttonCLose.addEventListener('click', evt => {\r\n        modal.style.display = 'none';\r\n    })\r\n}\r\n\r\nmodule.exports = modalClose;\n\n//# sourceURL=webpack://site-card/./src/js/modules/modalclose.js?");

/***/ }),

/***/ "./src/js/modules/navigationclick.js":
/*!*******************************************!*\
  !*** ./src/js/modules/navigationclick.js ***!
  \*******************************************/
/***/ ((module) => {

eval("// перемещение по клику навигации\r\nconst elements = Array.from(document.getElementsByTagName('section'));\r\nconst navigationLinks = Array.from(document.querySelectorAll('.link__text'));\r\nconst navigationList = document.querySelector('.navigation');\r\n\r\nfunction navigationClick() {\r\n    for (let i = 0; i < navigationLinks.length; i++) {\r\n        navigationLinks[i].addEventListener('click', evt => {\r\n            elements[i].scrollIntoView({block: 'start', behavior: 'smooth'})\r\n            navigationList.classList.remove('navigation__show');\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = navigationClick;\n\n//# sourceURL=webpack://site-card/./src/js/modules/navigationclick.js?");

/***/ }),

/***/ "./src/js/modules/showdiploma.js":
/*!***************************************!*\
  !*** ./src/js/modules/showdiploma.js ***!
  \***************************************/
/***/ ((module) => {

eval("//вызов модального окна\r\nconst diplomaIcons = Array.from(document.querySelectorAll('.diploma-icon'));\r\nconst medalIcons = Array.from(document.querySelectorAll('.medal-icon'));\r\nconst modal = document.querySelector('.modal');\r\nconst header = document.querySelector('.diploma__header');\r\nconst img = document.querySelector('.diploma__img');\r\n\r\nfunction showDiploma() {\r\n    for (let item of diplomaIcons) {\r\n        item.addEventListener('click', evt => {\r\n                modal.style.display = 'block';\r\n                switch (item.parentElement.parentElement.firstElementChild.textContent) {\r\n                    case 'Alfa Campus' :\r\n                        header.textContent = 'Alfa Campus';\r\n                        img.src = 'src/images/diploms/alfa-campus.png';\r\n                        return;\r\n                    case 'Институт Физики Металлов (ИФМ УрО РАН)' :\r\n                        header.textContent = 'ИФМ';\r\n                        img.src = 'src/images/diploms/imp.jpg';\r\n                        return;\r\n                    case 'Образовательная онлайн-платформа Нетология' :\r\n                        header.textContent = 'Нетология';\r\n                        img.src = 'src/images/diploms/netology.png';\r\n                        return;\r\n                }\r\n            }\r\n        )\r\n    }\r\n    for (let i = 0; i < medalIcons.length; i++) {\r\n        medalIcons[i].addEventListener('click', evt => {\r\n            modal.style.display = 'block';\r\n            switch (i) {\r\n                case 0:\r\n                    header.textContent = 'Умник диплом';\r\n                    img.src = 'src/images/diploms/umnik1.jpg';\r\n                    return;\r\n                case  1:\r\n                    header.textContent = 'Умник сертификат о прохождении программы';\r\n                    img.src = 'src/images/diploms/umnik2.jpg';\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = showDiploma;\n\n//# sourceURL=webpack://site-card/./src/js/modules/showdiploma.js?");

/***/ }),

/***/ "./src/js/modules/shownavigation.js":
/*!******************************************!*\
  !*** ./src/js/modules/shownavigation.js ***!
  \******************************************/
/***/ ((module) => {

eval("// всплытие главного меню\r\nconst navigationButton = document.querySelector('.menu__button');\r\nconst navigationList = document.querySelector('.navigation');\r\n\r\nfunction showNavigation() {\r\n    navigationButton.addEventListener('mouseover', evt => {\r\n        if (!navigationList.classList.contains('navigation__show')) {\r\n            navigationList.classList.add('navigation__show');\r\n        }\r\n    })\r\n    navigationList.addEventListener('mouseleave', evt => {\r\n        if (navigationList.classList.contains('navigation__show')) {\r\n            navigationList.classList.remove('navigation__show');\r\n        }\r\n    })\r\n}\r\n\r\nmodule.exports = showNavigation;\n\n//# sourceURL=webpack://site-card/./src/js/modules/shownavigation.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', () => {\r\n    const changeNavigationLinks = __webpack_require__(/*! ./modules/changenavigationslinks */ \"./src/js/modules/changenavigationslinks.js\"),\r\n        changeSocialLinks = __webpack_require__(/*! ./modules/changesociallinks */ \"./src/js/modules/changesociallinks.js\"),\r\n        language = __webpack_require__(/*! ./modules/language */ \"./src/js/modules/language.js\"),\r\n        languageList = __webpack_require__(/*! ./modules/languagelist */ \"./src/js/modules/languagelist.js\"),\r\n        maskProject = __webpack_require__(/*! ./modules/maskproject */ \"./src/js/modules/maskproject.js\"),\r\n        modalClose = __webpack_require__(/*! ./modules/modalclose */ \"./src/js/modules/modalclose.js\"),\r\n        navigationClick = __webpack_require__(/*! ./modules/navigationclick */ \"./src/js/modules/navigationclick.js\"),\r\n        showDiploma = __webpack_require__(/*! ./modules/showdiploma */ \"./src/js/modules/showdiploma.js\"),\r\n        showNavigation = __webpack_require__(/*! ./modules/shownavigation */ \"./src/js/modules/shownavigation.js\");\r\n        changeImage = __webpack_require__(/*! ./modules/changeimages */ \"./src/js/modules/changeimages.js\");\r\n\r\n    changeNavigationLinks();\r\n    changeSocialLinks();\r\n    language();\r\n    languageList();\r\n    maskProject();\r\n    modalClose();\r\n    navigationClick();\r\n    showDiploma();\r\n    showNavigation();\r\n    changeImage();\r\n})\n\n//# sourceURL=webpack://site-card/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;