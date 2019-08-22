// @flow

import messages from "../i18n/messages";

const getMessages = (lang: string) => (messages[lang] || messages.en);

export {
    getMessages
};
