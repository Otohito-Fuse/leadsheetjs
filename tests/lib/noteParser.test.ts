import { Pitch, Note, Rest, parseNote } from "../../src";

test("parseNote test 01", () => {
    let s = "G";
    let t = parseNote(s);
    expect(t).toStrictEqual(null);
});

test("parseNote test 02", () => {
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

test("parseNote test 03", () => {
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

test("parseNote test 04", () => {
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

test("parseNote test 05", () => {
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

test("parseNote test 06", () => {
    let s = "R4..";
    let t = parseNote(s);
    let rest: Rest = {
        duration: 7,
        division: 8,
    };
    expect(t).toStrictEqual(rest);
});
