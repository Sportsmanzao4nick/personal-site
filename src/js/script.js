window.addEventListener('DOMContentLoaded', () => {
    const changeNavigationLinks = require('./modules/changenavigationslinks'),
        changeSocialLinks = require('./modules/changesociallinks'),
        language = require('./modules/language'),
        languageList = require('./modules/languagelist'),
        maskProject = require('./modules/maskproject'),
        modalClose = require('./modules/modalclose'),
        navigationClick = require('./modules/navigationclick'),
        showDiploma = require('./modules/showdiploma'),
        showNavigation = require('./modules/shownavigation');

    changeNavigationLinks();
    changeSocialLinks();
    language();
    languageList();
    maskProject();
    modalClose();
    navigationClick();
    showDiploma();
    showNavigation();
})