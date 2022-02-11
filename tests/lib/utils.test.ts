import { lcm, noteValueToKind } from "../../src";

test("lcm test 01", () => {
    expect(lcm([])).toStrictEqual(1);
});

test("lcm test 02", () => {
    expect(lcm([2])).toStrictEqual(2);
});

test("lcm test 03", () => {
    expect(lcm([2, 3])).toStrictEqual(6);
});

test("lcm test 04", () => {
    expect(lcm([2, 3, 4])).toStrictEqual(12);
});

test("noteValueToKind test 01", () => {
    let duration = 1;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["quarter", 0]);
});

test("noteValueToKind test 02", () => {
    let duration = 2;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["half", 0]);
});

test("noteValueToKind test 03", () => {
    let duration = 4;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["whole", 0]);
});

test("noteValueToKind test 04", () => {
    let duration = 1;
    let division = 2;
    expect(noteValueToKind(duration, division)).toStrictEqual(["eighth", 0]);
});

test("noteValueToKind test 05", () => {
    let duration = 1;
    let division = 4;
    expect(noteValueToKind(duration, division)).toStrictEqual(["16th", 0]);
});

test("noteValueToKind test 06", () => {
    let duration = 1;
    let division = 8;
    expect(noteValueToKind(duration, division)).toStrictEqual(["32th", 0]);
});

test("noteValueToKind test 07", () => {
    let duration = 1;
    let division = 16;
    expect(noteValueToKind(duration, division)).toStrictEqual(["64th", 0]);
});

test("noteValueToKind test 08", () => {
    let duration = 3;
    let division = 2;
    expect(noteValueToKind(duration, division)).toStrictEqual(["quarter", 1]);
});

test("noteValueToKind test 09", () => {
    let duration = 3;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["half", 1]);
});

test("noteValueToKind test 10", () => {
    let duration = 6;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["whole", 1]);
});

test("noteValueToKind test 11", () => {
    let duration = 3;
    let division = 4;
    expect(noteValueToKind(duration, division)).toStrictEqual(["eighth", 1]);
});

test("noteValueToKind test 12", () => {
    let duration = 3;
    let division = 8;
    expect(noteValueToKind(duration, division)).toStrictEqual(["16th", 1]);
});

test("noteValueToKind test 13", () => {
    let duration = 3;
    let division = 16;
    expect(noteValueToKind(duration, division)).toStrictEqual(["32th", 1]);
});

test("noteValueToKind test 14", () => {
    let duration = 3;
    let division = 32;
    expect(noteValueToKind(duration, division)).toStrictEqual(["64th", 1]);
});

test("noteValueToKind test 15", () => {
    let duration = 7;
    let division = 4;
    expect(noteValueToKind(duration, division)).toStrictEqual(["quarter", 2]);
});

test("noteValueToKind test 16", () => {
    let duration = 7;
    let division = 2;
    expect(noteValueToKind(duration, division)).toStrictEqual(["half", 2]);
});

test("noteValueToKind test 17", () => {
    let duration = 7;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["whole", 2]);
});

test("noteValueToKind test 18", () => {
    let duration = 7;
    let division = 8;
    expect(noteValueToKind(duration, division)).toStrictEqual(["eighth", 2]);
});

test("noteValueToKind test 19", () => {
    let duration = 7;
    let division = 16;
    expect(noteValueToKind(duration, division)).toStrictEqual(["16th", 2]);
});

test("noteValueToKind test 20", () => {
    let duration = 7;
    let division = 32;
    expect(noteValueToKind(duration, division)).toStrictEqual(["32th", 2]);
});

test("noteValueToKind test 21", () => {
    let duration = 7;
    let division = 64;
    expect(noteValueToKind(duration, division)).toStrictEqual(["64th", 2]);
});

test("noteValueToKind test 22", () => {
    let duration = 5;
    let division = 1;
    expect(noteValueToKind(duration, division)).toStrictEqual(["", 0]);
});
