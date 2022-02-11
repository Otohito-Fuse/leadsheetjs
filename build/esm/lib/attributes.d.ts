export declare type Key = {
    fifths: number;
    mode?: string;
};
export declare type Time = {
    beats: number;
    beatType: number;
};
export declare type Clef = {
    sign: string;
    line: number;
};
export declare const trebleClef: Clef;
export declare const bassClef: Clef;
export declare type Attributes = {
    key: Key;
    time?: Time;
    clef: Clef;
};
//# sourceMappingURL=attributes.d.ts.map