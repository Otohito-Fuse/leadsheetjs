"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructMeasure = void 0;
const noteParser_1 = require("./noteParser");
const attributes_1 = require("./attributes");
const utils_1 = require("./utils");
const constructMeasure = (attributes, noteOrRests) => {
    let clef = attributes.clef;
    let fifths = attributes.key.fifths;
    let flatted = [];
    let sharped = [];
    if (fifths > 0) {
        flatted = ["B", "E", "A", "D", "G", "C", "F"].slice(0, fifths);
    }
    if (fifths < 0) {
        sharped = ["F", "C", "G", "D", "A", "E", "B"].slice(0, -fifths);
    }
    let noteHeads = [];
    let restSymbols = [];
    let stems = [];
    let flags = [];
    let beams = [];
    let ties = [];
    let accidentals = [];
    let xFull = (0, utils_1.lcm)(noteOrRests.map((noteOrRest) => noteOrRest.division));
    if (clef === attributes_1.trebleClef) {
        let xRelativeTmp = 0;
        let withTieFlag = false;
        for (let noteOrRest of noteOrRests) {
            let duration = noteOrRest.duration;
            let division = noteOrRest.division;
            let [kind, dots] = (0, utils_1.noteValueToKind)(duration, division);
            if ((0, noteParser_1.isNote)(noteOrRest)) {
                let pitch = noteOrRest.pitch;
                let height = 0;
                switch (pitch.step) {
                    case "C":
                        height = -6;
                        break;
                    case "D":
                        height = -5;
                        break;
                    case "E":
                        height = -4;
                        break;
                    case "F":
                        height = -3;
                        break;
                    case "G":
                        height = -2;
                        break;
                    case "A":
                        height = -1;
                        break;
                }
                height += (pitch.octave - 4) * 7;
                let noteHead = {
                    xRelative: xRelativeTmp,
                    xFull,
                    height,
                    kind,
                    dots,
                };
                noteHeads.push(noteHead);
                let isUp = height < 0;
                if (kind !== "whole") {
                    let tailHeight = height + (isUp ? 7 : -7);
                    let stem = {
                        xRelative: xRelativeTmp,
                        xFull,
                        isUp,
                        headHeight: height,
                        tailHeight,
                    };
                    stems.push(stem);
                    if (kind !== "half" && kind !== "quarter") {
                        let flag = {
                            xRelative: xRelativeTmp,
                            xFull,
                            isUp,
                            headHeight: height,
                            tailHeight,
                            kind,
                        };
                        flags.push(flag);
                    }
                }
                if (!!noteOrRest.withTie) {
                    let tie = {
                        isStart: true,
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        isUp,
                    };
                    ties.push(tie);
                    withTieFlag = true;
                }
                if (withTieFlag) {
                    let tie = {
                        isStart: false,
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                    };
                    ties.push(tie);
                    withTieFlag = false;
                }
                let alter = !!pitch.alter ? pitch.alter : 0;
                if (alter === 0 &&
                    (flatted.includes(pitch.step) ||
                        sharped.includes(pitch.step))) {
                    let natural = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "natural",
                    };
                    accidentals.push(natural);
                }
                if (alter === 1 && !sharped.includes(pitch.step)) {
                    let sharp = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "sharp",
                    };
                    accidentals.push(sharp);
                }
                if (alter === 2) {
                    let doublesharp = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doublesharp",
                    };
                    accidentals.push(doublesharp);
                }
                if (alter === -1 && !flatted.includes(pitch.step)) {
                    let flat = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "flat",
                    };
                    accidentals.push(flat);
                }
                if (alter === -2) {
                    let doubleflat = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doubleflat",
                    };
                    accidentals.push(doubleflat);
                }
            }
            else {
                let restSymbol = {
                    xRelative: xRelativeTmp,
                    xFull,
                    kind,
                    dots,
                };
                restSymbols.push(restSymbol);
            }
            xRelativeTmp += (duration * xFull) / division;
        }
    }
    let measure = {
        noteHeads,
        restSymbols,
        stems,
        flags,
        beams,
        ties,
        accidentals,
    };
    return measure;
};
exports.constructMeasure = constructMeasure;
