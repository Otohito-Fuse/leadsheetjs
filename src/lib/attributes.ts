export type Key = {
    fifths: number;
    mode?: string;
};

export type Time = {
    beats: number;
    beatType: number;
};

export type Clef = {
    sign: string;
    line: number;
};

export const trebleClef: Clef = {
    sign: "G",
    line: 2,
};

export const bassClef: Clef = {
    sign: "F",
    line: 4,
};

export type Attributes = {
    key: Key;
    time?: Time;
    clef: Clef;
};
