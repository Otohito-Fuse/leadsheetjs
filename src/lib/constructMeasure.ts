import { isNote, NoteOrRest } from "./noteParser";
import {
    Accidental,
    Beam,
    Flag,
    Measure,
    NoteHead,
    RestSymbol,
    Stem,
    Tie,
} from "./measureComponents";
import { Attributes, trebleClef } from "./attributes";
import { noteValueToKind, lcm } from "./utils";

export const constructMeasure = (
    attributes: Attributes,
    noteOrRests: NoteOrRest[]
) => {
    let clef = attributes.clef;

    let fifths = attributes.key.fifths;
    let flatted: string[] = [];
    let sharped: string[] = [];
    if (fifths > 0) {
        flatted = ["B", "E", "A", "D", "G", "C", "F"].slice(0, fifths);
    }
    if (fifths < 0) {
        sharped = ["F", "C", "G", "D", "A", "E", "B"].slice(0, -fifths);
    }

    let noteHeads: NoteHead[] = [];
    let restSymbols: RestSymbol[] = [];
    let stems: Stem[] = [];
    let flags: Flag[] = [];
    let beams: Beam[] = [];
    let ties: Tie[] = [];
    let accidentals: Accidental[] = [];

    let xFull = lcm(
        noteOrRests.map((noteOrRest: NoteOrRest) => noteOrRest.division)
    );

    if (clef === trebleClef) {
        let xRelativeTmp = 0;
        let withTieFlag: boolean = false;
        for (let noteOrRest of noteOrRests) {
            let duration = noteOrRest.duration;
            let division = noteOrRest.division;
            let [kind, dots]: [string, number] = noteValueToKind(
                duration,
                division
            );
            if (isNote(noteOrRest)) {
                let pitch = noteOrRest.pitch;
                let height: number = 0;
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

                let noteHead: NoteHead = {
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
                    let stem: Stem = {
                        xRelative: xRelativeTmp,
                        xFull,
                        isUp,
                        headHeight: height,
                        tailHeight,
                    };
                    stems.push(stem);
                    if (kind !== "half" && kind !== "quarter") {
                        let flag: Flag = {
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
                    let tie: Tie = {
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
                    let tie: Tie = {
                        isStart: false,
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                    };
                    ties.push(tie);
                    withTieFlag = false;
                }

                let alter = !!pitch.alter ? pitch.alter : 0;
                if (
                    alter === 0 &&
                    (flatted.includes(pitch.step) ||
                        sharped.includes(pitch.step))
                ) {
                    let natural: Accidental = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "natural",
                    };
                    accidentals.push(natural);
                }
                if (alter === 1 && !sharped.includes(pitch.step)) {
                    let sharp: Accidental = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "sharp",
                    };
                    accidentals.push(sharp);
                }
                if (alter === 2) {
                    let doublesharp: Accidental = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doublesharp",
                    };
                    accidentals.push(doublesharp);
                }
                if (alter === -1 && !flatted.includes(pitch.step)) {
                    let flat: Accidental = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "flat",
                    };
                    accidentals.push(flat);
                }
                if (alter === -2) {
                    let doubleflat: Accidental = {
                        xRelative: xRelativeTmp,
                        xFull,
                        height,
                        kind: "doubleflat",
                    };
                    accidentals.push(doubleflat);
                }
            } else {
                let restSymbol: RestSymbol = {
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

    let measure: Measure = {
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
