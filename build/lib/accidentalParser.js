"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAccidental = void 0;
const parseAccidental = (s) => {
    let alter = 0;
    if (!!s.match(/^#+$/)) {
        alter += s.length;
    }
    else if (!!s.match(/^b+$/)) {
        alter -= s.length;
    }
    return alter;
};
exports.parseAccidental = parseAccidental;
