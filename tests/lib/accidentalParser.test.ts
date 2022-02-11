import { parseAccidental } from "../../src";

test("parseAccidental test 01", () => {
    let alter = parseAccidental("");
    expect(alter).toStrictEqual(0);
});

test("parseAccidental test 02", () => {
    let alter = parseAccidental("#");
    expect(alter).toStrictEqual(1);
});

test("parseAccidental test 03", () => {
    let alter = parseAccidental("##");
    expect(alter).toStrictEqual(2);
});

test("parseAccidental test 04", () => {
    let alter = parseAccidental("b");
    expect(alter).toStrictEqual(-1);
});

test("parseAccidental test 05", () => {
    let alter = parseAccidental("bb");
    expect(alter).toStrictEqual(-2);
});
