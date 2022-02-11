import {
    constructMeasure,
    Attributes,
    trebleClef,
    NoteOrRest,
    Note,
    Rest,
    Measure,
    NoteHead,
    RestSymbol,
    Stem,
    Flag,
    Accidental,
    Tie,
} from "../../src";

test("constructMeasure test 01", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "A",
            alter: 0,
            octave: 4,
        },
        duration: 1,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -1,
            octave: 4,
        },
        duration: 1,
        division: 2,
    };
    let rest: Rest = {
        duration: 1,
        division: 2,
    };
    let note3: Note = {
        pitch: {
            step: "F",
            alter: 1,
            octave: 5,
        },
        duration: 2,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, rest, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 8,
        height: -1,
        kind: "quarter",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 2,
        xFull: 8,
        height: 0,
        kind: "eighth",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "half",
        dots: 0,
    };
    let restSymbol: RestSymbol = {
        xRelative: 3,
        xFull: 8,
        kind: "eighth",
        dots: 0,
    };
    let stem1: Stem = {
        xRelative: 0,
        xFull: 8,
        isUp: true,
        headHeight: -1,
        tailHeight: 6,
    };
    let stem2: Stem = {
        xRelative: 2,
        xFull: 8,
        isUp: false,
        headHeight: 0,
        tailHeight: -7,
    };
    let stem3: Stem = {
        xRelative: 4,
        xFull: 8,
        isUp: false,
        headHeight: 4,
        tailHeight: -3,
    };
    let flag: Flag = {
        xRelative: 2,
        xFull: 8,
        isUp: false,
        headHeight: 0,
        tailHeight: -7,
        kind: "eighth",
    };
    let accidental1: Accidental = {
        xRelative: 2,
        xFull: 8,
        height: 0,
        kind: "flat",
    };
    let accidental2: Accidental = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "sharp",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [restSymbol],
        stems: [stem1, stem2, stem3],
        flags: [flag],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 02", () => {
    let attributes: Attributes = {
        key: {
            fifths: 2,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "D",
            alter: 1,
            octave: 4,
        },
        duration: 1,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "E",
            alter: -1,
            octave: 4,
        },
        duration: 1,
        division: 2,
    };
    let rest: Rest = {
        duration: 1,
        division: 2,
    };
    let note3: Note = {
        pitch: {
            step: "F",
            alter: 0,
            octave: 5,
        },
        duration: 2,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, rest, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 8,
        height: -5,
        kind: "quarter",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 2,
        xFull: 8,
        height: -4,
        kind: "eighth",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "half",
        dots: 0,
    };
    let restSymbol: RestSymbol = {
        xRelative: 3,
        xFull: 8,
        kind: "eighth",
        dots: 0,
    };
    let stem1: Stem = {
        xRelative: 0,
        xFull: 8,
        isUp: true,
        headHeight: -5,
        tailHeight: 2,
    };
    let stem2: Stem = {
        xRelative: 2,
        xFull: 8,
        isUp: true,
        headHeight: -4,
        tailHeight: 3,
    };
    let stem3: Stem = {
        xRelative: 4,
        xFull: 8,
        isUp: false,
        headHeight: 4,
        tailHeight: -3,
    };
    let flag: Flag = {
        xRelative: 2,
        xFull: 8,
        isUp: true,
        headHeight: -4,
        tailHeight: 3,
        kind: "eighth",
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 8,
        height: -5,
        kind: "sharp",
    };
    let accidental2: Accidental = {
        xRelative: 2,
        xFull: 8,
        height: -4,
        kind: "flat",
    };
    let accidental3: Accidental = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "natural",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [restSymbol],
        stems: [stem1, stem2, stem3],
        flags: [flag],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2, accidental3],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 03", () => {
    let attributes: Attributes = {
        key: {
            fifths: -2,
        },
        clef: trebleClef,
    };
    let note: Note = {
        pitch: {
            step: "C",
            alter: 0,
            octave: 5,
        },
        duration: 1,
        division: 4,
    };
    let rest: Rest = {
        duration: 2,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note, rest];

    let noteHead: NoteHead = {
        xRelative: 0,
        xFull: 9,
        height: 1,
        kind: "16th",
        dots: 0,
    };
    let restSymbol: RestSymbol = {
        xRelative: 1,
        xFull: 9,
        kind: "half",
        dots: 0,
    };
    let stem: Stem = {
        xRelative: 0,
        xFull: 9,
        isUp: false,
        headHeight: 1,
        tailHeight: -6,
    };
    let flag: Flag = {
        xRelative: 0,
        xFull: 9,
        isUp: false,
        headHeight: 1,
        tailHeight: -6,
        kind: "16th",
    };
    let measure: Measure = {
        noteHeads: [noteHead],
        restSymbols: [restSymbol],
        stems: [stem],
        flags: [flag],
        beams: [],
        ties: [],
        accidentals: [],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 04", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note: Note = {
        pitch: {
            step: "G",
            alter: 0,
            octave: 5,
        },
        duration: 1,
        division: 2,
    };
    let rest: Rest = {
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note, rest];

    let noteHead: NoteHead = {
        xRelative: 0,
        xFull: 9,
        height: 5,
        kind: "eighth",
        dots: 0,
    };
    let restSymbol: RestSymbol = {
        xRelative: 1,
        xFull: 9,
        kind: "whole",
        dots: 0,
    };
    let stem: Stem = {
        xRelative: 0,
        xFull: 9,
        isUp: false,
        headHeight: 5,
        tailHeight: -2,
    };
    let flag: Flag = {
        xRelative: 0,
        xFull: 9,
        isUp: false,
        headHeight: 5,
        tailHeight: -2,
        kind: "eighth",
    };
    let measure: Measure = {
        noteHeads: [noteHead],
        restSymbols: [restSymbol],
        stems: [stem],
        flags: [flag],
        beams: [],
        ties: [],
        accidentals: [],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 03", () => {
    let attributes: Attributes = {
        key: {
            fifths: -2,
        },
        clef: trebleClef,
    };
    let rest1: Rest = {
        duration: 1,
        division: 4,
    };
    let note1: Note = {
        pitch: {
            step: "C",
            alter: 0,
            octave: 5,
        },
        duration: 3,
        division: 4,
        withTie: true,
    };
    let note2: Note = {
        pitch: {
            step: "C",
            alter: 0,
            octave: 5,
        },
        duration: 2,
        division: 1,
        withTie: false,
    };
    let rest2: Rest = {
        duration: 1,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [rest1, note1, note2, rest2];

    let noteHead1: NoteHead = {
        xRelative: 1,
        xFull: 16,
        height: 1,
        kind: "eighth",
        dots: 1,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 16,
        height: 1,
        kind: "half",
        dots: 0,
    };
    let restSymbol1: RestSymbol = {
        xRelative: 0,
        xFull: 16,
        kind: "16th",
        dots: 0,
    };
    let restSymbol2: RestSymbol = {
        xRelative: 12,
        xFull: 16,
        kind: "quarter",
        dots: 0,
    };
    let stem1: Stem = {
        xRelative: 1,
        xFull: 16,
        isUp: false,
        headHeight: 1,
        tailHeight: -6,
    };
    let stem2: Stem = {
        xRelative: 4,
        xFull: 16,
        isUp: false,
        headHeight: 1,
        tailHeight: -6,
    };
    let flag: Flag = {
        xRelative: 1,
        xFull: 16,
        isUp: false,
        headHeight: 1,
        tailHeight: -6,
        kind: "eighth",
    };
    let tie1: Tie = {
        isStart: true,
        xRelative: 1,
        xFull: 16,
        height: 1,
        isUp: false,
    };
    let tie2: Tie = {
        isStart: false,
        xRelative: 4,
        xFull: 16,
        height: 1,
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2],
        restSymbols: [restSymbol1, restSymbol2],
        stems: [stem1, stem2],
        flags: [flag],
        beams: [],
        ties: [tie1, tie2],
        accidentals: [],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 06", () => {
    let attributes: Attributes = {
        key: {
            fifths: 1,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "F",
            alter: 1,
            octave: 5,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "F",
            alter: 2,
            octave: 5,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 8,
        height: 4,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "whole",
        dots: 0,
    };
    let accidental: Accidental = {
        xRelative: 4,
        xFull: 8,
        height: 4,
        kind: "doublesharp",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 07", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 8,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 8,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental: Accidental = {
        xRelative: 0,
        xFull: 8,
        height: 0,
        kind: "doubleflat",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 08", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: -1,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doubleflat",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "flat",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 09", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: 1,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doublesharp",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "sharp",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 10", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: 0,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doubleflat",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "natural",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 11", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: 0,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doublesharp",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "natural",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 12", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: 1,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doubleflat",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "sharp",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 13", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: -1,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doublesharp",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "flat",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 14", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doubleflat",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "doublesharp",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});

test("constructMeasure test 15", () => {
    let attributes: Attributes = {
        key: {
            fifths: 0,
        },
        clef: trebleClef,
    };
    let note1: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note2: Note = {
        pitch: {
            step: "B",
            alter: 2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let note3: Note = {
        pitch: {
            step: "B",
            alter: -2,
            octave: 4,
        },
        duration: 4,
        division: 1,
    };
    let noteOrRests: NoteOrRest[] = [note1, note2, note3];

    let noteHead1: NoteHead = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead2: NoteHead = {
        xRelative: 4,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let noteHead3: NoteHead = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "whole",
        dots: 0,
    };
    let accidental1: Accidental = {
        xRelative: 0,
        xFull: 12,
        height: 0,
        kind: "doublesharp",
    };
    let accidental2: Accidental = {
        xRelative: 8,
        xFull: 12,
        height: 0,
        kind: "doubleflat",
    };
    let measure: Measure = {
        noteHeads: [noteHead1, noteHead2, noteHead3],
        restSymbols: [],
        stems: [],
        flags: [],
        beams: [],
        ties: [],
        accidentals: [accidental1, accidental2],
    };

    expect(constructMeasure(attributes, noteOrRests)).toStrictEqual(measure);
});
