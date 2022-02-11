export type NoteHead = {
    xRelative: number;
    xFull: number;
    height: number;
    kind: string;
    scale?: number;
    dx?: number;
    dy?: number;
    dots?: number;
};

export type RestSymbol = {
    xRelative: number;
    xFull: number;
    height?: number;
    kind: string;
    scale?: number;
    dx?: number;
    dy?: number;
    dots?: number;
};

export type Stem = {
    xRelative: number;
    xFull: number;
    isUp: boolean;
    headHeight: number;
    dx?: number;
    tailHeight?: number;
};

export type Flag = {
    xRelative: number;
    xFull: number;
    isUp: boolean;
    headHeight: number;
    dx?: number;
    tailHeight?: number;
    kind: string;
};

export type Beam = {
    xStartRelative: number;
    xEndRelative: number;
    xFull: number;
    startHeight: number;
    endHeight: number;
    dxStart?: number;
    dxEnd?: number;
};

export type Tie = {
    isStart: boolean;
    xRelative: number;
    xFull: number;
    height: number;
    isUp?: boolean;
    dx?: number;
    dy?: number;
};

export type Accidental = {
    xRelative: number;
    xFull: number;
    height: number;
    kind: string;
    scale?: number;
    dx?: number;
    dy?: number;
};

export type Measure = {
    noteHeads?: NoteHead[];
    restSymbols?: RestSymbol[];
    stems?: Stem[];
    flags?: Flag[];
    beams?: Beam[];
    ties?: Tie[];
    accidentals?: Accidental[];
};
