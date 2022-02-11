import { parseAccidental } from "./accidentalParser";

export type Degree = {
    value: number;
    alter?: number;
    type?: string;
};

export type Root = {
    step: string;
    alter: number;
};

export type Bass = {
    step: string;
    alter: number;
};

export type Kind = string;

export type Chord = {
    root: Root;
    kind: Kind;
    degrees?: Degree[];
    bass?: Bass;
};

export const parseChord = (s: string) => {
    let parsed = s.match(
        /^(C|D|E|F|G|A|B)(|#|##|b|bb)(|_[a-z0-9]*)(|\([-a-z#0-9,]+\))(|\/(?:C|D|E|F|G|A|B)(?:|#|##|b|bb))$/
    );
    if (!!parsed) {
        let rootStep = parsed[1];
        let rootAlter = parseAccidental(parsed[2]);
        let root: Root = {
            step: rootStep,
            alter: rootAlter,
        };
        let kind = parsed[3];
        if (!!kind) {
            kind = kind.substring(1);
        }
        let degreesString = parsed[4];
        let bassString = parsed[5];
        if (!!degreesString) {
            let degrees = [];
            let degreesStringArray = degreesString
                .substring(1, degreesString.length - 1)
                .split(",");
            for (let degreeString of degreesStringArray) {
                let parsedDegree = degreeString.match(
                    /^(|[a-z]+-)(|#|##|b|bb)([0-9]+)$/
                );
                if (!!parsedDegree) {
                    let type = parsedDegree[1];
                    if (!!type) {
                        type = type.substring(0, type.length - 1);
                    }
                    let alter = parseAccidental(parsedDegree[2]);
                    let value = parseInt(parsedDegree[3]);
                    let degree: Degree = {
                        value,
                        alter,
                        type,
                    };
                    degrees.push(degree);
                } else {
                    return null;
                }
            }
            if (!!bassString) {
                let parsedBass = bassString.match(
                    /^\/(C|D|E|F|G|A|B)(|#|##|b|bb)$/
                );
                if (!!parsedBass) {
                    let bassStep = parsedBass[1];
                    let bassAlter = parseAccidental(parsedBass[2]);
                    let bass: Bass = {
                        step: bassStep,
                        alter: bassAlter,
                    };
                    let chord: Chord = {
                        root,
                        kind,
                        degrees,
                        bass,
                    };
                    return chord;
                }
            } else {
                let chord: Chord = {
                    root,
                    kind,
                    degrees,
                };
                return chord;
            }
        } else {
            if (!!bassString) {
                let parsedBass = bassString.match(
                    /^\/(C|D|E|F|G|A|B)(|#|##|b|bb)$/
                );
                if (!!parsedBass) {
                    let bassStep = parsedBass[1];
                    let bassAlter = parseAccidental(parsedBass[2]);
                    let bass: Bass = {
                        step: bassStep,
                        alter: bassAlter,
                    };
                    let chord: Chord = {
                        root,
                        kind,
                        bass,
                    };
                    return chord;
                }
            } else {
                let chord: Chord = {
                    root,
                    kind,
                };
                return chord;
            }
        }
    } else {
        return null;
    }
};
