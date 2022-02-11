export declare type Degree = {
    value: number;
    alter?: number;
    type?: string;
};
export declare type Root = {
    step: string;
    alter: number;
};
export declare type Bass = {
    step: string;
    alter: number;
};
export declare type Kind = string;
export declare type Chord = {
    root: Root;
    kind: Kind;
    degrees?: Degree[];
    bass?: Bass;
};
export declare const parseChord: (s: string) => Chord | null | undefined;
//# sourceMappingURL=chordParser.d.ts.map