// @flow

const getBrowserLanguage = (navigator: Object = window.navigator) => {
    const language = navigator.language || navigator.userLanguage;

    if (language) return language.split("-")[0];

    return "en";
};

export {
    getBrowserLanguage
};
