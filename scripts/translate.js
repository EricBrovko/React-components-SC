"use strict";

const { parse } = require('intl-messageformat-parser');
const fs = require('fs');
const glob = require('glob');
const globSync = glob.sync;

const mkdirp = require('mkdirp');
const mkdirpSync = mkdirp.sync;

const MESSAGES_PATTERN = './i18n/messages/**/*.json';
const LANG_DIR         = './i18n/lang/';

const ESCAPED_CHARS = {
    '\\' : '\\\\',
    '\\#': '\\#',
    '{'  : '\\{',
    '}'  : '\\}',
};

const ESAPE_CHARS_REGEXP = /\\#|[{}\\]/g;

module.exports = function printICUMessage(ast) {
    return ast.elements.reduce((message, el) => {
        let { format, id, type, value } = el;

        if (type === 'messageTextElement') {
            return message + value.replace(ESAPE_CHARS_REGEXP, (char) => {
                return ESCAPED_CHARS[char];
            });
        }

        if (!format) {
            return message + `{${id}}`;
        }

        let formatType = format.type.replace(/Format$/, '');

        let style, offset, options;

        switch (formatType) {
        case 'number':
        case 'date':
        case 'time':
            style = format.style ? `, ${format.style}` : '';
            return message + `{${id}, ${formatType}${style}}`;

        case 'plural':
        case 'selectOrdinal':
        case 'select':
            offset = format.offset ? `, offset:${format.offset}` : '';
            options = format.options.reduce((str, option) => {
                let optionValue = printICUMessage(option.value);
                return str + ` ${option.selector} {${optionValue}}`;
            }, '');
            return message + `{${id}, ${formatType}${offset},${options}}`;
        default:
        }
    }, '');
}

const defaultMessages = globSync(MESSAGES_PATTERN)
    .map((filename) => fs.readFileSync(filename, 'utf8'))
    .map((file) => JSON.parse(file))
    .reduce((collection, descriptors) => {
        descriptors.forEach(({id, defaultMessage}) => {
            if (collection.hasOwnProperty(id)) {
                throw new Error(`Duplicate message id: ${id}`);
            }

            collection[id] = defaultMessage;
        });

        return collection;
    }, {});

mkdirpSync(LANG_DIR);
fs.writeFileSync(LANG_DIR + 'en.json', JSON.stringify(defaultMessages, null, 2));
