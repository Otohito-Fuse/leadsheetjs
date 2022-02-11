"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNote = void 0;
const parseNote = (s) => {
    let parsedAsNote = s.match(/^(A|B|C|D|E|F|G)(|#|##|b|bb)(|\^+|_+)(3|4|5|6|7)(|.|..)$/);
    if (!!parsedAsNote) {
        let step = parsedAsNote[1];
        let accidental = parsedAsNote[2];
        let alter = 0;
        if (!!accidental.match(/^#+$/)) {
            alter += accidental.length;
        }
        else if (!!accidental.match(/^b+$/)) {
            alter -= accidental.length;
        }
        let octaveUpDown = parsedAsNote[3];
        let octave = 4;
        if (!!octaveUpDown.match(/^\^+$/)) {
            octave += octaveUpDown.length;
        }
        else if (!!octaveUpDown.match(/^_+$/)) {
            octave -= octaveUpDown.length;
        }
        let pitch = {
            step,
            alter,
            octave,
        };
        let durationNumber = parseInt(parsedAsNote[4]);
        let duration = 1;
        let division = 1;
        if (durationNumber < 5) {
            division *= Math.pow(2, 5 - durationNumber);
        }
        else if (durationNumber > 5) {
            duration *= Math.pow(2, durationNumber - 5);
        }
        if (parsedAsNote[5] === ".") {
            if (duration % 2 === 0) {
                duration = (duration / 2) * 3;
            }
            else {
                duration *= 3;
                division *= 2;
            }
        }
        if (parsedAsNote[5] === "..") {
            if (duration % 4 === 0) {
                duration = (duration / 4) * 7;
            }
            else if (duration % 2 === 0) {
                duration = (duration / 2) * 7;
                division += 2;
            }
            else {
                duration *= 7;
                division *= 4;
            }
        }
        let note = {
            pitch,
            duration,
            division,
        };
        return note;
    }
    let parsedAsRest = s.match(/^R(3|4|5|6|7)(|.|..)$/);
    if (!!parsedAsRest) {
        let duration = 4;
        let division = Math.pow(2, 7 - parseInt(parsedAsRest[1]));
        if (parsedAsRest[2] === ".") {
            if (duration % 2 === 0) {
                duration = (duration / 2) * 3;
            }
            else {
                duration *= 3;
                division *= 2;
            }
        }
        if (parsedAsRest[2] === "..") {
            if (duration % 4 === 0) {
                duration = (duration / 4) * 7;
            }
            else if (duration % 2 === 0) {
                duration = (duration / 2) * 7;
                division += 2;
            }
            else {
                duration *= 7;
                division *= 4;
            }
        }
        let rest = {
            duration,
            division,
        };
        return rest;
    }
    return null;
};
exports.parseNote = parseNote;
