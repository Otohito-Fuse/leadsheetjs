export declare type Pitch = {
    step: string;
    alter?: number;
    octave: number;
};
export declare type Note = {
    pitch: Pitch;
    duration: number;
    division: number;
    withTie?: boolean;
    withBeam?: boolean;
};
export declare type Rest = {
    duration: number;
    division: number;
};
export declare type NoteOrRest = Note | Rest;
export declare const isNote: (item: NoteOrRest) => item is Note;
export declare const parseNote: (s: string) => Rest | null;
//# sourceMappingURL=noteParser.d.ts.map