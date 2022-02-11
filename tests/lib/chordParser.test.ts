import { Degree, Root, Bass, Chord, parseChord } from "../../src";

test("parseChord test null 01", () => {
    let s = "a";
    let t = parseChord(s);
    expect(t).toStrictEqual(null);
});

test("parseChord test null 02", () => {
    let s = "G_7(b9)/abc";
    let t = parseChord(s);
    expect(t).toStrictEqual(null);
});

test("parseChord test null 02", () => {
    let s = "G_7(###)";
    let t = parseChord(s);
    expect(t).toStrictEqual(null);
});

test("parseChord test no degrees no bass 01", () => {
    let s = "G_7";
    let t = parseChord(s);
    let root: Root = {
        step: "G",
        alter: 0,
    };
    let kind = "7";
    let chord: Chord = {
        root,
        kind,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test no degrees no bass 02", () => {
    let s = "Db_7sus4";
    let t = parseChord(s);
    let root: Root = {
        step: "D",
        alter: -1,
    };
    let kind = "7sus4";
    let chord: Chord = {
        root,
        kind,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test with degrees no bass 01", () => {
    let s = "Db_7sus4(13)";
    let t = parseChord(s);
    let root: Root = {
        step: "D",
        alter: -1,
    };
    let kind = "7sus4";
    let degree1: Degree = {
        value: 13,
        alter: 0,
        type: "",
    };
    let degrees = [degree1];
    let chord: Chord = {
        root,
        kind,
        degrees,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test with degrees no bass 02", () => {
    let s = "F#_9(#11)";
    let t = parseChord(s);
    let root: Root = {
        step: "F",
        alter: 1,
    };
    let kind = "9";
    let degree1: Degree = {
        value: 11,
        alter: 1,
        type: "",
    };
    let degrees = [degree1];
    let chord: Chord = {
        root,
        kind,
        degrees,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test with degrees no bass 03", () => {
    let s = "G##_9(add-b13)";
    let t = parseChord(s);
    let root: Root = {
        step: "G",
        alter: 2,
    };
    let kind = "9";
    let degree1: Degree = {
        value: 13,
        alter: -1,
        type: "add",
    };
    let degrees = [degree1];
    let chord: Chord = {
        root,
        kind,
        degrees,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test with degrees no bass 04", () => {
    let s = "C(add-4,b9)";
    let t = parseChord(s);
    let root: Root = {
        step: "C",
        alter: 0,
    };
    let kind = "";
    let degree1: Degree = {
        value: 4,
        alter: 0,
        type: "add",
    };
    let degree2: Degree = {
        value: 9,
        alter: -1,
        type: "",
    };
    let degrees = [degree1, degree2];
    let chord: Chord = {
        root,
        kind,
        degrees,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test with degrees with bass 01", () => {
    let s = "Db_7sus4(13)/Eb";
    let t = parseChord(s);
    let root: Root = {
        step: "D",
        alter: -1,
    };
    let kind = "7sus4";
    let degree1: Degree = {
        value: 13,
        alter: 0,
        type: "",
    };
    let degrees = [degree1];
    let bass: Bass = {
        step: "E",
        alter: -1,
    };
    let chord: Chord = {
        root,
        kind,
        degrees,
        bass,
    };
    expect(t).toStrictEqual(chord);
});

test("parseChord test no degrees with bass 01", () => {
    let s = "G_7/D";
    let t = parseChord(s);
    let root: Root = {
        step: "G",
        alter: 0,
    };
    let kind = "7";
    let bass: Bass = {
        step: "D",
        alter: 0,
    };
    let chord: Chord = {
        root,
        kind,
        bass,
    };
    expect(t).toStrictEqual(chord);
});
