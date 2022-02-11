import { isNote } from "./noteParser";
import { trebleClef } from "./attributes";
import { noteValueToKind, lcm } from "./utils";
export const constructMeasure = (attributes, noteOrRests) => {
    let clef = attributes.clef;
    let fifths = attributes.key.fifths;
    let flatted = [];
    let sharped = [];
    if (fifths < 0) {
        flatted = ["B", "E", "A", "D", "G", "C", "F"].slice(0, -fifths);
    }
    if (fifths > 0) {
        sharped = ["F", "C", "G", "D", "A", "E", "B"].slice(0, fifths);
    }
    let doubleflatted = [];
    let doublesharped = [];
    let noteHeads = [];
    let restSymbols = [];
    let stems = [];
    let flags = [];
    let beams = [];
    let ties = [];
    let accidentals = [];
    const divisionLcm = lcm(noteOrRests.map((noteOrRest) => noteOrRest.division));
    let xFull = 0;
    for (let [duration, division] of noteOrRests.map((noteOrRest) => [noteOrRest.duration, noteOrRest.division])) {
        xFull += (duration * divisionLcm) / division;
    }
    if (clef === trebleClef) {
        let xRelativeTmp = 0;
        let withTieFlag = false;
        for (let noteOrRest of noteOrRests) {
            let duration = noteOrRest.duration;
            let division = noteOrRest.division;
            let [kind, dots] = noteValueToKind(duration, division);
            if (isNote(noteOrRest)) {
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
                let alter = !!pitch.alter ? pitch.alter : 0;
                if (alter === 0 &&
                    (flatted.includes(pitch.step) ||
                        sharped.includes(pitch.step) ||
                        doubleflatted.includes(pitch.step) ||
                        doublesharped.includes(pitch.step))) {
                    let natural = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "natural",
                    };
                    accidentals.push(natural);
                    flatted = flatted.filter((s) => s !== pitch.step);
                    doubleflatted = doubleflatted.filter((s) => s !== pitch.step);
                    sharped = sharped.filter((s) => s !== pitch.step);
                    doublesharped = doublesharped.filter((s) => s !== pitch.step);
                }
                if (alter === 1 && !sharped.includes(pitch.step)) {
                    let sharp = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "sharp",
                    };
                    accidentals.push(sharp);
                    sharped.push(pitch.step);
                    flatted = flatted.filter((s) => s !== pitch.step);
                    doubleflatted = doubleflatted.filter((s) => s !== pitch.step);
                    doublesharped = doublesharped.filter((s) => s !== pitch.step);
                }
                if (alter === 2 && !doublesharped.includes(pitch.step)) {
                    let doublesharp = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doublesharp",
                    };
                    accidentals.push(doublesharp);
                    doublesharped.push(pitch.step);
                    flatted = flatted.filter((s) => s !== pitch.step);
                    doubleflatted = doubleflatted.filter((s) => s !== pitch.step);
                    sharped = sharped.filter((s) => s !== pitch.step);
                }
                if (alter === -1 && !flatted.includes(pitch.step)) {
                    let flat = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "flat",
                    };
                    accidentals.push(flat);
                    flatted.push(pitch.step);
                    doubleflatted = doubleflatted.filter((s) => s !== pitch.step);
                    sharped = sharped.filter((s) => s !== pitch.step);
                    doublesharped = doublesharped.filter((s) => s !== pitch.step);
                }
                if (alter === -2 && !doubleflatted.includes(pitch.step)) {
                    let doubleflat = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doubleflat",
                    };
                    accidentals.push(doubleflat);
                    doubleflatted.push(pitch.step);
                    flatted = flatted.filter((s) => s !== pitch.step);
                    sharped = sharped.filter((s) => s !== pitch.step);
                    doublesharped = doublesharped.filter((s) => s !== pitch.step);
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
            xRelativeTmp += (duration * divisionLcm) / division;
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
