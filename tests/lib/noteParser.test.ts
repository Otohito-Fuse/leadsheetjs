import { Pitch, Note, Rest, parseNote } from "../../src";

test("parseNote test note 01", () => {
    let s = "G";
    let t = parseNote(s);
    expect(t).toStrictEqual(null);
});

test("parseNote test note 02", () => {
    let s = "G5";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "G",
        alter: 0,
        octave: 4,
    };
    let note: Note = {
        pitch,
        duration: 1,
        division: 1,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 03", () => {
    let s = "F#^6";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "F",
        alter: 1,
        octave: 5,
    };
    let note: Note = {
        pitch,
        duration: 2,
        division: 1,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 04", () => {
    let s = "Bb__4";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "B",
        alter: -1,
        octave: 2,
    };
    let note: Note = {
        pitch,
        duration: 1,
        division: 2,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 05", () => {
    let s = "Ebb_4.";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "E",
        alter: -2,
        octave: 3,
    };
    let note: Note = {
        pitch,
        duration: 3,
        division: 4,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 06", () => {
    let s = "G6.";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "G",
        alter: 0,
        octave: 4,
    };
    let note: Note = {
        pitch,
        duration: 3,
        division: 1,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 07", () => {
    let s = "G5..";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "G",
        alter: 0,
        octave: 4,
    };
    let note: Note = {
        pitch,
        duration: 7,
        division: 4,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 08", () => {
    let s = "G6..";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "G",
        alter: 0,
        octave: 4,
    };
    let note: Note = {
        pitch,
        duration: 7,
        division: 2,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test note 09", () => {
    let s = "G7..";
    let t = parseNote(s);
    let pitch: Pitch = {
        step: "G",
        alter: 0,
        octave: 4,
    };
    let note: Note = {
        pitch,
        duration: 7,
        division: 1,
    };
    expect(t).toStrictEqual(note);
});

test("parseNote test rest 01", () => {
    let s = "R4";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 1,
        division: 2,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 02", () => {
    let s = "R4.";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 3,
        division: 4,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 03", () => {
    let s = "R4..";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 7,
        division: 8,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 04", () => {
    let s = "R5";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 1,
        division: 1,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 05", () => {
    let s = "R5.";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 3,
        division: 2,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 06", () => {
    let s = "R5..";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 7,
        division: 4,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 07", () => {
    let s = "R6";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 2,
        division: 1,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 08", () => {
    let s = "R6.";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 3,
        division: 1,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 09", () => {
    let s = "R6..";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 7,
        division: 2,
    };
    expect(t).toStrictEqual(rest);
});

test("parseNote test rest 10", () => {
    let s = "R7..";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 7,
        division: 1,
    };
    expect(t).toStrictEqual(rest);
});