// @flow

const getBrowserLanguage = () => (
    (
        window.navigator.language || window.navigator.userLanguage
    ).split("-")[0] || "en"
);

export {
    getBrowserLanguage
};
